import React from "react";

const subjects = [
  { name: "English Language", desc: "The medium of instruction; develops communication, comprehension, and expression skills." },
  { name: "Mathematics", desc: "Builds logical thinking, problem-solving, and numeracy skills from an early age." },
  { name: "General Science", desc: "Introduces students to the natural world through observation, experimentation, and inquiry." },
  { name: "Social Science", desc: "Develops civic awareness, history, geography, and understanding of society." },
  { name: "Computer Science", desc: "Equips students with digital literacy and foundational technology skills." },
  { name: "Physical Education", desc: "Promotes health, fitness, teamwork, and sportsmanship through physical activity." },
  { name: "Art and Crafts", desc: "Encourages creativity, fine motor development, and artistic expression." },
  { name: "Value-Based Education", desc: "Instills moral principles, ethical reasoning, and character development." },
];

const pillars = [
  { title: "Creativity & Originality", desc: "We encourage students to think beyond textbooks and develop original ideas and solutions." },
  { title: "Practical Learning", desc: "Hands-on experiments, projects, and activities connect theoretical knowledge to real-world application." },
  { title: "Strong Academic Foundation", desc: "Core subjects are taught with rigor, ensuring students have a solid base for future academic success." },
  { title: "English Instruction", desc: "All subjects are taught in English, developing fluency and academic language proficiency." },
];

export default function Academics() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-primary text-white py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Learning at DEW</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Academics & Curriculum</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            A curriculum designed to challenge, inspire, and develop the whole child — academically and beyond.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Our Approach</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
            Education That Develops the Whole Child
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            At DEW International, we believe the selection of a good educational framework is mandatory for the holistic growth of a child. An educational system that encourages children to be original, creative, and to recognize their inner strengths is what we strive for. While the medium of instruction is English, students are also exposed to the state and national languages, along with a rich range of core and enrichment subjects.
          </p>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-16 px-4 bg-muted/40">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Curriculum</p>
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Subjects We Offer</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {subjects.map((s, i) => (
              <div key={i} className="bg-white border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-semibold text-primary text-sm mb-1">{s.name}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy Pillars */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Philosophy</p>
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Our Teaching Philosophy</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The principles that guide how we teach and how students learn at DEW.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <div key={i} className="flex gap-5 bg-white border border-border rounded-xl p-6 shadow-sm">
                <div className="w-10 h-10 min-w-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-serif font-bold">{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-lg text-primary mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-16 px-4 bg-secondary text-white">
        <div className="container max-w-3xl mx-auto text-center">
          <p className="font-serif italic text-2xl md:text-3xl font-medium leading-relaxed">
            "Education is not the filling of a pail, but the lighting of a fire."
          </p>
          <p className="mt-4 text-white/70 text-sm">— A guiding principle at DEW International</p>
        </div>
      </section>
    </div>
  );
}
