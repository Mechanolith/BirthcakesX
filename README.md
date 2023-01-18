# Gatsby Template

A template Git repository for setting up a Gatsby-powered website, with Netlify Lambda API support, and Redux state.

## Beginning

1. Fork the repository
2. Clone the new repository to your local computer.
3. Install dependencies:
    ```
    npm install
    ```
4. Create an environment file by copying the `.env.example` file and populate as required.
5. Serve the Netlify Lambda functions:
    ```
    npm run fns:serve
    ```
    By default they are served on port `9005`, this can be configured in the `package.json`
6. Serve the Gatsby site:
    ```
    npm run develop
    ```
    By default the Gatsby server runs on port `8005`, this can be configured in the `package.json`.

## Deploying

The static site can be built with:

```
npm run build
```

The repository comes with a Netlify TOML file for deploying the site and functions on Netlify.
