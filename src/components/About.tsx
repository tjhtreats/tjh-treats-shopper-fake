
import { Card, CardContent } from '@/components/ui/card';
import { Award, Leaf, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About TJH Treats</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Creating luxury chocolates with passion and precision since 2010.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Our Chocolate Story</h3>
            <p className="text-muted-foreground">
              TJH Treats began with a passion for creating extraordinary chocolate experiences. Our founder, Thomas J. Henderson, trained in Dubai with master chocolatiers before bringing his expertise back to create our signature collection.
            </p>
            <p className="text-muted-foreground">
              Every chocolate we craft is made with premium ingredients, ethically sourced from around the world. We take pride in our artisan approach, ensuring each bite delivers an unforgettable moment of luxury.
            </p>
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card>
                <CardContent className="flex flex-col items-center p-4">
                  <Award className="h-10 w-10 text-gold mb-2" />
                  <h4 className="font-medium text-center">Award Winning</h4>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-4">
                  <Leaf className="h-10 w-10 text-chocolate mb-2" />
                  <h4 className="font-medium text-center">Sustainable</h4>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-4">
                  <Heart className="h-10 w-10 text-red-500 mb-2" />
                  <h4 className="font-medium text-center">Handcrafted</h4>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/chocolate-shop.jpg" 
              alt="Inside our chocolate shop"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white text-lg font-medium">Our Dubai-inspired chocolate boutique</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
