"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

// components imports
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useToast } from "@/components/ui/use-toast";

const Header = () => {
  const { toast } = useToast();
  const pathName = usePathname();

  const handleClick = (e) => {
    if (pathName === "/contact") {
      e.preventDefault();
      toast({
        title: "You're already on the contact page!",
        description: "Feel free to fill out the form.",
      });
    }
  };

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Hryhorii<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desctop nav & hire button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button onClick={handleClick}>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>

      </div>
    </header>
  )
}

export default Header;
