import React from "react";
import Link from "next/link";
import Image from "next/image";
import Facebook from "../images/Facebook-icon.png";
import Instagram from "../images/Instagram-icon.png";
// import Terminos from "@/images/Bases-Legales.pdf";

function Navbar() {
  return (
    <nav className="bg-black text-white flex px-4 justify-between">
      {" "}
      <div className="py-2 flex">
        <div className="">
          {" "}
          <Link href="/">
            SUBE TU
            <br />
            FACTURA
          </Link>{" "}
        </div>
        <div className="px-4">
          <Link
            href="Bases-Legales.pdf"
            rel="noopener noreferrer"
            target="_blank"
            alt="alt text"
            className=""
          >
            TÉRMINOS Y
            <br /> CONDICIONES
          </Link>
        </div>
      </div>
      <div className="flex py-2">
        <div className="px-3">
          {" "}
          <Link
            href="https://www.facebook.com/share/UZnEf9pPe89kzia7/?mibextid=LQQJ4d"
            target="_blank"
          >
            <Image src={Facebook} alt="facebook-link" className="w-10" />
          </Link>
        </div>
        <div className="px-3">
          {" "}
          <Link
            href="https://www.instagram.com/19crimesrd?igsh=aTZvc3YxdjdkbjVr"
            target="_blank"
          >
            <Image src={Instagram} alt="instagram-link" className="w-10" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
