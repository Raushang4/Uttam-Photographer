import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-16 md:py-24', className)}
      {...props}
    >
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
}
