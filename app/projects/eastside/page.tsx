import Metadata from 'next';
import EastSideClient from './EastSideClient';

export const metadata = {
  title: "EastSide | E-commerce Platform with M-Pesa Integration",
  description: "A comprehensive e-commerce solution with dynamic product filtering, Redux state management, and seamless M-Pesa STK Push payments.",
};

export default function EastSidePage() {
  return <EastSideClient />;
}


