import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '../script.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <img src="/Based_Agent_logo.png" alt="Based Agent Logo" />
        <h1>AI Coding Assistant</h1>
        <p>
          Built by <a href="https://morlabs.xyz/">Mor Labs</a>, Based Agent is an innovative AI coding assistant for coders contributing to the Morpheus ecosystem to turbocharge their productivity. Whether you're just getting started with coding or a seasoned pro, Based Agent is here to help you do more, faster.
        </p>

        <form action="https://formspree.io/f/mqkrjnyg" method="POST" className="email-form">
          <input type="email" name="email" placeholder="Email Address" required />
          <input type="submit" value="Join Waitlist" />
        </form>
        <div className="animation-container">
          <svg viewBox="0 0 100 50">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%">
                <stop offset="0%" style={{ stopColor: 'rgba(100, 216, 148, 1)', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: 'rgba(100, 216, 148, 0)', stopOpacity: 0 }} />
              </linearGradient>
            </defs>
            <path id="infinityPath" className="infinity" d="M25,25 C25,10 50,10 50,25 C50,40 75,40 75,25 C75,10 50,10 50,25 C50,40 25,40 25,25 Z" />
          </svg>
        </div>
        <div className="contribution-section">
          <div className="contribution-box">
            <img src="/code.png" alt="Code Icon" />
            <h3>Code</h3>
            <p>
              Your skills are the foundation of Based Agent. Contribute to the codebase, develop its capabilities, and earn BAAG rewards based on the usage and impact of your work.
            </p>
            <a href="https://github.com/Morlabs/BasedAgent/blob/main/Contribute/code.md">contribute code →</a>
          </div>
          <div className="contribution-box">
            <img src="/capital.png" alt="Capital Icon" />
            <h3>Capital</h3>
            <p>
              Your resources are essential to the network's growth. Provide stETH liquidity, earn yield, and receive BAAG tokens for your crucial role in the ecosystem.
            </p>
            <a href="https://dashboard.basedagent.co/#/mainnet/capital">contribute capital →</a>
          </div>
          <div className="contribution-box">
            <img src="/community.png" alt="Community Icon" />
            <h3>Community</h3>
            <p>
              Your passion and skills drive adoption of Based Agent. Help build awareness and adoption of Based Agent, grow the community and receive BAAG rewards.
            </p>
            <a href="https://github.com/Morlabs/BasedAgent/blob/main/Contribute/community.md">contribute community →</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
