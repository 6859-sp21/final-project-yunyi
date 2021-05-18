import React from 'react';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';
import ScrollToTop from "../components/scroll-to-top";

const AboutPage = () => {
  return (
    <div className="page">
      <ScrollToTop />
      <Navbar />
      <div className="about-page-contents">
        <h1>About this site</h1>
        <p>
          This website aims to introduce and visualize the
          gender inequality in China.
          It includes various visualizations using multiple datasets,
          which focus on discrimination faced by Chinese women
          in different life stages. I hope that this web page can
          bring public awareness on the gender inequalities
          faced by women living in this country.
        </p>

        <p>
          <i>For women in China: </i> women in China are the main audience
          of this visualization. Since they are directly affected by the
          gender inequalities mentioned in our visualization,
          this visualization aims to help them find and articulate
          the inequalities in their life.
        </p>

        <p>
          <i>For other parties: </i> other parties generally do not experience
          the same type of inequalities as we mention in our visualization.
          However, they still benefit from knowing the inequalities
          so that they can better empathize with and support people that are affected.
        </p>

        <div className="button-wrapper">
          <Link className="button" to="/birth">
            Explore the Visualization
          </Link>
        </div>

      </div>
    </div>
  );
}

export default AboutPage;