import React from 'react';
import SectionHeading from '../common/SectionHeading';
import './BrandStory.css';

const BrandStory: React.FC = () => {
  return (
    <section className="brand-story-section" id="about" aria-labelledby="brand-story-heading">
      <div className="container">
        <SectionHeading>
          <span id="brand-story-heading">Brand Story</span>
        </SectionHeading>
        <div className="brand-story-content">
          {/* <p>
            Khushbu Gold Palace is a luxury jewelry brand rooted in the rich heritage of
            Surat's goldsmith tradition. Every piece in our collection represents a harmonious
            blend of age-old craftsmanship and contemporary design — meticulously handcrafted
            by master artisans who pour generations of skill into each creation.
          </p> */}
          {/* <p>
            From bridal collections that embody the grandeur of Indian weddings to everyday
            elegance that celebrates modern femininity, our jewelry is designed to become a
            cherished part of your story. We believe in trust, purity, and the timeless beauty
            of gold — hallmarked and guaranteed to be of the highest quality.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
