import type { Metadata } from "next";
import { FastOSBuilder } from "./FastOSBuilder";

export const metadata: Metadata = {
  title: "FastOS",
  description:
    "Build a personalized fasting and ancestral food prompt based on your real life, location, schedule, goals, and constraints.",
  alternates: {
    canonical: "/fastos"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function FastOSPage() {
  return <FastOSBuilder />;
}
