import Metadata from 'next';
import EastRideClient from './EastRideClient';

export const metadata: Metadata = {
  title: "EastRide | AI-Powered Car Marketplace",
  description: "A modern car marketplace featuring AI-powered visual search and automated spec extraction for seamless buying and selling.",
};

export default function EastRidePage() {
  return <EastRideClient />;
}

