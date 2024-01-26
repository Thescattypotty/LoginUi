import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

// Cette fonction englobe toutes vos pages
function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default MyApp;
