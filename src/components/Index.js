import React from 'react'
import { Helmet } from "react-helmet";
import favicon from "public/favicon.ico";
import D from '../logo.svg'

const open_graph = () => {
    const currentUrl = document.location.href;
    return (
        <ThemeProvider theme={theme}>
            <Helmet>
                <title>d3h1</title>
                <link rel="icon" href={favicon} />
                <meta property="og:url" content={currentUrl} />
                <meta property="og:title" content="d3h1" />
                <meta
                    property="og:description"
                    content="문구 추천 좀"
                />
                {/* 페이지 대표 이미지 정보 */}
                <meta property="og:image" content={D} />

                {/* 트위터 메타 정보 */}
                <meta name="twitter:title" content="d3h1" />
                <meta name="twitter:description" content="문구 추천 좀" />
                <meta name="twitter:image" content={D} />
            </Helmet>
            </ThemeProvider>
    );
}

export default open_graph
