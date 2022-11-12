import Head from 'next/head';
import IndexLayout from "components/layouts/IndexLayout";
import { useRouter } from 'next/router';
import ImageSider from 'container/home/ImageSlider';
import Product_ShowIndex from 'container/Product/ProductShowIndex';
import Product_Test from 'container/ProductTest/ProductTest';

export default function HomePage() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>PigJungle</title>
        <meta
          name="description"
          content="|| Home"
        />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <div id='home-page' name="home-page" className='home-page'>
        <ImageSider />
        <Product_ShowIndex />
        <Product_Test />
      </div>
    </>
  );
}
HomePage.layout = IndexLayout;