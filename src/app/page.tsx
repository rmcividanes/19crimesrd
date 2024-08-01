"use client";

import Nav from "@/app/_components/Nav";
import Image from "next/image";
import background from "./images/Fondo.jpg";
import Titulo from "./images/Titulo.png";
import Botella from "./images/Botellas.png";
import Form from "@/app/_components/Form";
import Form2 from "@/app/_components/Form2";
import { useEffect, useState } from "react";
import Navbar from "./_components/Navbar";
import back from "./images/back-mobile.jpeg";

export default function Home() {
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);

  useEffect(() => {
    const mediaWatcher = window.matchMedia("(max-width:45rem)");
    console.log("Initial narrow screen state:", mediaWatcher.matches);
    setIsNarrowScreen(mediaWatcher.matches);

    function updateIsNarrowScreen(e: MediaQueryListEvent) {
      console.log("Screen width changed:", e.matches);
      setIsNarrowScreen(e.matches);
    }

    mediaWatcher.addEventListener("change", updateIsNarrowScreen);

    return () => {
      mediaWatcher.removeEventListener("change", updateIsNarrowScreen);
    };
  }, []);

  return (
    <>
      {isNarrowScreen ? (
        <div>
          <Navbar />
          <main>
            <div className="relative w-full">
              <div className="absolute -z-10 w-full">
                <Image
                  src={back}
                  alt="background-image"
                  className="w-full"
                  width={1000}
                  height={1000}
                  priority
                />
              </div>
              <div>
                <div>
                  <Image src={Titulo} alt="title" className="w-full pt-14" />
                </div>
                <div className="py-4 flex justify-center">
                  <div>
                    <Image src={Botella} alt="bottle" className="w-full" />
                  </div>
                </div>
              </div>
              <div>
                <Form2 />
              </div>
            </div>
          </main>
        </div>
      ) : (
        <div>
          <Nav />
          <main className="flex flex-col items-center justify-between w-full">
            <div className="relative w-full">
              <div className="absolute -z-10 w-full">
                <Image
                  src={background}
                  alt="background-image"
                  className="w-full"
                  width={1000}
                  height={1000}
                  priority
                />
              </div>
              <div className="grid grid-cols-3">
                <div className="mt-32">
                  <Image src={Titulo} alt="title" />
                </div>
                <div className="mx-auto w-2/3">
                  <Image src={Botella} alt="bottle" />
                </div>
                <div className="md:px-1 lg:p-10">
                  <Form />
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
}
