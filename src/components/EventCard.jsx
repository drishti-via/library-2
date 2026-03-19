import { CalendarDays, Clock3, MapPin } from 'lucide-react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';

export default function EventCard({ event, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className="rounded-3xl bg-white p-6 shadow-[0_18px_50px_rgba(34,40,49,0.08)]"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full bg-ink-100 px-3 py-1 text-sm font-semibold text-ink-700">{event.category}</span>
        <span className="text-sm font-medium text-shelf-500">{event.audience}</span>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-shelf-900">{event.title}</h3>
      <p className="mt-3 text-base leading-relaxed text-shelf-600">{event.description}</p>
      <div className="mt-5 space-y-3 text-sm text-shelf-600">
        <div className="flex items-center gap-3"><CalendarDays className="h-4 w-4 text-ink-500" />{format(new Date(event.date), 'EEEE, MMMM d')}</div>
        <div className="flex items-center gap-3"><Clock3 className="h-4 w-4 text-ink-500" />{event.time}</div>
        <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-ink-500" />{event.location}</div>
      </div>
    </motion.article>
  );
}
