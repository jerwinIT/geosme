import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import React from "react";

export default function WhyChoose() {
  return (
    <section className="container mx-auto px-4 py-16 space-y-16">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          Why Choose GeoSME Batangas?
        </h1>
        <p className="text-lg text-muted-foreground">
          Discover the advantages that make us the premier platform for business
          discovery and growth in Batangas Province
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* For Business Explorers & Consumers */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-primary">
              For Business Explorers & Consumers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <ul className="space-y-4">
              {[
                "Comprehensive Coverage: Access to every registered SME in Batangas Province",
                "Community-Driven: Real reviews and ratings from fellow Batangueños",
                "Navigation Made Easy: Never get lost finding local businesses again",
                "Market SME Insights: View trends, foot traffic, business density, and opportunities",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* For SME Owners */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-primary">
              For SME Owners
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <ul className="space-y-4">
              {[
                "Increased Visibility: Get discovered by thousands of potential customers",
                "Business Intelligence: Understand your market and competition like never before",
                "Customer Insights: Track engagement and improve customer satisfaction",
                "Growth Tools: Data-driven recommendations for business expansion",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
