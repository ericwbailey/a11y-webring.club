export class UnverifiedHostnameError extends Error {
    constructor(message, hostname, args) {
        super(`${message}: ${JSON.stringify({
            hostname,
            ...args
        }, null, 2)}`)

        Error.captureStackTrace(this, UnverifiedHostnameError)
    }
}

export class RedirectError extends Error {
    constructor(message, metadata = null) {
        const msg = (metadata) ? `${message}: ${JSON.stringify(metadata, null, 2)}` : message
        super(msg)

        Error.captureStackTrace(this, RedirectError)
    }
}
