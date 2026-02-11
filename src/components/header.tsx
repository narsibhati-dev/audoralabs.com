"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SITE_CONFIG } from "@/config/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { SearchCommand } from "@/components/search-command";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import type { BlogItem } from "@/components/search-command";

const NAV_LINKS = [
  { href: "/#expertise", label: "Our Expertise" },
  { href: "/#products", label: "Products" },
  { href: "/#blogs", label: "Blogs" },
] as const;

interface HeaderProps {
  blogs?: BlogItem[];
}

export function Header({ blogs = [] }: HeaderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-700 ease-out md:top-2 md:left-0 md:right-0 md:mx-auto md:w-full md:max-w-6xl md:px-3 ${
        mounted ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
      }`}
    >
      <div className="flex items-center justify-between border-b border-border bg-background px-4 py-2.5 md:overflow-hidden md:rounded-2xl md:border md:border-border md:shadow-lg md:shadow-black/5 dark:md:shadow-black/20">
        <Link
          href="/"
          className="group flex items-center gap-2 border-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline"
        >
          <Image
            src="/logo.png"
            alt="AudoraLabs logo"
            width={36}
            height={36}
            className="h-9 w-9 shrink-0 transition-transform duration-300 group-hover:scale-105 rounded-lg"
          />
          {/* <span className="text-xl font-bold tracking-tight text-foreground transition-transform duration-300 group-hover:scale-105">
            {SITE_CONFIG.name}
          </span> */}
        </Link>
        <div className="flex items-center justify-center gap-3">
          <div className="hidden md:flex md:items-center md:gap-3">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            ))}
          </div>
          <SearchCommand
            blogs={blogs}
            triggerClassName="h-8 min-h-8 w-20 min-w-0 md:w-32 lg:w-44"
          />
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-input bg-transparent text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
            <ThemeToggle />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-input bg-transparent text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {NAV_LINKS.map(({ href, label }) => (
                <DropdownMenuItem key={href} asChild>
                  <Link
                    href={href}
                    className="flex cursor-pointer items-center outline-none"
                  >
                    {label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
