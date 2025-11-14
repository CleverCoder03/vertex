"use client";

import { useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Loader onFinish={() => setLoaded(true)} />}

      {loaded && (
        <div className="py-6">
          <Navbar />
        </div>
      )}
    </>
  );
}
