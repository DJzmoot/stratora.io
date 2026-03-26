import { motion } from "motion/react";

export function DashboardPreview() {
  return (
    <section className="relative px-6 pb-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl border border-purple-500/20 overflow-hidden shadow-2xl shadow-purple-900/20"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-2xl blur-xl -z-10" />
          <img
            src="/screenshots/dashboard-preview.png"
            alt="Stratora dashboard — Sites view showing network topology, health breakdown, device types, and performance metrics"
            className="w-full h-auto block"
            loading="eager"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
