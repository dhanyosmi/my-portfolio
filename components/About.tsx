'use client';

import Section from './Section';

export default function About() {
  return (
    <Section id="about" title="About" width="measure" className="pt-2 pb-14">
      <div className="space-y-4 text-base leading-relaxed text-[var(--th-body)]">
        <p>
          Web3 security researcher and trader. Currently working as a Blockchain Developer at
          C3iHub, IIT Kanpur. Previously a Blockchain Engineer at Defilords, re-architecting the
          LP vault, and a smart contract developer at Bima Labs, building and breaking DeFi
          protocols.
        </p>
        <p>
          Crypto trader for over a year. Earlier, ran chart reading sessions from beginner to
          advanced and worked as a moderator at One World Nation.
        </p>
        <p>
          Speaker at Rotaract Club of Pune Wisdom, sharing sessions on blockchain and Web3.
        </p>
      </div>
    </Section>
  );
}
