import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return(
        <Html lang="en">
            <Head>
                <link rel="stylesheet" href="/static/css/style.css" />
            </Head>
            <body>
                <Main></Main>
                <NextScript></NextScript>
            </body>
        </Html>
    )
}