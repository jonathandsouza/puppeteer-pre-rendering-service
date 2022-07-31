# Per-rendering service (Puppeteer + NestJS)

A pre-rendering service written using [puppeteer](https://pptr.dev/) & [nestJS](https://nestjs.com/). The pre-rendering servcie will generate static content to be served to web crawlers.

## What is the need for a pre-rendering service?

Modern SPA web apps do not work very well with most web crawlers, leading to lower ranking. This servcie will ensure web crawlers are served the correct content. Additonal argument for a pre-rendering service can be found [here](https://jonascodeblog.vercel.app/)

## How to set-up & run the service?

```bash
npm i puppeteer
npm run start
```

Once the service is running. Go to the following link (http://localhost:3030/?url=https://www.google.com/). Observe that the response of the request is static content.
