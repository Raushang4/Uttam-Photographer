
"use client";

import Link from 'next/link';
import { Menu, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
  { href: '/admin/seo-optimizer', label: 'SEO Tool' },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href || (href.includes("/#") && pathname === "/");
    return (
      <SheetClose asChild>
        <Link href={href} passHref>
          <Button
            variant="ghost"
            className={cn(
              "text-foreground hover:text-primary hover:bg-primary/10 transition-colors",
              isActive && "text-primary font-semibold"
            )}
          >
            {label}
          </Button>
        </Link>
      </SheetClose>
    );
  };
  
  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors" aria-label="Uttam Kumar Home">
          <Camera className="h-7 w-7 text-primary" />
          <span className="font-headline">Uttam Kumar</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
             <Link href={link.href} key={link.href} passHref>
             <Button
               variant="ghost"
               className={cn(
                 "text-foreground hover:text-primary hover:bg-primary/10 transition-colors",
                 (pathname === link.href || (link.href.includes("/#") && pathname === "/")) && "text-primary font-semibold"
               )}
             >
               {link.label}
             </Button>
           </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                <Menu className="h-6 w-6 text-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-6">
              <div className="flex flex-col gap-4 pt-8">
                {navLinks.map((link) => (
                  <NavLink href={link.href} label={link.label} key={link.href} />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
