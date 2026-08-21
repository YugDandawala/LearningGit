import { type GoldRatesData, goldRates } from '../data/goldRates';

/**
 * Gold Rate Service
 * Abstraction layer for fetching gold rates.
 * Currently returns mock data; replace with API call when backend is ready.
 */

export async function getGoldRates(): Promise<GoldRatesData> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  // TODO: Replace with actual API call
  // const response = await fetch('/api/gold-rates');
  // return response.json();

  return goldRates;
}
