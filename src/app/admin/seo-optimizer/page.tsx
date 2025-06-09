"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { seoOptimize, type SEOOptimizeInput, type SEOOptimizeOutput } from '@/ai/flows/seo-optimize';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from '@/components/shared/Section';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import type { Metadata } from 'next';

// Cannot export metadata directly from client component.
// export const metadata: Metadata = {
//   title: 'SEO Optimizer Tool - Uttam Kumar',
//   description: 'AI-powered SEO optimization tool for generating meta tags, titles, and descriptions.',
// };

const formSchema = z.object({
  pageContent: z.string().min(50, { message: "Page content must be at least 50 characters." }),
  keywords: z.string().min(3, { message: "Please provide at least one keyword." }),
});

export default function SEOOptimizerPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [seoResult, setSeoResult] = useState<SEOOptimizeOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pageContent: "",
      keywords: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSeoResult(null);
    try {
      const result = await seoOptimize(values as SEOOptimizeInput);
      setSeoResult(result);
      toast({
        title: "SEO Optimization Complete!",
        description: "Meta tags generated successfully.",
      });
    } catch (error) {
      console.error("SEO Optimization error:", error);
      toast({
        title: "Error",
        description: "Failed to generate SEO optimization. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Section id="seo-optimizer" className="py-12">
      <div className="max-w-3xl mx-auto">
        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Sparkles className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="text-3xl font-headline">AI SEO Optimizer</CardTitle>
            <CardDescription>
              Generate SEO-friendly meta titles, descriptions, and keywords for your page content.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="pageContent"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Page Content</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Paste the main content of your web page here..."
                          className="min-h-[200px] resize-y"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="keywords"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Keywords</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter comma-separated keywords (e.g., landscape photography, cinematic video, portrait)" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Optimizing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-5 w-5" />
                      Generate SEO Tags
                    </>
                  )}
                </Button>
              </form>
            </Form>

            {seoResult && (
              <div className="mt-12 space-y-6 animate-fade-in">
                <h3 className="text-2xl font-semibold text-center font-headline">Optimization Results:</h3>
                <Card>
                  <CardHeader>
                    <CardTitle>Meta Title</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground bg-muted p-3 rounded-md">{seoResult.metaTitle}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Meta Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground bg-muted p-3 rounded-md">{seoResult.metaDescription}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Meta Keywords</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground bg-muted p-3 rounded-md">{seoResult.metaKeywords}</p>
                  </CardContent>
                </Card>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

// Add a dummy export for Metadata if needed for other files, but it's not used by Next.js here.
export const SeoOptimizerPageMetadata = {
  title: 'SEO Optimizer Tool - Uttam Kumar',
  description: 'AI-powered SEO optimization tool for generating meta tags, titles, and descriptions.',
};

