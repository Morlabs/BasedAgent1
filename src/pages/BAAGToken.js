import React from 'react';
import '../styles.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function BAAGToken() {
  return (
    <div>
      <Header />
      <div className="content">
        <h1>BAAG Token</h1>
        <section className="tokenomics-section">
          <div className="column">
            <h2>BAAG Tokenomics</h2>
            <p>42 Million total supply</p>
          </div>
          <div className="column">
            <p>The BAAG supply is limited to a maximum of 42,000,000 tokens that will ever exist.</p>
            <p>For a detailed breakdown of the BAAG tokenomics, <a href="#https://google.com">read the BAAG Whitepaper Here →</a></p>
          </div>
        </section>
        <section className="utility-section">
          <div className="column">
            <h2>BAAG Utility</h2>
            <p>Stake BAAG to access inference and bootstrap projects</p>
          </div>
          <div className="column">
            <p>The main utility of the BAAG is staking for access to a pro-rata amount of the Morpheus network's compute resources.</p>
            <p>From the Metropolis phase onwards, you will also be able to stake BAAG towards frontends and smart agents you like, thereby directing community emissions to them and be rewarded in their native tokens.</p>
            <p>Additionally, BAAG will be the main asset for AI projects launched in the Morpheus ecosystem, like ETH for Ethereum.</p>
            <p>Finally, all settlements between parties in the Morpheus Network are also in BAAG.</p>
          </div>
        </section>
        <section className="distribution-section">
          <div className="column">
            <h2>BAAG Distribution</h2>
            <p>BAAG is distributed to four contributor groups</p>
          </div>
          <div className="column">
            <p>The distribution will start with four Morpheus contributor groups earning the tokens by providing forms of proof of work (labor) and proof of stake (capital) to the network:</p>
            <ul>
              <li>→ 24% to coders</li>
              <li>→ 24% to capital</li>
              <li>→ 24% to the community</li>
              <li>→ 4% for protection funds</li>
            </ul>
            <div className="distribution-graphic">
              <img src="/baag_distribution_chart.png" alt="BAAG Distribution Graphic" />
            </div>
          </div>
        </section>
        <section className="emission-schedule-section">
          <div className="column">
            <h2>BAAG Emission Schedule</h2>
            <p>Full emission of BAAG supply at decreasing rate over ~16 years</p>
          </div>
          <div className="column">
            <p>The block reward will start at 14,400 BAAG per day and then decline by 2.468994701 BAAG each day until the reward reaches 0 on day 5,833.</p>
            <div className="emission-chart">
              <img src="/baag_emission_schedule_white.png" alt="BAAG Emission Schedule Chart" />
            </div>
          </div>
        </section>
        <section className="cumulative-emissions-section">
          <div className="column">
            <h2>Cumulative BAAG Emissions</h2>
          </div>
          <div className="column">
            <div className="emission-chart">
              <img src="/baag_cumulative_emissions_white.png" alt="Cumulative BAAG Emissions Chart" />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default BAAGToken;
