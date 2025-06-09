import { BlogList } from '@/components/blog/BlogList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Uttam Kumar',
  description: 'Read the latest articles and insights on photography and cinematography by Uttam Kumar.',
};

export default function BlogPage() {
  return (
    <div className="py-8">
      <BlogList showFilters={true} title="The Creative Log" />
    </div>
  );
}
