import {Resolver} from 'node:dns/promises'
import members from '../data/members'
import {UnverifiedHostnameError} from './common/errors'

const TXTPREFIX = 'a11y-webring-club-verification'

const resolver = new Resolver()

export const handler = async (event, context) => {
    const errors = []

    for (const member of members) {
        // if we haven't defined a key for a member we won't verify
        if (!('key' in member)) {
            continue
        }

        const url = new URL(member.url)

        try {
            const res = await resolver.resolveTxt(url.hostname)

            res.flat().forEach((el) => {
                if (!el.startsWith(TXTPREFIX)) {
                    return
                }

                const key = el.split('=').pop()
                if (key !== member.key) {
                    // TODO: figure out what to do to remove the URL from the webring
                    errors.push(new UnverifiedHostnameError(`could not verify: ${member.url}`, url.hostname, {
                        memberKey: member.key,
                        providedKey: key,
                        dnsRecords: res.flat()
                    }))
                }
            })
        } catch (err) {
            errors.push(new UnverifiedHostnameError(err, url.hostname))
        }
    }

    if (errors.length > 0) {
        errors.forEach((e) => console.log(e))
    }

    return {
        statusCode: 200,
    }
}
