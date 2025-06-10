import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CTAUsers() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Explore Batangas' Business Ecosystem?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">For SME Owners:</h3>
              <p className="mb-6 text-blue-100">
                Take control of your business presence and unlock growth
                opportunities
              </p>
              <Button size="lg" variant="secondary" className="w-full">
                Claim My Business Profile
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">For Business Owners</h3>
              <p className="mb-6 text-blue-100">
                Join hundreds of Batangas SMEs already growing with our platform
              </p>
              <Button size="lg" variant="secondary" className="w-full">
                Register Your Business
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                For Consumers/Business Explorer
              </h3>
              <p className="mb-6 text-blue-100">
                Ready to discover amazing local businesses in Batangas?
              </p>
              <Button size="lg" variant="secondary" className="w-full">
                Signup Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
