import React from 'react';
import './LoadMore.css';

interface LoadMoreProps {
  currentlyShowing: number;
  totalProducts: number;
  onLoadMore: () => void;
}

const LoadMore: React.FC<LoadMoreProps> = ({
  currentlyShowing,
  totalProducts,
  onLoadMore,
}) => {
  if (currentlyShowing >= totalProducts) {
    return null;
  }

  return (
    <div className="load-more-container container">
      <button className="load-more-btn" onClick={onLoadMore}>
        LOAD MORE DESIGNS
      </button>
    </div>
  );
};

export default LoadMore;
