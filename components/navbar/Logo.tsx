"use client";

import { VscCode } from "react-icons/vsc";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="w-10 h-10 bg-blue-400 dark:bg-blue-600 cursor-pointer hover:bg-blue-500 dark:hover:bg-blue-700 flex items-center justify-center rounded-xl transition-colors duration-300 ease-in-out">
      <Link href="/">
        <VscCode className="w-6 h-6 text-white" />
      </Link>
    </div>
  );
};
export default Logo;
