// pages/index.tsx

import Dapp from '@/app/Dapp';
import Head from 'next/head';
import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        DappHub
      </Head>
        <Dapp />
    </>
  );
};

export default Home;
