import fetch from 'node-fetch'
import members from '../data/members'
import {RedirectError} from './common/errors'

members.push({
    url: 'https://httpbin.org/status/302'
})

export const handler = async (event, context) => {
    const errors = []

    for (const member of members) {
        const url = member.url

        try {
            const res = await fetch(url, {
                redirect: 'manual'
            })

            if (!res.ok) {
                // TODO: figure out what to do to remove the URL from the webring
                errors.push(new RedirectError(`did not receive a 2xx response from ${url}`, {
                    status: res.status,
                    statusText: res.statusText,
                    headers: res.headers.raw()
                }))
            }
        } catch (err) {
            errors.push(err)
        }
    }

    if (errors.length > 0) {
        errors.forEach((e) => console.log(e))
    }

    return {
        statusCode: 200,
    }
}
