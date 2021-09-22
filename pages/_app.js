// import App from 'next/app'
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Provider from "../context/Provider";
import { Amplify } from "aws-amplify";
import awsExports from "../src/aws-exports";

Amplify.configure({ ...awsExports, ssr: true });

 
function MyApp({ Component, pageProps }) {
  
  return (
      <Provider>
          <Component {...pageProps} />
      </Provider>
  )
}

export default MyApp;



// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

