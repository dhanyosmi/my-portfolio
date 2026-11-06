'use client';

import ProofLink from './ProofLink';
import Section from './Section';

function Para({ children }: { children: React.ReactNode }) {
  return <p className="text-[var(--th-body)] text-base leading-relaxed max-w-detail">{children}</p>;
}

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2 max-w-detail">
      {items.map((t, i) => (
        <li key={i} className="text-[var(--th-body)] text-base leading-relaxed flex items-start gap-2.5">
          <span className="text-[var(--th-faint)] mt-[3px] flex-shrink-0 text-lg leading-none">•</span>
          <span className="flex-1">{t}</span>
        </li>
      ))}
    </ul>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 border border-[var(--th-line)] rounded-full text-[var(--th-muted)] text-xs">
      {children}
    </span>
  );
}

function DetailEntry({
  id,
  title,
  subtitle,
  date,
  badge,
  proofs,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  badge?: string;
  proofs?: { label: string; href: string }[];
  children?: React.ReactNode;
}) {
  return (
    <div id={id} className="py-8 border-b border-[var(--th-line)] last:border-0">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
        <h4 className="text-lg font-semibold text-[var(--th-ink)]">{title}</h4>
        <span className="text-sm text-[var(--th-faint)] whitespace-nowrap">{date}</span>
      </div>

      {subtitle && <p className="text-[var(--th-muted)] text-base mb-3 max-w-detail">{subtitle}</p>}

      {badge && (
        <span className="inline-block mb-3 px-2.5 py-1 rounded-full border border-[var(--th-ink)] text-[var(--th-ink)] text-xs font-bold uppercase tracking-wide">
          {badge}
        </span>
      )}

      {proofs && proofs.length > 0 && (
        <div className="flex flex-wrap gap-2 -ml-2 mb-4">
          {proofs.map((p) => (
            <ProofLink key={p.label} href={p.href}>
              {p.label}
            </ProofLink>
          ))}
        </div>
      )}

      {children && <div className="space-y-3">{children}</div>}
    </div>
  );
}

export default function HackathonDetails() {
  return (
    <Section id="hackathon-details" title="Hackathons — Full Details">
          <DetailEntry
            id="detail-swarm-escrow"
            title="Swarm Escrow"
            subtitle="AI Agent Escrow on BOT Chain — where agents align on every deliverable."
            date="Jul 2026"
            badge="Won #3 — BOT Chain Builder Challenge #1"
            proofs={[
              { label: 'Live App', href: 'https://swarm-escrow.vercel.app/' },
              { label: 'Repo', href: 'https://github.com/dhanyosmi/Swarm-Escrow-' },
              { label: 'Project X', href: 'https://x.com/SwarmEscrow' },
              { label: 'Demo Video', href: 'https://youtu.be/iULTOmTc1dA' },
              { label: 'Build Journey Thread', href: 'https://x.com/i/status/2074696729279201617' },
            ]}
          >
            <Para>
              A freelance/marketplace escrow contract where three independent AI agents vote 2-of-3
              on whether a submitted deliverable meets its spec, before funds are released or
              refunded — every verdict hashed on-chain for a tamper-evident, portable proof of work.
              Solo build.
            </Para>
            <Bullets
              items={[
                'Multi-agent 2-of-3 quorum (Reviewer, FraudSanity, Arbiter) reviews each deliverable — no single AI verdict can move funds',
                'Disputed cases escalate to a 4th, human-configurable Senior Arbiter with a fixed challenge window',
                '83/83 Foundry tests passing (72 unit, 9 fuzz, 2 invariant), Slither clean',
                'Deployed live on both BOT Chain testnet and mainnet, with a fully wired frontend — no mock data',
                '⚠️ No third-party security audit was performed before mainnet deployment (disclosed in the writeup)',
              ]}
            />
            <div className="flex flex-wrap gap-2 pt-1">
              {['AI Agents', 'Solidity', 'Foundry', 'Next.js', 'Escrow', 'On-chain'].map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </DetailEntry>

          <DetailEntry
            id="detail-aixpo"
            title="Smart Road Damage Detection System"
            subtitle="Aixpo · College Hackathon · with Lokesh Kumar Singh"
            date="March 2026"
            badge="Won #1"
          >
            <Para>
              AI-powered road damage detection and repair-priority planning using YOLOv8, built to
              help municipalities triage India&apos;s 6.3M km road network instead of relying on slow,
              manual inspection.
            </Para>
            <Bullets
              items={[
                'YOLOv8 model fine-tuned on 47,000+ real road images (RDD2022 dataset) detects potholes, cracks, and surface damage from a single uploaded photo',
                'Computes severity, repair priority, and estimated repair cost per detection, with an interactive Folium map and downloadable CSV report',
                'Weighted priority score (60% severity, 25% traffic impact, 15% simulated safety risk) sorts repairs by urgency',
                '3-tier model fallback strategy (fine-tuned model → generic YOLOv8n → OpenCV mock detection) so the app degrades gracefully instead of failing',
              ]}
            />
            <div className="flex flex-wrap gap-2 pt-1">
              {['YOLOv8', 'Streamlit', 'OpenCV', 'Folium', 'Pandas'].map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </DetailEntry>

          <DetailEntry
            id="detail-wallet-spy"
            title="Wallet Spy"
            subtitle="Solana Privacy Hack · Solo entry"
            date="Jan 2026"
            proofs={[
              { label: 'Live Demo', href: 'https://solana-hackathon-one.vercel.app/' },
              { label: 'GitHub', href: 'https://github.com/dhanyosmi/solana-hackathon?tab=readme-ov-file' },
              { label: 'Demo Video', href: 'https://www.youtube.com/watch?v=QaZ58nyLoy0' },
              { label: 'PPT Video', href: 'https://www.youtube.com/watch?v=sc2ds5biT8k' },
            ]}
          >
            <Para>A privacy-focused wallet surveillance tool built on Solana.</Para>
            <Bullets
              items={[
                'Privacy-focused wallet analysis on Solana',
                'Real-time wallet activity monitoring',
                'Solo hackathon project',
              ]}
            />
            <div className="flex flex-wrap gap-2 pt-1">
              {['Solana', 'Privacy', 'Web3', 'Hackathon'].map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </DetailEntry>

          <DetailEntry
            id="detail-invoice-nft"
            title="My Invoice NFT — Full-Stack DApp"
            subtitle="FutureStack GenAI Hackathon · Solo entry"
            date="Sept 2025"
            proofs={[
              { label: 'Live Demo', href: 'https://ai-on-chain-invoice.vercel.app/' },
              { label: 'GitHub', href: 'https://github.com/dhanyosmi/AI-on-chain-Invoice' },
              { label: 'Demo Video', href: 'https://www.youtube.com/watch?v=uZyOd4QUZdE&feature=youtu.be' },
              { label: 'Certificate', href: 'https://drive.google.com/file/d/1Ev1UXbrkqr-Sh5w_6n6_zERgSMFp00qq/view?pli=1' },
            ]}
          >
            <Para>
              A full-stack decentralized application with an intuitive UI for NFT-based invoice
              management. Smart contracts written independently with comprehensive testing;
              frontend built with AI assistance.
            </Para>
            <Bullets
              items={[
                'Full-stack decentralized application with intuitive UI',
                'Smart contracts written independently with comprehensive testing',
                'Frontend created using AI assistance (entire frontend)',
                'Gas-optimized smart contracts',
                'NFT-based invoice management system',
              ]}
            />
            <div className="flex flex-wrap gap-2 pt-1">
              {['Solidity', 'Foundry', 'AI-Assisted', 'IPFS', 'Full-Stack'].map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </DetailEntry>
    </Section>
  );
}
