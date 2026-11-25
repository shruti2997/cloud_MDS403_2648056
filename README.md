# Enterprise Cloud Service Catalog

A Node.js and Express web application serving a static Cloud Service Catalog interface alongside RESTful JSON endpoints (`/api/services` and `/api/status`).

## Local Development vs. Vercel Port Assignment

In local development, the Express application evaluates `process.env.PORT || 8080` and finds no predefined environment port, so it falls back to binding directly to custom TCP port `8080` on `localhost`. This allows predictable local testing and isolates the app from default port `3000` services. Conversely, when deployed to Vercel's cloud PaaS infrastructure, the platform dynamically manages routing through its edge network and serverless runtime. Vercel injects an ephemeral port via `process.env.PORT` (or invokes the exported Express handler directly), automatically terminating external HTTPS traffic on standard port `443` without manual port configuration.