import React from 'react';
import '../styles.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function About() {
  return (
    <div>
      <Header />
      <div className="content">
        <h1>About Based Agent</h1>
        <p>
          Based Agent is a groundbreaking AI coding assistant that revolutionizes the way developers build decentralized AI applications within the Morpheus ecosystem. Inspired by the innovative approach of Cognition AI's Devin, our vision is to create a collaborative and decentralized AI-driven coding environment where developers, capital providers, and the community come together to drive success.
        </p>
        <p>
          With its advanced coding assistance, bug detection, and optimization tips, Based Agent streamlines the development process, empowering developers to focus on building innovative applications. Our AI capabilities, combined with the strengths of the Morpheus ecosystem, create a powerful tool for building decentralized AI solutions.
        </p>
        <p>
          Following the principles of the MOR20 fair launch model, we ensure a transparent and community-driven approach to funding and development. This approach allows for equitable participation and rewards for all contributors, creating a sustainable and decentralized ecosystem.
        </p>
        <p>
          At Based Agent, we believe in the potential of decentralized AI to transform industries and improve lives. Join us in shaping the future of AI coding assistants and decentralized AI development. Learn more about our project, participate in our community, and together, let's build a decentralized future that benefits everyone.
        </p>
        <p>
          Based Agent is a revolutionary AI coding assistant that empowers developers to build decentralized AI applications within the Morpheus ecosystem. Inspired by Cognition AI's Devin, our vision is to create a collaborative and decentralized AI-driven coding environment. With advanced coding assistance, bug detection, and optimization tips, Based Agent streamlines the development process. Following the MOR20 fair launch model, we ensure a transparent and community-driven approach to funding and development. We welcome all to join us shaping the future of AI coding assistants and decentralized AI development.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
