import React, { JSX } from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Azores Wiki"
      description="Explore the beautiful islands of the Azores">
      <main className={styles.main}>
        <h1>Welcome to the Azores Wiki</h1>
        <p>Click on an island to learn more about it!</p>
        <div className={styles.mapContainer}>
        <img
          src="img/mapAzores.png"
          alt="Map of the Azores"
          useMap="#azores-map"
          className={styles.mapImage}
        />
        <map name="azores-map">
          <area
            shape="circle"
            coords="50,50,30"
            href="/azores-wiki/docs/islands/corvo"
            alt="Corvo"
          />
          <area
            shape="circle"
            coords="150,150,40"
            href="/azores-wiki/docs/islands/flores"
            alt="Flores"
          />
          <area
            shape="circle"
            coords="250,250,40"
            href="/azores-wiki/docs/islands/faial"
            alt="Faial"
          />
          <area
            shape="circle"
            coords="300,300,40"
            href="/azores-wiki/docs/islands/pico"
            alt="Pico"
          />
          <area
            shape="rect"
            coords="350,350,400,380"
            href="/azores-wiki/docs/islands/sao-jorge"
            alt="São Jorge"
          />
          <area
            shape="circle"
            coords="450,450,30"
            href="/azores-wiki/docs/islands/graciosa"
            alt="Graciosa"
          />
          <area
            shape="circle"
            coords="550,550,40"
            href="/azores-wiki/docs/islands/terceira"
            alt="Terceira"
          />
          <area
            shape="rect"
            coords="650,650,700,700"
            href="/azores-wiki/docs/islands/sao-miguel"
            alt="São Miguel"
          />
          <area
            shape="circle"
            coords="750,750,30"
            href="/azores-wiki/docs/islands/santa-maria"
            alt="Santa Maria"
          />
        </map>
      </div>
      </main>
    </Layout>
  );
}