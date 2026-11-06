'use client';

import ProofLink from './ProofLink';
import Section from './Section';

// Newest first, matching the Experience table.
const experience = [
  {
    id: 'detail-c3ihub',
    type: 'Onsite' as const,
    title: "Blockchain Developer",
    company: "C3iHub, IIT Kanpur",
    period: "Sep 2026 – Present",
    achievements: [
      {
        text: "Working onsite as a Blockchain Developer at C3iHub, IIT Kanpur",
        linkText: null,
        link: null
      }
    ],
    tags: ["Blockchain", "Hyperledger Fabric"]
  },
  {
    id: 'detail-defilords',
    type: 'Remote' as const,
    title: "Blockchain Engineer",
    company: "Defilords",
    period: "June 2026 – Sep 2026",
    achievements: [
      {
        text: "Re-architected the entire LP vault system",
        linkText: null,
        link: null
      },
      {
        text: "Built the AI-assisted frontend and backend",
        linkText: null,
        link: null
      }
    ],
    tags: ["Solidity", "LP Vault", "DeFi", "AI", "Full-stack"]
  },
  {
    id: 'detail-iccc-intern',
    type: 'Onsite' as const,
    title: "ICCC Intern",
    company: "Patna Smart City Limited, Patna, Bihar",
    period: "December 2025",
    achievements: [
      {
        text: "Trained at the Integrated Command & Control Center (ICCC) on urban IoT infrastructure — environmental sensors, RLVD & smart cameras, outdoor LED/VMD systems",
        linkText: null,
        link: null
      },
      {
        text: "Studied Integrated Solid Waste Management (ISWM) and IIT Delhi Pump Automation for smart city operations",
        linkText: null,
        link: null
      },
      {
        text: "Trained on CDCP (Certified Data Center Professional) standards with an L&T Technology expert",
        linkText: null,
        link: null
      },
      {
        text: "Hands-on exposure to SCADA systems, GIS mapping, and IoT sensor networks",
        linkText: null,
        link: null
      }
    ],
    certificate: "View Certificate",
    certificateLink: "https://drive.google.com/file/d/1Iwv9MM4WZ7VPafFBwjKsoTfumDYisYW8/view?usp=drivesdk",
    tags: ["IoT", "SCADA", "GIS", "Smart City"]
  },
  {
    id: 'detail-bima-labs',
    type: 'Remote' as const,
    title: "Smart Contract Developer",
    company: "Digichain (Bima Labs — DeFi Protocol)",
    period: "Aug 2024 – Aug 2025",
    achievements: [
      {
        text: "Implemented UUPS upgradable smart contracts using Succinct Protocol for on-chain ZKP verification",
        linkText: "View Code",
        link: "https://github.com/dhanyosmi/ZKP-Verification-Upgradable-Smart-Contract-"
      },
      {
        text: "Configured LayerZero v2 messaging and DVN with Foundry scripts for cross-chain debugging",
        linkText: "View Scripts",
        link: "https://github.com/dhanyosmi/Debugging-Testing-Scripts-Bima/tree/master/LayerZero"
      },
      {
        text: "Integrated Chainlink CCIP for lock/unlock mechanism in cross-chain USBD transfers",
        linkText: "View Guide",
        link: "https://github.com/dhanyosmi/Chainlink-CCIP-Guide-Lock-Unlock"
      },
      {
        text: "Developed PSM core logic with >95% code coverage using unit and fuzz tests in Foundry",
        linkText: "View PR",
        link: "https://github.com/Bima-Labs/bima-v1-core/pull/130/commits"
      },
      {
        text: "Optimized Hardhat deployment scripts with automated contract verification",
        linkText: "View Commit",
        link: "https://github.com/Bima-Labs/bima-v1-core/pull/132/commits/f400e50615b502deb075a81439825891c479fddf"
      },
      {
        text: "Deployed to 20+ blockchain networks and managed oracle/price-feed integrations",
        linkText: "View Scripts",
        link: "https://github.com/dhanyosmi/Debugging-Testing-Scripts-Bima"
      }
    ],
    tags: ["Solidity", "Foundry", "LayerZero", "Chainlink CCIP", "UUPS", "ZKP", "DeFi"]
  },
  {
    id: 'detail-one-world-nation',
    type: 'Remote' as const,
    title: "Chart Analyst & Moderator",
    company: "One World Nation",
    period: "Oct 2022 – Aug 2023",
    achievements: [
      {
        text: "Ran live crypto chart reading sessions, beginner to advanced, for 5000+ community members",
        linkText: null,
        link: null
      },
      {
        text: "Grew community engagement by 33% through technical analysis insights",
        linkText: null,
        link: null
      },
      {
        text: "Improved response time by 25% through moderation and user support",
        linkText: null,
        link: null
      }
    ],
    certificate: "View Certificate",
    certificateLink: "https://drive.google.com/file/d/1-MPUFw6vHKACoPtvHEMovW9j03ruyWJK/view?usp=sharing",
    tags: ["Trading", "Technical Analysis", "Community"]
  }
];

type ExpEntry = {
  id: string;
  type: 'Remote' | 'Onsite';
  title: string;
  company: string;
  period: string;
  achievements: { text: string; linkText: string | null; link: string | null }[];
  tags: string[];
  certificate?: string;
  certificateLink?: string;
};

function ExperienceEntry({ exp }: { exp: ExpEntry }) {
  return (
    <div id={exp.id} className="py-8 border-b border-[var(--th-line)] last:border-0">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
        <h4 className="text-lg font-semibold text-[var(--th-ink)]">
          {exp.title} <span className="font-normal text-[var(--th-muted)]">— {exp.company}</span>
        </h4>
        <span className="flex items-center gap-2.5 text-sm text-[var(--th-faint)] whitespace-nowrap">
          <span
            className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${
              exp.type === 'Onsite'
                ? 'border-[var(--th-ink)] text-[var(--th-ink)]'
                : 'border-[var(--th-line)] text-[var(--th-muted)]'
            }`}
          >
            {exp.type}
          </span>
          {exp.period}
        </span>
      </div>

      <ul className="space-y-3 mb-4 max-w-detail">
        {exp.achievements.map((achievement, i) => (
          <li key={i} className="text-[var(--th-body)] text-base leading-relaxed flex items-start gap-2.5">
            <span className="text-[var(--th-faint)] mt-[3px] flex-shrink-0 text-lg leading-none">•</span>
            <span className="flex-1">
              {achievement.text}
              {achievement.link && <ProofLink href={achievement.link}>{achievement.linkText}</ProofLink>}
            </span>
          </li>
        ))}
      </ul>

      {exp.certificate && (
        <div className="mb-4">
          <ProofLink href={exp.certificateLink || '#'}>{exp.certificate}</ProofLink>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {exp.tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 border border-[var(--th-line)] rounded-full text-[var(--th-muted)] text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ExperienceDetails() {
  return (
    <Section id="experience-details" title="Experience — Full Details">
      <div className="border-t-2 border-[var(--th-ink)]">
        {experience.map((exp) => (
          <ExperienceEntry key={exp.id} exp={exp} />
        ))}
      </div>
    </Section>
  );
}
