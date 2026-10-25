import Link from "next/link";
import Image from "next/image";

const footer = () => {
  return (
   <div className ="mt-16 flex flex-col items-center md:flex-row md:items-start bg-gray-800 p-8 rounded-lg">

    <div className="flex flex-col gap-4 items-center md:items-start">
     <Link href="/" className="flex items-center"> 
    <Image src="/logo.png" alt="TrendService" width={36} height={36} className="w-6 h-6 md:w-9 md:h-9" />
    <p className="hidden md:block text-md font-medium tracking-wide text-white">TrendService</p>
     </Link>
     <p className="text-sm text-gray-400">@ 2025 TrendService.</p> 
     <p className="text-sm text-gray-400">All rights reserved.</p>
    </div>
   </div>
  );
};

export default footer;