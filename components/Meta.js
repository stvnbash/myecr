import Head from 'next/head'

export default function Meta({ title, keywords, description }) {
    return (
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta charSet='utf-8' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <link rel='icon' href='/favicon.ico' />
            <title>{title === 'myECR' ? 'myECR' : `${title} | MyECR`}</title>

            {/* https://www.netlify.com/blog/2020/05/08/improve-your-seo-and-social-sharing-cards-with-next.js/ */}
            {/* Twitter */}
            {/* <meta name="twitter:card" content="summary" key="twcard" />
            <meta name="twitter:creator" content={twitterHandle} key="twhandle" /> */}

            {/* Open Graph */}
            {/* <meta property="og:url" content={currentURL} key="ogurl" />
            <meta property="og:image" content={previewImage} key="ogimage" />
            <meta property="og:site_name" content={siteName} key="ogsitename" /> */}
            <meta property="og:title" content={title === 'myECR' ? 'myECR' : `${title} | MyECR`} key="ogtitle" />
            <meta property="og:description" content={description} key="ogdesc" />
        </Head>
    )
}

Meta.defaultProps = {
    title: 'myECR',
    keywords: '',
    description: 'El Camino Real Charter High School',
}