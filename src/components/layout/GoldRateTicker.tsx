import React, { useEffect, useState } from 'react';
import { getGoldRates } from '../../services/goldRateService';
import type { GoldRatesData } from '../../data/goldRates';
import './GoldRateTicker.css';

const GoldRateTicker: React.FC = () => {
  const [rates, setRates] = useState<GoldRatesData | null>(null);

  useEffect(() => {
    getGoldRates().then(setRates);
  }, []);

  if (!rates) return null;

  const tickerItems = [
    {
      label: rates.gold24k.label,
      value: `₹${rates.gold24k.rate.toLocaleString('en-IN')}`,
      arrow: rates.gold24k.change === 'up' ? '▲' : '▼',
      changeClass: rates.gold24k.change === 'up' ? 'rate-up' : 'rate-down',
    },
    {
      label: rates.gold22k.label,
      value: `₹${rates.gold22k.rate.toLocaleString('en-IN')}`,
      arrow: rates.gold22k.change === 'up' ? '▲' : '▼',
      changeClass: rates.gold22k.change === 'up' ? 'rate-up' : 'rate-down',
    },
    {
      label: rates.gold18k.label,
      value: `₹${rates.gold18k.rate.toLocaleString('en-IN')}`,
      arrow: rates.gold18k.change === 'up' ? '▲' : '▼',
      changeClass: rates.gold18k.change === 'up' ? 'rate-up' : 'rate-down',
    },
  ];

  const renderTickerContent = () => (
    <>
      <span className="ticker-label">Current Gold Rates (per 10g):</span>
      {tickerItems.map((item, index) => (
        <React.Fragment key={item.label}>
          <span className="ticker-item">
            {item.label}: <strong>{item.value}</strong>{' '}
            <span className={item.changeClass}>{item.arrow}</span>
          </span>
          {index < tickerItems.length - 1 && <span className="ticker-divider">|</span>}
        </React.Fragment>
      ))}
      <span className="ticker-divider">|</span>
      <span className="ticker-item">{rates.updatedAt}</span>
      <span className="ticker-divider">|</span>
      <span className="ticker-item gujarati-text">{rates.brandTagline}</span>
    </>
  );

  return (
    <div className="gold-rate-ticker" role="marquee" aria-label="Live gold rates">
      <div className="ticker-track">
        <div className="ticker-content">
          {renderTickerContent()}
        </div>
        <div className="ticker-content" aria-hidden="true">
          {renderTickerContent()}
        </div>
      </div>
    </div>
  );
};

export default GoldRateTicker;
