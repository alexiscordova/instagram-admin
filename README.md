# Instagram Admin
A pseudo administrator interface for Instagram, written in React.js

## What is this?
The Instagram administrator interface is a side-project (not designed for broad release) to allow users web access to their Instagram data: posted photos and videos, as well as liked content. Ideally, one would then be able to download all their content—since it belongs to them—and be able to see in a single place all your activity within Instagram.

## Why does this exist?
On the whole, the Instagram website is a second-class citizen in their ecosystem; Instagram began as a mobile platform, and understandably that is where their focus seems to be. However, the data to bring the website up to speed is available through the Instagram API, so it seemed like a good opportunity.

Also, I used to use an [IFTTT](http://ifttt.com) recipe to automatically download my liked photos to Dropbox, which then would appear as my computer screensaver. It was pretty rad, and I was then able to enjoy this content for a longer period of time.

But then June 1, 2016 came around, and Instagram changed their API guidelines, causing this ability to cease.

## What happened with "liked" content?
On June 1, 2016, Instagram changed their API guidelines to force all apps into "sandbox mode," which limits access to Instagram's data without submitting their app for approval. The content available in sandbox mode is limited to the authenticated-user's own profile information posts (maximum of 20). Unfortunately, liked content isn't considered "own" content.

Because this side project was designed to emulate Instagram's own website, there's no way it would be approved in the approval process. This means that not only am I limited to my own posted content—with the posted content is limited in quantity—but users have to manually be whitelisted to be able to use this app.

## What technology is used?
- React.js
- Webpack
- Sass (SCSS)
- ES6/ES2015
