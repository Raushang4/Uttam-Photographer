import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { BlogPost } from '@/data/blogPosts';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group animate-fade-in">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-video w-full">
          <Image
            src={post.featuredImage}
            alt={post.title}
            data-ai-hint={post.aiHint}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <CardHeader>
        <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
        <Link href={`/blog/${post.slug}`} className="block">
          <CardTitle className="text-xl md:text-2xl hover:text-primary transition-colors">{post.title}</CardTitle>
        </Link>
        <div className="flex items-center text-sm text-muted-foreground mt-2">
          <CalendarDays className="h-4 w-4 mr-2" />
          <span>{formattedDate}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
      </CardContent>
      <CardFooter>
        <Button variant="link" asChild className="p-0 text-primary hover:text-accent group-hover:text-accent">
          <Link href={`/blog/${post.slug}`} className="flex items-center">
            Read More <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
