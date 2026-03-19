import { motion } from 'framer-motion';

export default function FeatureCard({ icon: Icon, title, description, accent }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl bg-white p-6 shadow-[0_18px_50px_rgba(34,40,49,0.08)]"
    >
      <div className={`mb-5 inline-flex rounded-2xl p-3 ${accent}`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold text-shelf-900">{title}</h3>
      <p className="mt-3 text-base leading-relaxed text-shelf-600">{description}</p>
    </motion.div>
  );
}
