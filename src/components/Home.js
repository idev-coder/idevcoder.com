import React from 'react';
import featured1 from '../images/featured1.webp';
import featured2 from '../images/featured2.webp';
import featured3 from '../images/featured3.webp';
import headerBg from '../images/header-bg.jpg';  // นำเข้ารูปภาพ header

const Home = () => {
  return (
    <div style={{ height: '100vh' }}>
      <header className="header" style={{ backgroundImage: `url(${headerBg})` }}>
        <h1>Welcome to iDevCoder</h1>
        <p>Your professional portfolio for web and application development</p>
      </header>
      <section>
        <h2>Featured Works</h2>
        <div className="featured-works">
          <div className="work-item">
            <img src={featured1} alt="Featured Work 1" />
            <p>Project 1</p>
          </div>
          <div className="work-item">
            <img src={featured2} alt="Featured Work 2" />
            <p>Project 2</p>
          </div>
          <div className="work-item">
            <img src={featured3} alt="Featured Work 3" />
            <p>Project 3</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
