import Head from 'next/head';
import IndexLayout from "components/layouts/IndexLayout";
import { useRouter } from 'next/router';
import ImageSider from '@/components/ImageSlider/ImageSlider';
import ProductShowIndex from '@/components/ProductShowIndex/ProductShowIndex';
import ProductTest from '@/components/ProductTest/ProductTest';
// import IndexNavbar from '@/components/Navbars/IndexNavbar';

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
        <ImageSider/>
        <ProductShowIndex/>
        <ProductTest/>
      </div>
    </>
  );
}
HomePage.layout = IndexLayout;