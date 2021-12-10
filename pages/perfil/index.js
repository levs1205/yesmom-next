import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useLayoutEffect } from "react";
import LoaderPage from "../../components/LoaderPage";
// import AppLayout from '../../components/AppLayout'
// import TitlePerfil from '../../components/Perfil/TitlePerfil'

const index = () => {
  return <LoaderPage />;
};

export default index;

export const getServerSideProps = ( { req , res }) => {
  return {
    redirect: {
      permanent: false,
      destination: "/perfil/miperfil",
    },
    props:{}
  }
}