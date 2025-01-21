import { Whatsapp } from "@/icons/Whatsapp";
import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <header className="bg-white text-black py-3">
      <nav className="w-[90%] max-w-6xl mx-auto flex items-center justify-between">
        <Link href={"/"} className="flex gap-2">
          <div className="relative max-w-20 w-8 h-8 lg:w-10 lg:h-10">
            <Image
              alt="thrikku logo"
              src={"/brandLogo.webp"}
              fill
              className="object-contain w-full h-auto"
            />
          </div>
          <h3 className="font-bold text-xl lg:text-2xl self-end">Thrikku</h3>
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
