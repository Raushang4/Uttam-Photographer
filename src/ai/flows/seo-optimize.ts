'use server';

/**
 * @fileOverview SEO optimization AI agent.
 *
 * - seoOptimize - A function that handles the SEO optimization process.
 * - SEOOptimizeInput - The input type for the seoOptimize function.
 * - SEOOptimizeOutput - The return type for the seoOptimize function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SEOOptimizeInputSchema = z.object({
  pageContent: z
    .string()
    .describe('The content of the page to be optimized for SEO.'),
  keywords: z.string().describe('Comma separated keywords related to the page.'),
});
export type SEOOptimizeInput = z.infer<typeof SEOOptimizeInputSchema>;

const SEOOptimizeOutputSchema = z.object({
  metaTitle: z.string().describe('The SEO-optimized meta title for the page.'),
  metaDescription: z
    .string()
    .describe('The SEO-optimized meta description for the page.'),
  metaKeywords: z.string().describe('The SEO-optimized meta keywords for the page.'),
});
export type SEOOptimizeOutput = z.infer<typeof SEOOptimizeOutputSchema>;

export async function seoOptimize(input: SEOOptimizeInput): Promise<SEOOptimizeOutput> {
  return seoOptimizeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'seoOptimizePrompt',
  input: {schema: SEOOptimizeInputSchema},
  output: {schema: SEOOptimizeOutputSchema},
  prompt: `You are an SEO expert. Generate SEO-optimized meta tags and descriptions for a photographer's portfolio page.

  Page Content: {{{pageContent}}}
  Keywords: {{{keywords}}}

  Instructions:
  - Meta Title: Keep it concise (under 60 characters) and include relevant keywords.
  - Meta Description: Write a compelling description (under 160 characters) that encourages clicks.
  - Meta Keywords: Select the most relevant keywords, separated by commas.

  Return the output as a JSON object.
  `,
});

const seoOptimizeFlow = ai.defineFlow(
  {
    name: 'seoOptimizeFlow',
    inputSchema: SEOOptimizeInputSchema,
    outputSchema: SEOOptimizeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
