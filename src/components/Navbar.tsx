import { Whatsapp } from "@/icons/Whatsapp";
import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <header className="bg-white text-black py-1">
      <nav className="w-[90%] max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="relative max-w-20 w-12 h-12 lg:w-16 lg:h-20">
          <Image
            alt="thrikku logo"
            src={"/brandLogo.webp"}
            fill
            className="object-contain w-full h-auto"
          />
        </Link>
        <ul className="flex items-center gap-5 lg:gap-10">
          <li>
            <Link
              href={"https://www.instagram.com/thrikku_?igsh=NmxqMXMwcXhzMnEz"}
              target="_blank">
              <Instagram strokeWidth={1.5} />
            </Link>
          </li>
          <li>
            <Link href="https://wa.me/919778781981" target="_blank">
              <Whatsapp />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
