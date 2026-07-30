import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#FAF7F2] shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <Link
          to="/"
          className="text-2xl md:text-3xl font-bold tracking-wide text-[#1F1F1F]"
        >
          Curated By Nekoye
        </Link>

        <ul className="hidden md:flex gap-8 text-[#1F1F1F] font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;