"use client";

import * as React from "react";
import { Home, FileText, FolderKanban, User, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { products } from "@/data/products";

export interface BlogItem {
  slug: string;
  metadata: { title: string };
}

interface SearchCommandProps {
  blogs: BlogItem[];
  triggerClassName?: string;
}

export function SearchCommand({ blogs, triggerClassName }: SearchCommandProps) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "group relative inline-flex h-8 w-full items-center justify-start rounded-md border border-input bg-transparent px-3 py-1.5 text-sm font-medium whitespace-nowrap text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground hover:border-accent focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 sm:pr-10 md:w-32 lg:w-44",
          triggerClassName,
        )}
      >
        <span className="hidden lg:inline-flex">Search website...</span>
        <span className="inline-flex min-w-0 truncate lg:hidden">
          Search...
        </span>
        <kbd className="pointer-events-none absolute top-1.5 right-1.5 hidden h-5 items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground select-none sm:flex group-hover:bg-muted/90 group-hover:border-border">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Navigation">
            <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
              <Home className="mr-2 h-4 w-4" />
              <span>Home</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/products"))}
            >
              <FolderKanban className="mr-2 h-4 w-4" />
              <span>All Products</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/blogs"))}
            >
              <FileText className="mr-2 h-4 w-4" />
              <span>Blogs</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Sections">
            <CommandItem
              onSelect={() => runCommand(() => router.push("/#products"))}
            >
              <FolderKanban className="mr-2 h-4 w-4" />
              <span>Products Section</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/#about"))}
            >
              <User className="mr-2 h-4 w-4" />
              <span>About Section</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Products">
            {products.map((product) => (
              <CommandItem
                key={product.id}
                onSelect={() =>
                  runCommand(() => router.push(`/products/${product.id}`))
                }
              >
                <FolderKanban className="mr-2 h-4 w-4" />
                <span>{product.name}</span>
              </CommandItem>
            ))}
            <CommandItem
              onSelect={() => runCommand(() => router.push("/products"))}
              className="text-muted-foreground"
            >
              <ArrowRight className="mr-2 h-4 w-4" />
              <span>View All Products</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Blogs">
            {blogs.map((blog) => (
              <CommandItem
                key={blog.slug}
                onSelect={() =>
                  runCommand(() => router.push(`/blogs/${blog.slug}`))
                }
              >
                <FileText className="mr-2 h-4 w-4" />
                <span>{blog.metadata.title}</span>
              </CommandItem>
            ))}
            <CommandItem
              onSelect={() => runCommand(() => router.push("/blogs"))}
              className="text-muted-foreground"
            >
              <ArrowRight className="mr-2 h-4 w-4" />
              <span>View All Blogs</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
