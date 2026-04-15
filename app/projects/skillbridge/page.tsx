import Metadata from 'next';
import SkillBridgeClient from './SkillBridgeClient';

export const metadata = {
  title: "SkillBridge | Online Learning Platform",
  description: "A comprehensive online learning platform with low-latency video streaming, real-time progress tracking, and M-Pesa payment integration.",
};

export default function SkillBridgePage() {
  return <SkillBridgeClient />;
}

