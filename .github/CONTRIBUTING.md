# Contributing

Thank you for your interest in contributing to this project!

## I want to add my site to the webring

Great!

Big-picture there's two things you need to do:

1. Add yourself to the webring's `sites.json` file as a pull request, and
2. Add the webring code to your website.

### 1. Add yourself to the webring

To add yourself to the webring, submit a pull request to this repository where you have added your information to the end of [`sites.json`](https://github.com/ericwbailey/a11y-webring.club/blob/main/data/sites.json).

<strong>Required</strong> information is:

- `name`: Your name (can be your given name, your full name, a handle, etc.)
- `uri`: Your website's address (ex: `https://web-a11y.club/`)

Ideally, your `uri` points to the page that displays the webring code, but this is not required.

<strong>Optional</strong> information is:

- `linkedin`: Your LinkedIn profile address (ex: `https://www.linkedin.com/in/yourname/`)
- `mastodon`: Your Mastodon account (ex: `https://mastodon.social/@YourName`)
- `rss`: The RSS feed for your website
- `twitter`: Your Twitter account (ex: `https://twitter.com/yourname`)

If you are the last entry in `sites.json` make sure that your closing curly brace (`}`) <strong>does not</strong> have a comma (`,`) placed after it, as this will cause the site to break.

Once your pull request is merged, [the webring's list of members](https://a11y-webring.club#members) will automatically update to list the information you provided.

### 2. Add the webring code to your website

Copy [this code](https://a11y-webring.club#code) and put it somewhere on your website.

This process depends on how your website is built, so I can't provide much support for this step.

Once these two steps are done, both the webring and your site will allow for discovery!

## I want to update my information

This process is similar to adding yourself to the webring. Submit a pull request that modifies your `sites.json` information. This can include adding info, updating info, and removing info.

## I want to make updates to the webring's website

Want to help out? Cool!

Please check the project [Issues](https://github.com/ericwbailey/a11y-webring.club/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) to see if there is something I'm specifically looking for help with.

If you want to propose new features or functionality, please [create an issue](https://github.com/ericwbailey/a11y-webring.club/issues/new) before submitting a pull request. This will help us determine if your suggestion is inline with my vision for where the project should go.

## I want to add someone else's website

That's a nice idea, but I prefer if the person who made the site adds themselves for a variety of reasons. You could definitely suggest they do so, though!

## I want to leave the webring

That's fine, too. If you choose leave the webring we ask that:

1. You either submit a PR removing yourself from `sites.json` or raise an issue asking to be removed, and
1. You delete the webring code from your website.

This will remove you from the webring and also allow people browsing the webring to not get stuck.

## I want to start my own webring

Nice! Check out this [netlify-webring project](https://github.com/brob/netlify-webring) made by [Bryan Robinson](http://bryanlrobinson.com/).

This code is the starting point I used to make this project. It relies on [Netlify](https://netlify.com/) to work.

## I want to help out, but I'm not good at git

Send me an email or a DM on [Mastodon](https://social.ericwbailey.website/@eric) and we'll get things sorted.
