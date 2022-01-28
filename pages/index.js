import Head from 'next/head';
import Layout from '../components/Layout';
import HomeContent from '../components/HomeContent';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>tinyimpact</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HomeContent />
    </Layout>
  );
}
