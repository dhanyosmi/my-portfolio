'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const stats = [
  { value: '2+', label: 'Years experience' },
  { value: '3x', label: 'Hackathon wins' },
  { value: '15+', label: 'Vulnerabilities found' },
  { value: '1', label: 'Private audit' },
  { value: '6+', label: 'Projects shipped' },
];

function useCountUp(target: number, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    let raf: number;

    function step(timestamp: number) {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    }

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return value;
}

function StatNumber({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';
  const count = useCountUp(target);

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="pt-14 pb-4 bg-[var(--th-bg)] transition-colors duration-200">
      <div className="mx-auto w-full max-w-shell px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-measure"
        >
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--th-faint)] mb-4">
            Dhanyosmi
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--th-ink)] tracking-tight leading-tight">
            Web3 Security Researcher &amp; Trader
          </h1>
          <p className="mt-5 text-lg md:text-xl text-[var(--th-body)] leading-relaxed max-w-2xl">
            2+ years building and breaking smart contracts. Blockchain Developer at
            C3iHub, IIT Kanpur, previously at Defilords (where I re-architected the LP
            vault) and Bima Labs. 3x hackathon winner and an active crypto trader.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="/Dhanyosmiresume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 border border-[var(--th-ink)] rounded-full font-medium text-sm text-[var(--th-ink)] hover:bg-[var(--th-fill)] hover:text-[var(--th-on-ink)] transition-colors duration-200"
            >
              View Resume
            </a>
            <a
              href="/Dhanyosmiresume.pdf"
              download
              className="px-6 py-2.5 rounded-full font-medium text-sm bg-[var(--th-fill)] text-[var(--th-on-ink)] hover:bg-[var(--th-fill-hover)] transition-colors duration-200"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-3 sm:grid-cols-5 gap-y-4 mt-10 pt-6 pb-2 border-t-2 border-[var(--th-ink)] border-b border-b-[var(--th-line)]"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="py-2 pr-4">
              <b className="block text-2xl md:text-3xl font-bold text-[var(--th-ink)] leading-tight">
                <StatNumber value={stat.value} />
              </b>
              <span className="block mt-1.5 text-xs uppercase tracking-[0.08em] text-[var(--th-faint)]">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
