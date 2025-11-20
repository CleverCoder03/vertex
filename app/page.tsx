"use client";

import { useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Accordion from "./components/Accordion";
import Headline from "./components/Headline";
import Approach from "./components/Approach";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Loader onFinish={() => setLoaded(true)} />}

      {loaded && (
        <div className="px-6 md:px-10 lg:px-15">
          <Navbar />
          <Hero />
          <Accordion />
          <Headline title={"Our platforms are driven by big ideas and executed with precision"} />
          <Approach />
          <section className="h-dvh"></section>
        </div>
      )}
    </>
  );
}
