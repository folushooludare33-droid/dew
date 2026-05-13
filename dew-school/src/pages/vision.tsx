import React from "react";

const values = [
  { title: "Discipline", desc: "We believe discipline is the foundation of all achievement. Our structured environment builds self-control and respect.", icon: "⚖" },
  { title: "Excellence", desc: "We hold high standards in academics, character, and conduct — pushing every student to reach their full potential.", icon: "★" },
  { title: "Integrity", desc: "Honesty, transparency, and moral uprightness are values we instill in every student from their earliest years.", icon: "◈" },
  { title: "Leadership", desc: "We identify and nurture the leader in every child, developing confidence, initiative, and the ability to inspire others.", icon: "◆" },
  { title: "Creativity", desc: "We foster originality and innovative thinking, encouraging students to explore ideas beyond the boundaries of textbooks.", icon: "✦" },
  { title: "Service", desc: "We raise students who understand their duty to their community and are eager to make a positive contribution to society.", icon: "♦" },
];

export default function Vision() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-primary text-white py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Direction</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Vision & Mission</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Everything we do at DEW is guided by a clear vision, a purposeful mission, and values that endure.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Our Vision</p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
                "Grow to Glow"
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                All efforts at DEW International School are made to focus on the growth of the child — in academics as well as moral values. Our aim is to transform young children into achievers in any field of their choice: academics, sports, arts, and beyond.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We want to impart education through which character is formed, the strength of the mind is increased, the intellect expands, and the student can stand confidently on their own feet. Each child has the potential to achieve excellence, and we are committed to being facilitators in that journey.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-primary/5 border-2 border-accent/30 flex flex-col items-center justify-center text-center p-8 shadow-inner">
                <p className="font-serif text-4xl font-bold text-primary mb-2">Grow</p>
                <p className="text-accent text-lg font-medium">to</p>
                <p className="font-serif text-4xl font-bold text-secondary">Glow</p>
                <p className="text-xs text-muted-foreground mt-3 uppercase tracking-wider">DEW Vision</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 bg-muted/40">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Our Mission</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8">
            What We Are Called to Do
          </h2>
          <div className="bg-white border border-border rounded-2xl p-10 shadow-sm">
            <p className="text-xl text-foreground/80 leading-relaxed font-serif italic">
              "To raise students who excel academically, morally, socially, and physically, while developing strong character, discipline, leadership, and the ability to positively impact society."
            </p>
          </div>
          <div className="mt-10 grid sm:grid-cols-3 gap-6 text-left">
            <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
              <div className="text-secondary font-bold text-2xl mb-2 font-serif">Academic</div>
              <p className="text-muted-foreground text-sm">Excellence in scholarship, critical thinking, and intellectual development.</p>
            </div>
            <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
              <div className="text-secondary font-bold text-2xl mb-2 font-serif">Moral</div>
              <p className="text-muted-foreground text-sm">Strong character, integrity, and value-based living at the core of every student.</p>
            </div>
            <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
              <div className="text-secondary font-bold text-2xl mb-2 font-serif">Holistic</div>
              <p className="text-muted-foreground text-sm">Social, physical, creative, and spiritual growth alongside academic excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Core Values</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              These values are not just words on a wall — they are the principles that shape how we teach, relate, and grow.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white border border-border rounded-xl p-7 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">{i + 1}</span>
                </div>
                <h3 className="font-serif font-bold text-xl text-primary mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
