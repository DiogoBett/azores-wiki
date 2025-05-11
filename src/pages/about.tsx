import React, { JSX } from 'react';
import Layout from '@theme/Layout';

export default function About(): JSX.Element {
  return (
    <Layout
      title="About Azores Wiki"
      description="Learn more about the Azores Wiki project">
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>About Azores Wiki</h1>
        <hr/>
        <p>Azores Wiki is a project dedicated to showcasing the beauty and culture of the Azores archipelago.</p>
        <p>Our goal is to providedetailed and accurate information about each of the nine islands.</p>
        <p>We hope this wiki serves as a valuable resource.</p>
      </main>
    </Layout>
  );
}