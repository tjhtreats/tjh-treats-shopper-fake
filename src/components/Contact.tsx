
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message received! This is a demo site, so no actual message was sent.");
  };

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about our chocolates? We're here to help!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-chocolate flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-lg">Visit Our Store</h3>
                <p className="text-muted-foreground">123 Chocolate Lane, Sweet District, London, UK</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-chocolate flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-lg">Call Us</h3>
                <p className="text-muted-foreground">+44 123 456 7890</p>
                <p className="text-muted-foreground text-sm">Mon-Fri: 9am - 6pm</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-chocolate flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-lg">Email Us</h3>
                <p className="text-muted-foreground">hello@tjhtreats.com</p>
                <p className="text-muted-foreground text-sm">We'll respond within 24 hours</p>
              </div>
            </div>

            <div className="p-4 mt-6 bg-muted rounded-lg">
              <p className="text-sm text-center text-muted-foreground italic">
                ⚠️ Demo Notice: This is a demonstration website. No real business exists at this address or contact details.
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <Input id="email" type="email" placeholder="your@email.com" required />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <Input id="subject" placeholder="How can we help?" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <Textarea id="message" placeholder="Your message..." className="min-h-[120px]" required />
              </div>
              <Button type="submit" className="w-full bg-chocolate hover:bg-chocolate-light">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
