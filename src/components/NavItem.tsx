"use client";
import React from "react";
import HomeIcon from "./ui/icons/HomeIcon";
import HomeFillIcon from "./ui/icons/HomeFillIcon";
import NewFillIcon from "./ui/icons/NewFillIcon";
import SearchFillIcon from "./ui/icons/SearchFillIcon";
import SearchIcon from "./ui/icons/SearchIcon";
import NewIcon from "./ui/icons/NewIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signIn, signOut } from "@/auth";
import ColorButton from "@/components/ui/ColorButton";
import { Session } from "@auth/core/types";
const menu = [
  { href: "/", icon: <HomeIcon />, clickedIcon: <HomeFillIcon /> },
  { href: "/new", icon: <NewIcon />, clickedIcon: <NewFillIcon /> },
  { href: "/search", icon: <SearchIcon />, clickedIcon: <SearchFillIcon /> },
];
type props = {
  session: Session | null;
};
export default function NavItem({ session }: props) {
  const pathName = usePathname();

  return (
    <>
      {menu.map((item) => {
        return (
          <li key={item.href}>
            <Link href={item.href}>
              {pathName === item.href ? item.clickedIcon : item.icon}
            </Link>
          </li>
        );
      })}
      {session ? (
        <ColorButton onClick={() => signIn()} text="sign Out" />
      ) : (
        <ColorButton onClick={() => signOut()} text="sign In" />
      )}
    </>
  );
}
