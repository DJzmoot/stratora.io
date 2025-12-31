import { Server, Search, Activity, Bell, LayoutDashboard, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export function Features() {
  const features = [
    {
      icon: Server,
      title: "Infrastructure Monitoring",
      description: "Real-time servers, containers, cloud resources",
    },
    {
      icon: Search,
      title: "Log Management",
      description: "Centralized log search & analytics",
    },
    {
      icon: Activity,
      title: "APM & Tracing",
      description: "Distributed tracing across microservices",
    },
    {
      icon: Bell,
      title: "Smart Alerting",
      description: "AI-powered noise-reducing alerts",
    },
    {
      icon: LayoutDashboard,
      title: "Custom Dashboards",
      description: "Drag-and-drop visualizations",
    },
    {
      icon: ShieldCheck,
      title: "Security Monitoring",
      description: "Real-time threat detection & compliance",
    },
  ];

  return (
    <section id="features" className="relative px-6 py-20">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-4">
            Everything You Need to Monitor & Debug
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete observability platform designed for modern cloud-native applications.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative rounded-xl border border-border/50 bg-card/50 p-6 hover:border-purple-500/50 transition-all">
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/0 to-purple-800/0 group-hover:from-purple-600/20 group-hover:to-purple-800/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
      
      {/* Icon */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
        <Icon className="h-6 w-6" />
      </div>

      {/* Content */}
      <h3 className="mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}