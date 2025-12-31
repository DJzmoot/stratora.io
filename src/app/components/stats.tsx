import { motion } from "motion/react";

export function Stats() {
  const stats = [
    { value: "99.99%", label: "Uptime SLA" },
    { value: "50B+", label: "Events / Day" },
    { value: "<1ms", label: "Query Latency" },
    { value: "500+", label: "Integrations" },
  ];

  return (
    <section className="relative px-6 py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}