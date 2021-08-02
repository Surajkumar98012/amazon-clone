import { getSession } from "next-auth/client";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    
    <div className="bg-gray-100">
    <meta name="google-site-verification" content="Rh_-hyLd9vZl_HkK2sfTcmIbao3wSAAl99Xl8H3IOuY" />
      <Head>
        <title>Online Shopping Site</title>
      </Head>

         {/*header */}
         <Header/>

        <main className="max-w-screen-2xl mx-auto">
             {/*Banner */}
             <Banner/>
             {/*Productfeed */}
             <ProductFeed products={products} />
        </main>
    </div>
  );
}

export async function getServerSideProps(context){
   const session = await getSession(context)
   const products=await fetch("https://fakestoreapi.com/products").then(
   (res)=>res.json()
   );
   return {
     props:{
     products,
     session,
   }};
}
