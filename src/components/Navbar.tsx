import Link from "next/link";
import React from "react";
import { auth } from "@/auth";
import NavItem from "./NavItem";
export default async function Navbar() {
  const session = await auth();
  return (
    <div className=" flex justify-between items-center px-6">
      {/* 링크로 홈 화면 가게 만들고 */}
      <Link href="/">
        <h1 className="text-3xl font-bold">Ingstagram</h1>
      </Link>
      {/* 연속되는 메뉴는 nav태그 써라 */}
      <nav>
        <ul className="flex gap-4 items-center p-4">
          <NavItem session={session} />
        </ul>
      </nav>
    </div>
  );
}
