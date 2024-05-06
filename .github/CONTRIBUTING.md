# Contributing

Thank you for your interest in contributing to this project!

## I want to add my site to the webring

Great!

Big-picture there are two things you need to do:

1. [Add the webring code]((https://a11y-webring.club#code)) to your website, and
2. [Add yourself to the webring's `data/members/` directory as JSON](https://github.com/ericwbailey/a11y-webring.club/tree/main/data/members) file as a pull request.

### 1. Add the webring code to your website

This step ensures that the webring will not have a dead end when you join it.

Copy [the webring code](https://a11y-webring.club#code) and put it somewhere on your website.

This process depends on how your website is built, so unfortunately I cannot provide much support for this step.

### 2. Add yourself to the webring

To add yourself to the webring, submit a pull request to this repository where you have added your information as a JSON file. You can reference and copy/paste [my JSON entry](https://github.com/ericwbailey/a11y-webring.club/blob/main/data/members/Eric%20Bailey.json) as a format to use.

#### Required information

* `date`: The day you add yourself to the webring, in `YYYY-MM-DDThh:mm` format. You can use `T00:00` for the hour an minute if you want.
* `name`: Your name (can be your given name, a nickname, a handle, etc.).
* `url`: Your website's address (ex: `https://web-a11y.club/`). The URL <strong>must</strong> use the HTTPS protocol.

Ideally, your `url` points to the page that displays the webring code, but this is not required.

#### Optional information

* `accessibilityStatement`: The URL for your website's accessibility statement.
* `github`: Your GitHub profile address (ex: `https://github.com/yourname`).
* `linkedin`: Your LinkedIn profile address (ex: `https://www.linkedin.com/in/yourname/`).
* `mastodon`: Your Mastodon account (ex: `https://mastodon.social/@YourName`).
* `rss`: The RSS feed for your website.

If you do not have this information, please use `null` for the entry's value:

```
"mastodon": null
```

Be sure to save your webring member JSON file using the same name as your `name` value. For example, mine is called `Eric Bailey.json`.

Once your pull request is merged, [the webring's list of members](https://a11y-webring.club#members) will automatically update to list the information you provided ✨

Once these two steps are completed, both the webring and your site will allow for discovery!

---

## I want to update my information

This process is similar to adding yourself to the webring.

Submit a pull request that modifies your JSON member information. This can include:

* Adding info,
* Updating info, and
* Removing info.

## I want to make updates to the webring's website

Want to help out? Cool!

Please check the project [Issues](https://github.com/ericwbailey/a11y-webring.club/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) to see if there is something I'm specifically looking for help with.

If you want to propose new features or functionality, please [create an issue](https://github.com/ericwbailey/a11y-webring.club/issues/new) before submitting a pull request. This will help us determine if your suggestion is inline with my vision for where the project should go.

## I want to use Medium, LinkedIn, Facebook, Twitter/X, etc. as my website

Unfortunately, this is something that will break the webring. Since you do not own your content on these platforms they are incompatible with a webring's approach. This is why some of these services are offered as optional links you can add.

## I want to suggest a new social media service to add

I'm definitely open to suggestions! I will not allow [Twitter/X](https://twitter.com/) or [Threads](https://www.threads.net/), due to ethical issues I have with each platform.

If you have a suggestion for a service other than those two, please [create an issue](https://github.com/ericwbailey/a11y-webring.club/issues/new) so we can chat it out.

## I want to add someone else's website

That's a nice idea, but I prefer if the person who made the site adds themselves for a variety of reasons. You could definitely suggest they do so, though!

## I want to leave the webring

That's fine, too. If you choose leave the webring I ask that:

1. You either submit a PR removing your membership JSON file, or raise an issue asking to be removed, and
1. You delete the webring code from your website.

This will remove you from the webring and also allow people browsing the webring to not get stuck.

## I want to re-join the webring

Welcome back! All you need to do is follow the steps to [add your site to the webring](#i-want-to-add-my-site-to-the-webring) again.

## I want to start my own webring

Nice! Check out this [webring project](https://github.com/maxboeck/webring/) made by [Max Böck](https://mxb.dev/).

This code is the starting point I used to make this project. It relies on [Netlify](https://netlify.com/) to work.

## I want to participate, but I'm not good at git

Send me an email or a DM on [Mastodon](https://social.ericwbailey.website/@eric) and we'll get things sorted.
