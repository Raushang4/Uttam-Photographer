import { Section } from '@/components/shared/Section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Mail, MessageSquare, Phone, MapPin, Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/uttamkumar', color: "text-pink-500" },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/uttamkumar', color: "text-blue-600" },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/uttamkumar', color: "text-red-600" },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/uttamkumar', color: "text-sky-700" },
];


export function ContactSection() {
  return (
    <Section id="contact" className="bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Have a project in mind, a question, or just want to say hello? I'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="shadow-lg animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="flex items-center group">
              <MessageSquare className="h-6 w-6 mr-3 text-primary group-hover:text-accent transition-colors" />
              <div>
                <p className="font-semibold group-hover:text-accent transition-colors">WhatsApp</p>
                <p className="text-sm text-muted-foreground">+91 123 456 7890</p>
              </div>
            </a>
            <a href="tel:+911234567890" className="flex items-center group">
              <Phone className="h-6 w-6 mr-3 text-primary group-hover:text-accent transition-colors" />
              <div>
                <p className="font-semibold group-hover:text-accent transition-colors">Phone</p>
                <p className="text-sm text-muted-foreground">+91 123 456 7890</p>
              </div>
            </a>
            <a href="mailto:uttam.kumar@example.com" className="flex items-center group">
              <Mail className="h-6 w-6 mr-3 text-primary group-hover:text-accent transition-colors" />
              <div>
                <p className="font-semibold group-hover:text-accent transition-colors">Email</p>
                <p className="text-sm text-muted-foreground">uttam.kumar@example.com</p>
              </div>
            </a>
            <div className="flex items-center group">
               <MapPin className="h-6 w-6 mr-3 text-primary group-hover:text-accent transition-colors" />
               <div>
                <p className="font-semibold group-hover:text-accent transition-colors">Location</p>
                <p className="text-sm text-muted-foreground">New Delhi, India (Available for projects worldwide)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg animate-fade-in animation-delay-300">
          <CardHeader>
            <CardTitle className="text-2xl">Let's Connect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="font-semibold mb-3">Follow me on social media:</p>
              <div className="flex space-x-4">
                {socialLinks.map(social => (
                  <Button key={social.name} variant="outline" size="icon" asChild className="hover:border-accent">
                    <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                      <social.icon className={`h-5 w-5 ${social.color} hover:scale-110 transition-transform`} />
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <p className="font-semibold mb-3">My Resume:</p>
              <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="/UttamKumar_Resume.pdf" download>
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume
                </a>
              </Button>
               <p className="text-xs text-muted-foreground mt-2 text-center">(Note: This is a placeholder PDF)</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
