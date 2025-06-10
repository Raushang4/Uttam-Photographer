import Link from 'next/link';
import { Instagram, Facebook, Youtube, Linkedin, Mail, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-6 text-center text-muted-foreground">
        <div className="flex justify-center space-x-4 mb-6">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://instagram.com/uttamkumar" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://facebook.com/uttamkumar" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://youtube.com/uttamkumar" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com/in/uttamkumar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        <p className="text-sm">
          &copy; {currentYear} Uttam Kumar. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Designed by Uttam Kumar
        </p>
      </div>
    </footer>
  );
}
