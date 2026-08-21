export interface GoldRate {
  label: string;
  rate: number;
  change: 'up' | 'down';
  unit: string;
}

export interface GoldRatesData {
  gold24k: GoldRate;
  gold22k: GoldRate;
  gold18k: GoldRate;
  updatedAt: string;
  brandTagline: string;
}

export const goldRates: GoldRatesData = {
  gold24k: {
    label: '24K Gold',
    rate: 7850,
    change: 'up',
    unit: 'per 10g',
  },
  gold22k: {
    label: '22K Gold',
    rate: 7195,
    change: 'down',
    unit: 'per 10g',
  },
  gold18k: {
    label: '18K Gold',
    rate: 5888,
    change: 'up',
    unit: 'per 10g',
  },
  updatedAt: 'Updated Today',
  brandTagline: 'ખુશ્બૂ ગોલ્ડ પેલેસ - સુરત',
};
