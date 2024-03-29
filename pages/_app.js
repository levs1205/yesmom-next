// import App from 'next/app'
import React from "react";
import Provider from "../context/Provider";
import "bootstrap/dist/css/bootstrap.min.css";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

import 'react-phone-input-2/lib/style.css'
import "react-phone-input-2/lib/bootstrap.css";
import '../components/pagination.css'


function MyApp({ Component, pageProps }) {

  return (
      <Provider >
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

