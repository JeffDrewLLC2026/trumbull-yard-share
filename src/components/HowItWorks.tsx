import { Sprout, Handshake, Sun } from "lucide-react";

const steps = [
  {
    icon: Sprout,
    title: "List or Discover",
    description:
      "Post your available yard space or browse listings from neighbors with gardens ready to share.",
  },
  {
    icon: Handshake,
    title: "Connect & Agree",
    description:
      "Message yard owners, discuss terms, and agree on a plan that works for both of you.",
  },
  {
    icon: Sun,
    title: "Grow Together",
    description:
      "Start gardening! Share the harvest, split costs, and build community one garden bed at a time.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            How YardShare Works
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-xl mx-auto">
            Three simple steps to start sharing green space in Trumbull
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-background shadow-card hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
