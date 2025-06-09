export interface BlogPost {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  featuredImage: string;
  aiHint: string;
  excerpt: string;
  content: string; // Can be Markdown or HTML string
  author: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'the-art-of-storytelling-through-lens',
    title: 'The Art of Storytelling Through the Lens',
    date: '2024-07-15',
    featuredImage: 'https://placehold.co/800x450.png',
    aiHint: 'camera lens',
    excerpt: 'Discover how photography and cinematography can weave compelling narratives and evoke deep emotions. A look into techniques and philosophies.',
    content: `
      <p class="mb-4">Photography and cinematography are more than just capturing images; they are powerful tools for storytelling. Each frame, each shot, each sequence has the potential to convey complex narratives, evoke profound emotions, and offer unique perspectives.</p>
      <h3 class="text-xl font-semibold mt-6 mb-3 font-headline">The Power of Visuals</h3>
      <p class="mb-4">Visuals have an innate ability to connect with us on a primal level. A well-composed photograph can freeze a fleeting moment, preserving its essence for eternity. A carefully crafted cinematic scene can transport viewers to different worlds, allowing them to experience stories as if they were their own.</p>
      <img src="https://placehold.co/700x400.png" alt="Abstract visual representation" data-ai-hint="abstract visual" class="rounded-lg shadow-md my-6 mx-auto" />
      <h3 class="text-xl font-semibold mt-6 mb-3 font-headline">Techniques and Philosophy</h3>
      <p class="mb-4">Several techniques contribute to effective visual storytelling:
        <ul class="list-disc list-inside ml-4 mb-4">
          <li><strong>Composition:</strong> Rule of thirds, leading lines, symmetry, and framing.</li>
          <li><strong>Lighting:</strong> Natural light, artificial light, shadows, and contrast to set the mood.</li>
          <li><strong>Color Theory:</strong> Using colorsPalette to evoke specific emotions and themes.</li>
          <li><strong>Editing:</strong> Post-processing techniques to enhance the story and visual impact.</li>
        </ul>
      Beyond techniques, a core philosophy guides my work: to approach each project with empathy, curiosity, and a desire to uncover the authentic story waiting to be told.
      </p>
      <p>Join me on this journey of visual exploration, where every click of the shutter and every roll of the camera is a step towards crafting unforgettable stories.</p>
    `,
    author: 'Uttam Kumar',
    category: 'Photography Tips',
  },
  {
    slug: 'mastering-low-light-photography',
    title: 'Mastering Low-Light Photography: Tips and Tricks',
    date: '2024-06-28',
    featuredImage: 'https://placehold.co/800x450.png',
    aiHint: 'night city',
    excerpt: 'Unlock the secrets to capturing stunning images in challenging low-light conditions. From gear to settings, we cover it all.',
    content: `
      <p class="mb-4">Low-light photography presents unique challenges but also offers incredible opportunities for creative expression. Capturing the ambiance of a dimly lit street, the magic of a starlit sky, or the intimacy of a candlelit dinner requires a blend of technical skill and artistic vision.</p>
      <h3 class="text-xl font-semibold mt-6 mb-3 font-headline">Essential Gear</h3>
      <ul class="list-disc list-inside ml-4 mb-4">
        <li><strong>Camera with Good ISO Performance:</strong> A full-frame sensor is often preferred.</li>
        <li><strong>Fast Lens:</strong> Lenses with wide apertures (e.g., f/1.4, f/1.8) allow more light.</li>
        <li><strong>Sturdy Tripod:</strong> Essential for long exposures to avoid camera shake.</li>
        <li><strong>Remote Shutter Release:</strong> Minimizes vibrations.</li>
      </ul>
      <img src="https://placehold.co/700x400.png" alt="Camera on tripod at night" data-ai-hint="camera night" class="rounded-lg shadow-md my-6 mx-auto" />
      <h3 class="text-xl font-semibold mt-6 mb-3 font-headline">Key Settings</h3>
      <ul class="list-disc list-inside ml-4 mb-4">
        <li><strong>Manual Mode (M):</strong> Gives you full control.</li>
        <li><strong>Wide Aperture:</strong> Use the widest aperture your lens allows.</li>
        <li><strong>Slow Shutter Speed:</strong> Adjust based on light and desired motion blur.</li>
        <li><strong>ISO:</strong> Start low and increase as needed, being mindful of noise.</li>
        <li><strong>RAW Format:</strong> Provides more flexibility in post-processing.</li>
      </ul>
      <p>With practice and experimentation, you can master low-light photography and create breathtaking images that tell compelling stories even in the darkest environments.</p>
    `,
    author: 'Uttam Kumar',
    category: 'Tutorials',
  },
  {
    slug: 'cinematic-transitions-enhancing-your-videos',
    title: 'Cinematic Transitions: Enhancing Your Videos',
    date: '2024-05-10',
    featuredImage: 'https://placehold.co/800x450.png',
    aiHint: 'video editing',
    excerpt: 'Learn how to use transitions effectively in your video projects to create a seamless and professional cinematic experience for your audience.',
    content: `
      <p class="mb-4">Transitions are the bridges between shots in a video. When used thoughtfully, they can significantly enhance the storytelling, pacing, and overall professionalism of your cinematic work. Poorly chosen or overused transitions, however, can distract and disorient the viewer.</p>
      <h3 class="text-xl font-semibold mt-6 mb-3 font-headline">Types of Transitions</h3>
      <ul class="list-disc list-inside ml-4 mb-4">
        <li><strong>Hard Cut:</strong> The most common transition, instantly switching from one shot to another.</li>
        <li><strong>Dissolve (Crossfade):</strong> One shot gradually fades out while the next fades in. Often used to show passage of time.</li>
        <li><strong>Wipe:</strong> One shot replaces another by traveling from one side of the frame to another.</li>
        <li><strong>Fade In/Out:</strong> Fading from or to black (or white). Often used at the beginning or end of sequences.</li>
        <li><strong>Match Cut:</strong> Cutting between two shots that are visually or thematically similar.</li>
        <li><strong>J-Cut & L-Cut:</strong> Audio from the next shot begins before the video, or audio from the previous shot continues into the next.</li>
      </ul>
      <img src="https://placehold.co/700x400.png" alt="Video editing timeline" data-ai-hint="editing software" class="rounded-lg shadow-md my-6 mx-auto" />
      <h3 class="text-xl font-semibold mt-6 mb-3 font-headline">When to Use Which Transition</h3>
      <p class="mb-4">The key is to choose transitions that serve the story. 
        <ul class="list-disc list-inside ml-4 mb-4">
          <li>Use hard cuts for most scenes to maintain pace.</li>
          <li>Use dissolves to indicate a gentle shift in time or mood.</li>
          <li>Use creative transitions sparingly and purposefully, ensuring they add to the narrative rather than distract from it.</li>
        </ul>
      </p>
      <p>Mastering transitions is an art. Experiment, watch films critically, and always ask: "Does this transition help tell the story better?"</p>
    `,
    author: 'Uttam Kumar',
    category: 'Videography Tips',
  },
];

export const blogCategories = ['All', ...new Set(blogPosts.map(post => post.category))];

