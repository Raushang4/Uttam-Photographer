import { blogPosts, type BlogPost } from '@/data/blogPosts';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CalendarDays, UserCircle, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Section } from '@/components/shared/Section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug);
 
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }
 
  return {
    title: `${post.title} - Uttam Kumar Blog`,
    description: post.excerpt,
    openGraph: {
      images: [post.featuredImage],
    },
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Section className="bg-card py-12 md:py-16">
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <Badge variant="outline" className="mb-4">{post.category}</Badge>
          <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CalendarDays className="h-4 w-4 mr-2" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center">
              <UserCircle className="h-4 w-4 mr-2" />
              <span>By {post.author}</span>
            </div>
          </div>
        </header>

        {post.featuredImage && (
          <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg mb-8">
            <Image
              src={post.featuredImage}
              alt={post.title}
              data-ai-hint={post.aiHint}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div
          className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline prose-p:font-body prose-a:text-primary hover:prose-a:text-accent prose-img:rounded-md prose-img:shadow-md"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <div className="mt-12 text-center">
            <Button asChild variant="outline">
                <Link href="/blog">Back to Blog</Link>
            </Button>
        </div>
      </article>
    </Section>
  );
}
