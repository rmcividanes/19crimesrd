import Link from "next/link";
import Image from "next/image";
import Facebook from "../images/Facebook-icon.png";
import Instagram from "../images/Instagram-icon.png";

function Nav() {
  return (
    <nav className="bg-black text-white py-4 flex justify-between pl-20 lg:pl-44">
      <div className="flex">
        {" "}
        <div>
          {" "}
          <Link
            href="/"
            className="p-4 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible"
          >
            SUBE TU FACTURA
          </Link>
        </div>
        <div>
          {" "}
          <Link
            href="Bases-Legales.pdf"
            rel="noopener noreferrer"
            target="_blank"
            className="p-4 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible"
          >
            TÉRMINOS Y CONDICIONES
          </Link>
        </div>
      </div>
      <div className="flex">
        {" "}
        <Link
          href="https://www.facebook.com/share/UZnEf9pPe89kzia7/?mibextid=LQQJ4d"
          target="_blank"
          className="p-1 md:px-4 focus-visible"
        >
          <Image src={Facebook} alt="facebook-link" className="w-10" />
        </Link>
        <Link
          href="https://www.instagram.com/19crimesrd?igsh=aTZvc3YxdjdkbjVr"
          target="_blank"
          className="p-1 md:px-4 focus-visible"
        >
          <Image src={Instagram} alt="instagram-link" className="w-10" />
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
