import { motion } from 'framer-motion';
import { BookMarked, BookOpen, CalendarHeart, Clock3, Coffee, Laptop, MapPin, Search, Sparkles, Users } from 'lucide-react';
import BookCard from './components/BookCard';
import EventCard from './components/EventCard';
import FeatureCard from './components/FeatureCard';
import SectionTitle from './components/SectionTitle';

const features = [
  {
    icon: Search,
    title: 'Curated discovery shelves',
    description: 'Browse handpicked collections for mystery lovers, lifelong learners, young readers, and anyone chasing their next favorite story.',
    accent: 'bg-ink-100 text-ink-700',
  },
  {
    icon: Laptop,
    title: 'Digital access everywhere',
    description: 'Borrow ebooks, audiobooks, and research databases from home with a card that opens the library far beyond our walls.',
    accent: 'bg-amber-100 text-amber-700',
  },
  {
    icon: Coffee,
    title: 'Spaces to stay awhile',
    description: 'Find sunlit reading nooks, quiet study tables, and welcoming community rooms designed for focus and connection.',
    accent: 'bg-shelf-100 text-shelf-700',
  },
];

const events = [
  {
    title: 'Moonlit Mystery Book Club',
    description: 'An evening discussion of atmospheric thrillers with tea, thoughtful prompts, and room for new members.',
    date: '2026-03-24',
    time: '6:30 PM – 7:45 PM',
    location: 'Fireside Reading Room',
    category: 'Book Club',
    audience: 'Adults',
  },
  {
    title: 'Saturday Story Garden',
    description: 'Songs, picture books, and playful crafts for children and caregivers in our bright family corner.',
    date: '2026-03-28',
    time: '10:00 AM – 11:00 AM',
    location: 'Children’s Discovery Loft',
    category: 'Storytime',
    audience: 'Families',
  },
  {
    title: 'Creative Resume Lab',
    description: 'Get one-on-one help polishing resumes, cover letters, and online profiles with local career mentors.',
    date: '2026-04-02',
    time: '4:00 PM – 6:00 PM',
    location: 'Innovation Studio',
    category: 'Workshop',
    audience: 'Teens & Adults',
  },
];

const books = [
  {
    title: 'The Night Circus',
    author: 'Erin Morgenstern',
    rating: '4.7',
    genre: 'Fantasy',
    format: 'Print + Ebook',
    description: 'A lush, dreamlike novel about a magical competition unfolding inside a wandering circus that only opens after dark.',
  },
  {
    title: 'Braiding Sweetgrass',
    author: 'Robin Wall Kimmerer',
    rating: '4.9',
    genre: 'Nature Writing',
    format: 'Print + Audiobook',
    description: 'A moving blend of science, story, and Indigenous wisdom that invites readers into a more reciprocal relationship with the natural world.',
  },
  {
    title: 'Tomorrow, and Tomorrow, and Tomorrow',
    author: 'Gabrielle Zevin',
    rating: '4.6',
    genre: 'Literary Fiction',
    format: 'Print + Large Print',
    description: 'A vibrant story of friendship, ambition, and creative partnership told through the making of unforgettable video games.',
  },
];

const stats = [
  { label: 'Books, films & digital titles', value: '120K+' },
  { label: 'Programs hosted each year', value: '480' },
  { label: 'Study rooms & creative spaces', value: '18' },
];

export default function App() {
  return (
    <main className="min-h-screen bg-shelf-50 text-shelf-900">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(180,140,70,0.18),_transparent_35%),linear-gradient(135deg,#1f3a5f_0%,#27496d_45%,#3b6b8f_100%)] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_45%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-5 md:px-8 md:py-16">
          <nav className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/12 p-3 backdrop-blur">
                <BookMarked className="h-6 w-6 text-amber-200" />
              </div>
              <div>
                <p className="text-lg font-semibold tracking-tight">Northlight Library</p>
                <p className="text-sm text-white/70">A modern home for stories, study, and community</p>
              </div>
            </div>
            <button className="min-h-[44px] rounded-full border border-white/20 bg-white/10 px-5 py-2 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20">
              Get a library card
            </button>
          </nav>

          <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-amber-100 backdrop-blur">
                <Sparkles className="h-4 w-4" />
                Spring reading challenge now open
              </div>
              <div className="space-y-4">
                <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                  Discover your next chapter in a library built for curious minds.
                </h1>
                <p className="max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                  Explore beloved books, inspiring events, quiet workspaces, and digital resources that make learning feel warm, local, and alive.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="min-h-[48px] rounded-full bg-amber-400 px-6 py-3 text-base font-semibold text-shelf-900 transition hover:-translate-y-0.5 hover:bg-amber-300">
                  Browse featured books
                </button>
                <button className="min-h-[48px] rounded-full border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20">
                  View upcoming events
                </button>
              </div>
              <div className="grid gap-4 pt-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.1 }} className="rounded-[32px] bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[28px] bg-shelf-50 p-5 text-shelf-900">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-ink-500">Today at the library</p>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight">Open, welcoming, and full of possibility</h2>
                  </div>
                  <Clock3 className="h-8 w-8 text-amber-500" />
                </div>
                <div className="mt-6 space-y-4">
                  <div className="rounded-3xl bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-3 text-sm font-medium text-shelf-500"><MapPin className="h-4 w-4 text-ink-500" />145 Cedar Avenue, open until 8 PM</div>
                    <p className="mt-3 text-lg font-semibold">Quiet study rooms available now</p>
                  </div>
                  <div className="rounded-3xl bg-amber-50 p-4">
                    <div className="flex items-center gap-3 text-sm font-medium text-amber-700"><CalendarHeart className="h-4 w-4" />Tonight’s highlight</div>
                    <p className="mt-3 text-lg font-semibold text-shelf-900">Poetry open mic at 7:00 PM in the Lantern Hall.</p>
                  </div>
                  <div className="rounded-3xl bg-ink-50 p-4">
                    <div className="flex items-center gap-3 text-sm font-medium text-ink-700"><Users className="h-4 w-4" />Community favorite</div>
                    <p className="mt-3 text-lg font-semibold text-shelf-900">New member orientation every Wednesday with staff-led tours.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-5 md:px-8">
        <SectionTitle
          eyebrow="Why readers love it here"
          title="More than shelves — a place to learn, gather, and recharge"
          description="Northlight Library blends timeless reading culture with modern tools, making it easy to borrow, study, create, and connect in one beautiful civic space."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
          <SectionTitle
            eyebrow="Featured collection"
            title="Fresh picks from librarians who know how to match books to moods"
            description="Whether you want wonder, comfort, insight, or suspense, our staff recommendations help you find stories worth carrying home."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {books.map((book, index) => (
              <BookCard key={book.title} book={book} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-5 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-6">
            <SectionTitle
              eyebrow="Programs & events"
              title="A calendar full of reasons to come back each week"
              description="From family storytimes to career workshops and book clubs, our events are designed to welcome every age and stage of learning."
            />
            <div className="rounded-[32px] bg-ink-600 p-6 text-white shadow-[0_18px_50px_rgba(34,40,49,0.12)]">
              <div className="flex items-center gap-3 text-amber-200">
                <BookOpen className="h-5 w-5" />
                <p className="text-sm font-semibold uppercase tracking-[0.25em]">Membership perks</p>
              </div>
              <ul className="mt-5 space-y-4 text-base text-white/85">
                <li>• Borrow up to 40 physical items and 15 digital titles at a time.</li>
                <li>• Reserve maker kits, meeting rooms, and museum passes online.</li>
                <li>• Access language learning, genealogy tools, and homework help anytime.</li>
              </ul>
            </div>
          </div>
          <div className="grid gap-6">
            {events.map((event, index) => (
              <EventCard key={event.title} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-shelf-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
          <div className="grid gap-8 rounded-[36px] bg-[linear-gradient(135deg,#203a5f_0%,#2f5d7c_55%,#b88b4a_100%)] p-8 shadow-2xl md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-100">Plan your visit</p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Come for a book, stay for the atmosphere.</h2>
              <p className="max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                Visit Northlight Library for quiet mornings, lively afternoons, and evenings filled with ideas. Everyone is welcome, and your first card is free.
              </p>
            </div>
            <button className="min-h-[48px] rounded-full bg-white px-6 py-3 text-base font-semibold text-shelf-900 transition hover:-translate-y-0.5 hover:bg-shelf-50">
              Start your membership
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
