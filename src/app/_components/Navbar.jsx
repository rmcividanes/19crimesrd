import React from "react";
import Link from "next/link";
import Image from "next/image";
import Facebook from "../images/Facebook-icon.png";
import Instagram from "../images/Instagram-icon.png";
// import Terminos from "@/images/Bases-Legales.pdf";

function Navbar() {
  return (
    <nav className="bg-black text-white flex justify-between px-4">
      <div className="flex">
        {" "}
        <div className="p-4 w-2/3 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible">
          <Link href="/">SUBE TU FACTURA</Link>
        </div>
        <div className="p-4 w-2/3 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible">
          {" "}
          <Link
            href="Bases-Legales.pdf"
            rel="noopener noreferrer"
            target="_blank"
            alt="alt text"
          >
            TÉRMINOS Y CONDICIONES
          </Link>
        </div>
      </div>
      <div className="flex w-1/3 py-4 justify-between">
        {" "}
        <div className="">
          {" "}
          <Link
            href="https://www.facebook.com/share/UZnEf9pPe89kzia7/?mibextid=LQQJ4d"
            target="_blank"
          >
            <Image src={Facebook} alt="facebook-link" className="w-10" />
          </Link>
        </div>
        <div className="">
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
