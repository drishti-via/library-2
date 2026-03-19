import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpenText, Star } from 'lucide-react';

export default function BookCard({ book, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className="overflow-hidden rounded-3xl bg-white shadow-[0_18px_50px_rgba(34,40,49,0.08)]"
    >
      <div className="bg-gradient-to-br from-ink-600 via-ink-500 to-amber-500 p-6 text-white">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/70">Staff pick</p>
            <h3 className="mt-3 text-2xl font-semibold">{book.title}</h3>
            <p className="mt-2 text-base text-white/80">by {book.author}</p>
          </div>
          <BookOpenText className="h-8 w-8 text-white/80" />
        </div>
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-center gap-2 text-sm font-medium text-amber-600">
          <Star className="h-4 w-4 fill-current" />
          {book.rating} community rating
        </div>
        <p className="text-base leading-relaxed text-shelf-600">{book.description}</p>
        <div className="flex items-center justify-between gap-4 text-sm text-shelf-500">
          <span>{book.genre}</span>
          <span>{book.format}</span>
        </div>
        <button className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-shelf-900 px-5 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-shelf-800">
          Reserve this title
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </motion.article>
  );
}
