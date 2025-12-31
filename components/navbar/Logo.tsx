"use client";

import { VscCode } from "react-icons/vsc";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <h1 className="max-w-2xl font-bold text-3xl tracking-tight">
          Sporty Pulse
        </h1>
      </Link>
    </div>
  );
};
export default Logo;
