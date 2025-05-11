import React, { JSX } from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Azores Wiki"
      description="A wiki about the nine islands of the Azores.">
      <main className={styles.main}>
        <h1>Welcome to the Azores Wiki</h1>
        <hr/>
        <p>Use the map below to click on an island and learn more about it.</p>
        <div className={styles.mapContainer}>
          <img
            src="img/azores-map.png"
            alt="Map of the Azores"
            useMap="#azores-map"
            className={styles.mapImage}
          />
          <map name="azores-map">
            <area shape="rect" coords="918,407,810,363" href="/azores-wiki/docs/islands/corvo" alt="São Miguel" />
            <area shape="rect" coords="906,527,935,549" href="/azores-wiki/docs/islands/santa-maria" alt="Santa Maria" />
            <area shape="rect" coords="599,199,652,235" href="/azores-wiki/docs/islands/terceira" alt="Terceira" />
            <area shape="rect" coords="498,145,520,165" href="/azores-wiki/docs/islands/graciosa" alt="Graciosa" />
            <area shape="rect" coords="390,231,427,258" href="/azores-wiki/docs/islands/faial" alt="Faial" />
            <area shape="rect" coords="509,283,432,248" href="/azores-wiki/docs/islands/pico" alt="Pico" />
            <area shape="rect" coords="43,69,68,103" href="/azores-wiki/docs/islands/flores" alt="Flores" />
            <area shape="circle" coords="70,37,12" href="/azores-wiki/docs/islands/corvo" alt="Corvo" />
            <area shape="rect" coords="462,203,509,242" href="/azores-wiki/docs/islands/sao-jorge" alt="São Jorge 1" />
            <area shape="rect" coords="549,256,510,222" href="/azores-wiki/docs/islands/sao-jorge" alt="São Jorge 2" />
          </map>
        </div>
      </main>
    </Layout>
  );
}