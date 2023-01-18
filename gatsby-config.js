/* eslint-disable @typescript-eslint/no-var-requires */

const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();

module.exports = {
    siteMetadata: {
        title: ``,
        description: `An invitation for the finest guests.`,
        author: `Jack Pilz <jack.h.pilz@gmail.com>`,
    },
    developMiddleware: (app) => {
        const package = require("./package.json");

        const match = package.scripts["fns:serve"].match(/--port\s(\d+)$/);
        if (match && match.length === 2) {
            const port = Number.parseInt(match[1], 10);

            app.use(
                // Proxy Netlify Functions on the appropriate port to /.netlify/functions locally
                createProxyMiddleware("/.netlify", {
                    target: `http://[::1]:${port}`,
                    headers: {
                        Connection: "keep-alive",
                    },
                    pathRewrite: {},
                }),
            );
        } else {
            // eslint-disable-next-line no-console
            console.warn("No function serving port was found.");
        }
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                useResolveUrlLoader: true,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-typescript`,
        `gatsby-plugin-favicon`,
    ],
};
