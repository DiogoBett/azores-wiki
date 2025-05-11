import React, { JSX } from 'react';
import Layout from '@theme/Layout';

export default function About(): JSX.Element {
  return (
    <Layout
      title="About Azores Wiki"
      description="Learn more about the Azores Wiki project">
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>About Azores Wiki</h1>
        <p>
          Azores Wiki is a community-driven project dedicated to showcasing the
          beauty and culture of the Azores archipelago. Our goal is to provide
          detailed and accurate information about each of the nine islands.
        </p>
        <p>
          Whether you're a traveler, researcher, or enthusiast, we hope this
          wiki serves as a valuable resource. Contributions are always welcome!
        </p>
        <p>
          Visit our{' '}
          <a href="https://github.com/DiogoBett/azores-wiki" target="_blank" rel="noopener noreferrer">
            GitHub repository
          </a>{' '}
          to contribute.
        </p>
      </main>
    </Layout>
  );
}