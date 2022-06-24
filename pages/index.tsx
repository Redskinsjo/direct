/* eslint-disable quotes */
import type { NextPage } from 'next';
import Image from 'next/image';
import Logo from '@/assets/images/logo.svg';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Head from 'next/head';
import Script from 'next/script';

import FormBeta from '@/components/form-beta';
import Language from '@/components/language';

const Home: NextPage = () => {
  const [discover, setDiscover] = useState<boolean>(false);
  const { t } = useTranslation();

  return (
    <div className='relative h-full' id='homepage'>
      <Head>
        <Script src='../analytics.ts'></Script>
        <meta
          property='og:title'
          content="Direct Hotel Business: Réserver votre chambre d'hôtel moins cher qu'avant"
        />
        <meta
          property='og:description'
          content="Organiser son séjour directement avec l'hôtel et gagner 20% sur votre réservation. Encore en bêta, renseignez votre intérêt et obtenez l'avantage en avant-première"
        />
        <meta name='author' content='Jonathan Carnos' />
        <meta
          name='google-site-verification'
          content='eYz9plGMyApOd7l6TNDbC9hv1f21l_fQpnA9CgcOviA'
        />
      </Head>
      <body>
        <div className='absolute mx-16 my-2'>
          <span className='absolute text-white font-parisienne text-4xl z-20 top-4 left-2 slidein-30'>
            Direct
          </span>
          <Image
            src={Logo}
            width={180}
            height={90}
            layout='raw'
            alt='Logo official'
            className='slidein-200 relative top-2 z-10 bottom-8'
          />
        </div>
        <iframe
          src='https://iframe.videodelivery.net/b7ca63b8f05e81406d34be8b8016924b?autoplay=true&muted=true&loop=true&controls=false&preload=auto'
          className={'w-full h-full bg-transparent absolute border-0'}
          allowFullScreen={true}
        ></iframe>

        <div className='w-58 h-16 absolute top-32 left-44'>
          <div className='text-[#fff] text-3xl slidein-30'>{t('hero-p')}</div>
          <div className='text-lg text-[#eee] slidein-30'>
            {t('hero-details')}
            <span className='mx-1'>-</span>
            <span className='text-[gold]'>Bêta</span>
          </div>
          <button
            onClick={() => {
              setDiscover(true);
            }}
            className='mt-2 ml-8 p-2 rounded-lg button-gold hover:bg-[#FFD700dc] text-xl slidein-200'
          >
            {t('hero-action')}
          </button>
        </div>
        {discover && <FormBeta />}
        <Language />
      </body>
      <noscript>
        <iframe
          src='https://www.googletagmanager.com/ns.html?id=GTM-WZ9QF5G'
          height='0'
          width='0'
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
    </div>
  );
};

export default Home;
