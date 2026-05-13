import React, { useEffect, useRef, useState } from "react";
import photo1 from "@assets/IMG-20260413-WA0046_1776172632141.jpg";
import photo2 from "@assets/IMG-20260413-WA0045_1776172632281.jpg";
import photo3 from "@assets/IMG-20260413-WA0044_1776172632493.jpg";
import photo4 from "@assets/IMG-20260414-WA0057_1776241556462.jpg";
import photo5 from "@assets/IMG-20260414-WA0038_1776241556712.jpg";

const activities = [
  {
    title: "Talents Day",
    desc: "Students participate enthusiastically in various competitions like fancy dress, dance, collage, face painting, vegetable carving, and many more.",
    benefit: "Builds Confidence & Creativity",
    icon: "🎨",
  },
  {
    title: "National Day Celebrations",
    desc: "Republic Day, Independence Day, Teachers' Day, Children's Day, and more are celebrated with great enthusiasm and festivity.",
    benefit: "Builds Patriotism",
    icon: "🏛",
  },
  {
    title: "School Exhibitions",
    desc: "Students display models, charts, and projects on topics from science to literature — showcasing their creativity and knowledge to parents and friends.",
    benefit: "Builds Practical Knowledge",
    icon: "🔬",
  },
  {
    title: "Educational & Recreational Trips",
    desc: "Organized at least once a year to supplement classroom learning and inculcate proper social behaviour. A great opportunity for students to bond with peers and teachers.",
    benefit: "Builds Social Skills",
    icon: "🚌",
  },
  {
    title: "Annual Sports Day",
    desc: "Students display their prowess through march-pasts, mass drills, displays, and inter-house competitions in throw-ball, badminton, basketball, and more.",
    benefit: "Builds Sportsmanship",
    icon: "⚽",
  },
  {
    title: "Annual School Day",
    desc: "A celebration honoring meritorious students of the previous academic year. WASSCE Board toppers receive medals, certificates, and awards. Toppers in sports and arts are also recognized.",
    benefit: "Celebrates Achievement",
    icon: "🏆",
  },
  {
    title: "Valedictory Function",
    desc: "A solemn passing-out convocation held annually for Senior students — marking the end of their school journey and celebrating their growth and accomplishments.",
    benefit: "Marks Milestones",
    icon: "🎓",
  },
];

const gallerySlides = [
  {
    src: photo1,
    alt: "DEW students lined up in uniform during a school event",
    caption: "Students in morning assembly — discipline and order from the start of every day",
  },
  {
    src: photo2,
    alt: "DEW students studying and collaborating in the classroom",
    caption: "Engaged learners — collaborative study sessions that build academic confidence",
  },
  {
    src: photo3,
    alt: "DEW students receiving certificates at Annual School Day",
    caption: "Annual School Day — celebrating our high achievers with certificates and recognition",
  },
  {
    src: photo4,
    alt: "Students attentively listening to a teacher at the whiteboard",
    caption: "A full classroom — students engaged and attentive during a lesson",
  },
  {
    src: photo5,
    alt: "DEW students writing an examination in a large hall",
    caption: "Examination in progress — students focused and giving their very best",
  },
];

function AutoScrollGallery() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function startInterval() {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % gallerySlides.length);
    }, 4000);
  }

  useEffect(() => {
    if (!isPaused) {
      startInterval();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  function goTo(index: number) {
    setCurrent(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!isPaused) startInterval();
  }

  function prev() {
    goTo((current - 1 + gallerySlides.length) % gallerySlides.length);
  }

  function next() {
    goTo((current + 1) % gallerySlides.length);
  }

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl shadow-xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {gallerySlides.map((slide, i) => (
          <div key={i} className="min-w-full relative">
            <div className="aspect-video md:aspect-[16/7] overflow-hidden bg-muted">
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-5">
              <p className="text-white text-sm md:text-base font-medium">{slide.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Prev / Next Buttons */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
        aria-label="Previous photo"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
        aria-label="Next photo"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-2">
        {gallerySlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-white" : "w-1.5 bg-white/50"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute top-3 right-3 bg-black/40 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm">
        {current + 1} / {gallerySlides.length}
      </div>
    </div>
  );
}

export default function StudentLife() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-primary text-white py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Beyond the Classroom</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Student Life & Activities</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Life at DEW is vibrant, engaging, and full of opportunities for students to discover their passions and grow as individuals.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-lg">
            At DEW International, we understand that education extends far beyond the four walls of a classroom. Our rich calendar of activities is designed to build confidence, teamwork, creativity, patriotism, and leadership — shaping students into well-rounded individuals ready for the future.
          </p>
        </div>
      </section>

      {/* Activities */}
      <section className="py-10 px-4 bg-muted/40">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((a, i) => (
              <div key={i} className="bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex gap-5">
                <div className="text-3xl mt-1">{a.icon}</div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-primary mb-2">{a.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{a.desc}</p>
                  <span className="inline-block text-xs font-semibold text-secondary border border-secondary/30 bg-secondary/10 px-3 py-1 rounded-full">
                    {a.benefit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Auto-Scroll Gallery */}
      <section className="py-20 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Gallery</p>
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Life at DEW in Pictures</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Real moments from our school grounds — students in uniform, engaged in learning, and celebrating achievement.
            </p>
          </div>
          <AutoScrollGallery />
          <p className="text-center text-muted-foreground text-xs mt-4">Hover to pause — click arrows or dots to navigate</p>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="container max-w-3xl mx-auto text-center">
          <p className="font-serif italic text-xl md:text-2xl leading-relaxed">
            "We believe every child should leave school not just with knowledge, but with memories, friendships, and the confidence to face the world."
          </p>
          <p className="mt-4 text-white/70 text-sm">— DEW International School</p>
        </div>
      </section>
    </div>
  );
}
