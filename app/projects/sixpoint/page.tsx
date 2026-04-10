import { Metadata } from 'next';
import SixpointClient from './SixpointClient';

export const metadata: Metadata = {
  title: "Sixpoint Victoria | Website Revamp or Redesign",
  description: "A complete digital transformation for a 3-star hotel — from a broken, zero-converting legacy site to a premium, fully-functional booking experience.",
};

export default function SixpointPage() {
  return <SixpointClient />;
}

