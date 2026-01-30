"use client";

import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="/" className="">
        <img
          className="w-10 h-10"
          src="/lemon-squeezer.png"
          alt="sporty pulse"
        />
      </Link>
    </div>
  );
};
export default Logo;
