import React, { JSX } from 'react';
import Layout from '@theme/Layout';

export default function About(): JSX.Element {
  return (
    <Layout
      title="About Azores Wiki"
      description="Learn more about the Azores Wiki project">
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>About Azores Wiki</h1>
        <hr />
        <p>Azores Wiki is a project dedicated to showcasing the Azores archipelago.</p>
        <p>My personal goal with this project is to provide detailed, accurate and personal information about each of the nine islands.</p>
        <p>I hope this wiki serves as a valuable resource for those wanting to know more about the Azores.</p>
        <img src="img/azores-banner.png" title="Santa Maria - By: Diogo Bettencourt" className="medium-img" />
      </main>
    </Layout>
  );
}