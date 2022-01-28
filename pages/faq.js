import Head from 'next/head';
import Layout from '../components/Layout';
import FAQContent from '../components/FAQContent';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>tinyimpact | FAQ </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <FAQContent />
    </Layout>
  );
}
