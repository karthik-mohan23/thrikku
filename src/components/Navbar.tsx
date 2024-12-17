import Link from "next/link";

function Navbar() {
  return (
    <header className="bg-orange-50 text-black">
      <nav className="w-[90%] py-5 max-w-5xl mx-auto ">
        <Link href="/" className="text-2xl md:text-4xl font-semibold">
          Thrikku
        </Link>
      </nav>
    </header>
  );
}
export default Navbar;
