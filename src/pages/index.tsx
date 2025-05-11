import React, { JSX } from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Welcome"
      description="A wiki about the nine islands of the Azores.">
      <main className={styles.main}>
        <h1>Welcome to the Azores</h1>
        <div className={styles.mapContainer}>
          <img src="img/azores-map.png" alt="Map of the Azores" useMap="#azores-map" className={styles.mapImage} />
          <map name="azores-map">
            <area shape="rect" coords="918,407,810,363" href="/azores-wiki/docs/islands/sao-miguel" title="São Miguel" />
            <area shape="rect" coords="906,527,935,549" href="/azores-wiki/docs/islands/santa-maria" title="Santa Maria" />
            <area shape="rect" coords="599,199,652,235" href="/azores-wiki/docs/islands/terceira" title="Terceira" />
            <area shape="rect" coords="498,145,520,165" href="/azores-wiki/docs/islands/graciosa" title="Graciosa" />
            <area shape="rect" coords="390,231,427,258" href="/azores-wiki/docs/islands/faial" title="Faial" />
            <area shape="rect" coords="509,283,432,248" href="/azores-wiki/docs/islands/pico" title="Pico" />
            <area shape="rect" coords="43,69,68,103" href="/azores-wiki/docs/islands/flores" title="Flores" />
            <area shape="circle" coords="70,37,12" href="/azores-wiki/docs/islands/corvo" title="Corvo" />
            <area shape="rect" coords="462,203,509,242" href="/azores-wiki/docs/islands/sao-jorge" title="São Jorge" />
            <area shape="rect" coords="549,256,510,222" href="/azores-wiki/docs/islands/sao-jorge" title="São Jorge" />
          </map>
        </div>
        <p>Use the map to click on an island and learn more about it.</p>
      </main>
    </Layout>
  );
}