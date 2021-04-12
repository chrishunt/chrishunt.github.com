[![](https://github.com/chrishunt/chrishunt.github.com/raw/master/screenshot.jpg)](http://www.chrishunt.co)

## Development

Start development server:

```
$ yarn run develop
```

View/test on iPhone on another machine:

```
$ ngrok http 8000
```

Build and test production:

```
$ yarn run build
$ yarn run serve
```

## Create a new page

Create new blog post:

```
$ mkdir content/blog/new-blog-post
$ vi content/blog/new-blog-post/index.md
```

Create new (non-blog, React) page:

```
$ vi src/pages/new-page.js
```

## Deploy to gh-pages

```
$ yarn run deploy
```
