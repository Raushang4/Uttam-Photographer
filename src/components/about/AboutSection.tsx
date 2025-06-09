import Image from 'next/image';
import { Section } from '@/components/shared/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Camera, Video, Edit3, Image as ImageIcon, Layers, Film, SlidersHorizontal, Users, Lightbulb, Handshake, Brain } from 'lucide-react';

const skills = [
  { name: 'Photography', icon: Camera },
  { name: 'Cinematography', icon: Video },
  { name: 'Creative Direction', icon: Lightbulb },
  { name: 'Storytelling', icon: Brain },
  { name: 'Client Collaboration', icon: Handshake },
  { name: 'Team Leadership', icon: Users },
];

const tools = [
  { name: 'Adobe Lightroom', icon: ImageIcon },
  { name: 'Adobe Photoshop', icon: Layers },
  { name: 'Adobe Premiere Pro', icon: Film },
  { name: 'Adobe After Effects', icon: SlidersHorizontal },
  { name: 'DSLR & Mirrorless Cameras', icon: Camera },
];

export function AboutSection() {
  return (
    <Section id="about" className="bg-card">
      <div className="grid md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-1 flex flex-col items-center md:items-start">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl mb-6">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Uttam Kumar"
              data-ai-hint="photographer portrait"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-3xl font-bold mb-2 text-center md:text-left">Uttam Kumar</h2>
          <p className="text-primary text-lg mb-4 text-center md:text-left">Photographer & Cinematographer</p>
        </div>
        <div className="md:col-span-2">
          <Card className="mb-8 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <GraduationCap className="h-6 w-6 text-primary" />
                Education & Bio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                A passionate visual storyteller, Uttam Kumar is dedicated to capturing life's most precious moments with creativity and precision. With a keen eye for detail and a commitment to excellence, Uttam transforms ordinary scenes into extraordinary memories.
              </p>
              <p className="font-semibold">BAJMC (Bachelor of Arts in Journalism & Mass Communication)</p>
              <ul className="list-disc list-inside text-muted-foreground ml-4">
                <li>1st to 4th Year: Comprehensive studies in visual media, storytelling, and production techniques.</li>
              </ul>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Skills</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge key={skill.name} variant="secondary" className="flex items-center gap-2 p-2 text-sm hover:bg-primary/20 transition-colors cursor-default">
                    <skill.icon className="h-4 w-4 text-primary" />
                    {skill.name}
                  </Badge>
                ))}
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Tools of the Trade</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <Badge key={tool.name} variant="secondary" className="flex items-center gap-2 p-2 text-sm hover:bg-primary/20 transition-colors cursor-default">
                    <tool.icon className="h-4 w-4 text-primary" />
                    {tool.name}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}
