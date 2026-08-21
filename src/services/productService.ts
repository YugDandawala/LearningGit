import { type Product, products } from '../data/products';

/**
 * Product Service
 * Abstraction layer for fetching products.
 * Currently returns mock data; replace with API call when backend is ready.
 */

export async function getProducts(): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return products;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 50));
  return products.find((p) => p.id === id);
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return products.filter((p) => p.category === category);
}
