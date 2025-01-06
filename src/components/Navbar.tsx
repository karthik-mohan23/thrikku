import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <header className="bg-white text-black py-1">
      <nav className="w-[90%] max-w-5xl mx-auto flex items-center">
        <Link href="/" className="relative max-w-20 w-12 h-12 lg:w-16 lg:h-20">
          <Image
            alt="thrikku logo"
            src={"/brandLogo.webp"}
            fill
            className="object-contain w-full h-auto"
          />
        </Link>
      </nav>
    </header>
  );
}
export default Navbar;
