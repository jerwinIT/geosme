import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, UserPlus } from "lucide-react";

export default function CTAUsers() {
  return (
    <section
      id="portal"
      className="relative w-full min-h-[calc(40vh-5rem)] flex flex-col justify-center items-center py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      {/* Content Container */}
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Access our SME Owner Dashboard
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-background/95 backdrop-blur-sm border-primary-200/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-text">Already Listed?</CardTitle>
              <CardDescription className="text-text-secondary">
                Take control of your business presence and unlock growth
                opportunities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                className="w-full bg-primary-500 hover:bg-primary-800 transition-colors duration-200"
                size="lg"
              >
                Claim My Business Profile
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-background/95 backdrop-blur-sm border-primary-200/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-text">Not Listed Yet?</CardTitle>
              <CardDescription className="text-text-secondary">
                Join hundreds of Batangas SMEs already growing with our platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                className="w-full bg-primary-500 hover:bg-primary-800 transition-colors duration-200"
                size="lg"
              >
                Register My Business - Free
                <UserPlus className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
