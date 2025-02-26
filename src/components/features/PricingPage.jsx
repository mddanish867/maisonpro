import React from "react";
import { Check, ChevronRight } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "Developer",
      price: "$49",
      features: [
        "Up to 3 developers",
        "Basic documentation generation",
        "Unit test generation",
        "Code analysis",
        "Community support",
        "5 projects",
      ],
    },
    {
      name: "Team",
      price: "$199",
      features: [
        "Up to 25 developers",
        "Advanced documentation",
        "Unit & integration tests",
        "Deep code analysis",
        "Priority support",
        "Unlimited projects",
        "CI/CD integration",
        "Team collaboration tools",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited developers",
        "Custom documentation templates",
        "Advanced test automation",
        "Custom code analysis rules",
        "24/7 dedicated support",
        "Private deployment option",
        "SSO & advanced security",
        "Custom API integration",
        "Compliance controls",
      ],
    },
  ];

  return (
    <div className="bg-[#0A0A0A] text-white selection:bg-violet-400 selection:text-black">
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-thin tracking-tight mb-8">
              Transparent
              <span className="block mt-2 font-light text-violet-400">
                Pricing
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-12 max-w-3xl mx-auto">
              Choose the plan that best fits your development team's needs.
              All plans include core documentation and testing capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="p-8 border border-gray-800 hover:border-violet-400/50 transition-all duration-500 group"
              >
                <h3 className="text-2xl font-light tracking-wider mb-4 text-center group-hover:text-violet-400 transition-colors">
                  {plan.name}
                </h3>
                <div className="text-4xl font-light text-center mb-8">
                  {plan.price}
                  {plan.name !== "Enterprise" && (
                    <span className="text-sm text-gray-400">/month</span>
                  )}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-violet-400 mr-2" />
                      <span className="text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-400 to-yellow-300 text-blue-800 text-sm tracking-wider hover:bg-emerald-300 transition-colors duration-300 flex items-center justify-center group">
                  {plan.name === "Enterprise" ? "CONTACT SALES" : "START FREE TRIAL"}
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}