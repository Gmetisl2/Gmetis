import React, { useState } from 'react';
import { FaRobot, FaChartLine, FaSmile, FaGift, FaTwitter } from 'react-icons/fa'; // Importing icons from react-icons
import { SiTelegram, SiEthereum, SiReadthedocs } from 'react-icons/si'; // Importing additional icons for links
import bg from './bg.gif';

const Contents = () => {
  const [hoveredBox, setHoveredBox] = useState(null);

  const handleMouseEnter = (box) => {
    setHoveredBox(box);
  };

  const handleMouseLeave = () => {
    setHoveredBox(null);
  };

  const handleClick = (box) => {
    setHoveredBox(hoveredBox === box ? null : box);
  };

  return (
    <main style={{ padding: '20px', color: 'white', backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'overlay', minHeight: 'calc(100vh - 140px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <section style={{ textAlign: 'center', maxWidth: '800px' }}>
        <h2 style={{ color: 'white' }}>gMetis: Revolutionizing Community Engagement with AI</h2>
        <p>Introducing gMetis</p>
        <p>gMetis is an innovative project that merges the fun of meme tokens with the practical benefits of AI-driven community management. Built on the Metis Layer 2 of Ethereum, gMetis aims to create a lively and interactive community where members are rewarded for their participation and engagement.</p>
        <h3>Why gMetis Stands Out</h3>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          <div
            style={{ width: '200px', height: '200px', margin: '10px', padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: '10px', textAlign: 'center', cursor: 'pointer', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)', overflow: 'hidden', transition: 'all 0.3s ease-in-out', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
            onMouseEnter={() => handleMouseEnter('ai')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('ai')}
          >
            {hoveredBox !== 'ai' && (
              <>
                <FaRobot size={50} />
                <h4>AI-Powered Community Interaction</h4>
              </>
            )}
            {hoveredBox === 'ai' && (
              <p style={{ margin: 0 }}>An advanced AI agent actively engages with the community on platforms like Telegram and X.com, initiating discussions, moderating content, and ensuring a positive environment.</p>
            )}
          </div>
          <div
            style={{ width: '200px', height: '200px', margin: '10px', padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: '10px', textAlign: 'center', cursor: 'pointer', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)', overflow: 'hidden', transition: 'all 0.3s ease-in-out', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
            onMouseEnter={() => handleMouseEnter('data')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('data')}
          >
            {hoveredBox !== 'data' && (
              <>
                <FaChartLine size={50} />
                <h4>Real-Time Insights and Data</h4>
              </>
            )}
            {hoveredBox === 'data' && (
              <p style={{ margin: 0 }}>The AI agent provides real-time updates on cryptocurrency prices and hot topics, keeping the community informed and engaged with the latest trends and data.</p>
            )}
          </div>
          <div
            style={{ width: '200px', height: '200px', margin: '10px', padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: '10px', textAlign: 'center', cursor: 'pointer', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)', overflow: 'hidden', transition: 'all 0.3s ease-in-out', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
            onMouseEnter={() => handleMouseEnter('sentiment')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('sentiment')}
          >
            {hoveredBox !== 'sentiment' && (
              <>
                <FaSmile size={50} />
                <h4>Sentiment Analysis</h4>
              </>
            )}
            {hoveredBox === 'sentiment' && (
              <p style={{ margin: 0 }}>By analyzing the mood and engagement levels of the community, the AI helps in understanding the overall sentiment, allowing for better decision-making and community management.</p>
            )}
          </div>
          <div
            style={{ width: '200px', height: '200px', margin: '10px', padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: '10px', textAlign: 'center', cursor: 'pointer', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)', overflow: 'hidden', transition: 'all 0.3s ease-in-out', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
            onMouseEnter={() => handleMouseEnter('reward')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('reward')}
          >
            {hoveredBox !== 'reward' && (
              <>
                <FaGift size={50} />
                <h4>Autonomous Reward Distribution</h4>
              </>
            )}
            {hoveredBox === 'reward' && (
              <p style={{ margin: 0 }}>The AI agent autonomously decides who receives rewards based on engagement metrics, calculates the reward amount, and sends it to the recipient.</p>
            )}
          </div>
        </div>
        <h3>Join the gMetis Community</h3>
        <p>Be part of an innovative and rewarding experience.</p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
          <a href="https://x.com/gmetisl2" style={{ color: 'white' }}><FaTwitter size={40} /></a>
          <a href="https://t.me/gmetisio" style={{ color: 'white' }}><SiTelegram size={40} /></a>
          <a href="https://ceg.vote/t/cvp-proposal-gmetis/3743" style={{ color: 'white' }}><SiEthereum size={40} /></a>
          <a href="https://docs.gmetis.io" style={{ color: 'white' }}><SiReadthedocs size={40} /></a>
        </div>
      </section>
    </main>
  );
};

export default Contents;