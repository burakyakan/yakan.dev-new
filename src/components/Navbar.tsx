"use client"


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";







function Navbar() {



  return (
      <header>
        <div className="flex flex-row bg-amber-700">
          <Link href="/">
            <Image src="/favicon.ico" alt="yakan.dev" width={24} height={24} />
          </Link>

          <nav>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <Separator orientation="vertical"></Separator>

          


        </div>
      </header>
  );
}

export default Navbar;