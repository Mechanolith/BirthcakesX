import React, { FunctionComponent, PropsWithChildren } from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface IMetaAsName {
    name: string;
    content?: string;
}

interface IMetaAsProperty {
    property: string;
    content?: string;
}

type Meta = (IMetaAsName | IMetaAsProperty)[];

interface IProps {
    description?: string;
    lang?: string;
    meta?: Meta;
    title: string;
}

const defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
};

export const SEO: FunctionComponent<IProps> = (props: PropsWithChildren<IProps>) => {
    const { description, lang, meta, title } = { ...defaultProps, ...props };
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `,
    );

    const metaDescription = `${description || site.siteMetadata.description}`;

    const fullMeta: Meta = [
        ...meta,
        {
            name: `description`,
            content: metaDescription,
        },
        {
            property: `og:title`,
            content: title,
        },
        {
            property: `og:description`,
            content: metaDescription,
        },
        {
            property: `og:type`,
            content: `website`,
        },
        {
            name: `twitter:card`,
            content: `summary`,
        },
        {
            name: `twitter:creator`,
            content: `${site.siteMetadata.author}`,
        },
        {
            name: `twitter:title`,
            content: title,
        },
        {
            name: `twitter:description`,
            content: metaDescription,
        },
    ];

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s ${site.siteMetadata.title}`}
            meta={fullMeta}
        >
            <meta charSet="utf-8" />
        </Helmet>
    );
};
