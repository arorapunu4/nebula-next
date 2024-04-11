import Image from "next/image";
import Header from "./components/header";
import Intro from "./components/Intro";
import HowItWorks from './components/howItWorks';
import HowWeHire from "./components/usp";
import OurClients from "./components/ourClients";
import Footer from "./components/footer";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Intro />
      <HowItWorks />
      <HowWeHire />
      <OurClients />
      <Footer />
    </main>
  );
}
