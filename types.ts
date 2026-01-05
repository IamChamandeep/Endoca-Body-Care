export interface Product {
  id: string;
  name: string;
  badge: string;
  benefit: string;
  intensity: 1 | 2 | 3; // 1: Low, 2: Med, 3: High
  image: string;
  price: number;
  link: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  headline: string;
  text: string;
  productName: string;
  productId: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}