"use client";

import { useState } from 'react';
import { blogPosts, blogCategories, type BlogPost } from '@/data/blogPosts';
import { BlogPostCard } from './BlogPostCard';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/shared/Section';
import { cn } from '@/lib/utils';

interface BlogListProps {
  initialCount?: number; // For homepage summary
  showFilters?: boolean;
  title?: string;
  showViewAllButton?: boolean;
}

export function BlogList({ initialCount, showFilters = true, title = "Latest Insights", showViewAllButton = false }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const filteredPosts = selectedCategory === 'All'
    ? sortedPosts
    : sortedPosts.filter(post => post.category === selectedCategory);

  const postsToDisplay = initialCount ? filteredPosts.slice(0, initialCount) : filteredPosts;

  return (
    <Section id="blog-list">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{title}</h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Stay updated with my latest thoughts on photography, cinematography, creative processes, and industry trends.
      </p>

      {showFilters && (
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {blogCategories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "transition-all duration-200",
                selectedCategory === category ? "bg-primary text-primary-foreground hover:bg-primary/90" : "hover:bg-accent hover:text-accent-foreground"
              )}
            >
              {category}
            </Button>
          ))}
        </div>
      )}

      {postsToDisplay.length > 0 ? (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {postsToDisplay.map(post => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground text-lg">No posts available in this category yet. Check back soon!</p>
      )}

      {showViewAllButton && initialCount && blogPosts.length > initialCount && (
        <div className="text-center mt-12">
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href="/blog">Read All Posts</a>
          </Button>
        </div>
      )}
    </Section>
  );
}
