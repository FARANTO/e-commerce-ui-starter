import Image from "next/image";
import { Home } from "lucide-react";
import { Bell } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
   <nav className ="w-full flex items-center justify-between border-b border-gray-200 pb-4">
    {/* LEFT */}
    <Link href="/" className="flex items-center"> 
    <Image src="/logo.png" alt="TrendService" width={36} height={36} className="w-6 h-6 md:w-9 md:h-9" />
    <p className="hidden md:block text-md font-medium tracking-wide">TrendService</p>
     </Link>
    {/* RIGHT */}
    <div className="flex items-center gap-6">
      <SearchBar/>
      <Link href="/"> 
      <Home className="w-4 h-4 text-gray-600" />
      </Link>
      <Bell className="w-4 h-4 text-gray-600"/>
      <ShoppingCart className="w-4 h-4 text-gray-600"/>
      <Link href="/login">Sign in</Link>
    </div>
   </nav>
  );
};

export default Navbar;