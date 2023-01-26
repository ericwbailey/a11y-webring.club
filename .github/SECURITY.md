# Security

I take security and privacy seriously. Here is what I am doing to maintain the integrity of the webring:

## Accounts and access

The webring relies on four accounts to function:

- [Gmail](https://mail.google.com/): The email address I use for account access.
- [iwantmyname](https://iwantmyname.com/): The domain registrar.
- [GitHub](https://github.com/): Hosts the webring code.
- [Netlifty](https://netlify.com/): Builds the webring code, deploys it, and handles webring redirects.

For each account, I am the sole individual with access to login credentials. Each account uses a unique password and multifactor authentication. GitHub also requires the use of a physical hardware key.

Each service also uses HTTPS.

## Development environment

I use [Codespaces](https://github.com/features/codespaces) to work on the webring. Codespaces are sanitized virtual development environments managed by GitHub.

The local development server is proxied when run via Codespaces.

## Code evaluation

All code is hosted on this publicly-viewable GitHub repository.

The environment used to build the code locally is the same environment Netlify uses to deploy the site.

## Dependencies

I have purposely tried to structure the project to use as few dependencies as I can. Automated dependency evaluation is also set up to check for known vulnerabilities.

All dependencies are also server-side rendered, and not exposed to the client.

## Server-side rendering

The webring is precompiled on Netlify. Nearly all content is static, save for [the redirect functions](https://github.com/ericwbailey/a11y-webring.club/tree/main/functions).

[The webring code](https://a11y-webring.club/#list-the-webring-on-your-website) is entirely static HTML, and does not require CSS, JavaScript, or other technologies to work—Netlify handles this.

## Evaluation of content

Requests to be added to the webring are a manual process, where I evaluate the site and its content. This evaluation includes compliance with the [Code of Conduct](https://github.com/ericwbailey/a11y-webring.club/blob/main/.github/CODE_OF_CONDUCT.md), which prohibits harmful content.

## Removal of sites

If a site is removed the webring automatically updates to remove it from the list of sites someone can visit.

While the offending site can still list the webring code, it cannot control where someone using its links goes or be linked back to. The one exception is if a person has the webring open in a browser tab and does not refresh or reload the page, as they are using a cached version of the site and it does not push out updates.

---

This document is [sourced from this GitHub issue](https://github.com/ericwbailey/a11y-webring.club/issues/33).
