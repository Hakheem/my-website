import Metadata from 'next';
import TrendifyClient from './TrendifyClient';

export const metadata = {
  title: 'Trendify | Sneaker E-commerce Mobile App',
  description: 'A mobile-first sneaker e-commerce app with dark theme design, bottom navigation, and delivery-first user flow.',
};

export default function TrendifyPage() {
  return <TrendifyClient />;
}
 