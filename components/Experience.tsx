'use client';

import Section, { plural } from './Section';
import { thClass, tdClass, tdWrapClass, linkClass, tableClass, rowClass } from './tableStyles';

type WorkType = 'Remote' | 'Onsite';

type Row = {
  id: string;
  type: WorkType;
  period: string;
  company: string;
  companyLink: string;
  role: string;
  stack: string;
  detailId: string;
};

// Newest first. `type` drives the Remote/Onsite tag in the table.
const rows: Row[] = [
  {
    id: 'c3ihub',
    period: 'Sep 2026 – Present',
    type: 'Onsite',
    company: 'C3iHub, IIT Kanpur',
    companyLink: 'https://c3ihub.iitk.ac.in/',
    role: 'Blockchain Developer',
    stack: 'Blockchain, Hyperledger Fabric',
    detailId: 'detail-c3ihub',
  },
  {
    id: 'defilords',
    period: 'Jun 2026 – Sep 2026',
    type: 'Remote',
    company: 'Defilords',
    companyLink: 'https://defilords.finance/',
    role: 'Blockchain Engineer',
    stack: 'Solidity, LP Vaults, Full-stack',
    detailId: 'detail-defilords',
  },
  {
    id: 'iccc-intern',
    period: 'December 2025',
    type: 'Onsite',
    company: 'Smart City Patna Limited',
    companyLink: 'https://www.smartpatna.co.in/home.aspx',
    role: 'ICCC Intern',
    stack: 'IoT, SCADA, GIS',
    detailId: 'detail-iccc-intern',
  },
  {
    id: 'bima-labs',
    period: 'Aug 2024 – Aug 2025',
    type: 'Remote',
    company: 'Bima Labs',
    companyLink: 'https://bima.money/',
    role: 'Smart Contract Developer',
    stack: 'Solidity, Foundry, LayerZero, Chainlink CCIP',
    detailId: 'detail-bima-labs',
  },
  {
    id: 'one-world-nation',
    period: 'Oct 2022 – Aug 2023',
    type: 'Remote',
    company: 'One World Nation',
    companyLink: 'https://www.linkedin.com/company/oneworldnation/?originalSubdomain=in',
    role: 'Chart Analyst & Moderator',
    stack: 'Trading, Technical Analysis, Community',
    detailId: 'detail-one-world-nation',
  },
];

function ExperienceTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-x-auto">
      <table className={`${tableClass} min-w-[820px]`}>
        <colgroup>
          <col className="w-[4%]" />
          <col className="w-[14%]" />
          <col className="w-[17%]" />
          <col className="w-[10%]" />
          <col className="w-[17%]" />
          <col className="w-[24%]" />
          <col className="w-[14%]" />
        </colgroup>
        <thead>
          <tr>
            <th className={thClass}>#</th>
            <th className={thClass}>Period</th>
            <th className={thClass}>Company</th>
            <th className={thClass}>Type</th>
            <th className={thClass}>Role</th>
            <th className={thClass}>Stack</th>
            <th className={thClass}>More Info</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.id} className={rowClass}>
              <td className={tdClass}>{i + 1}</td>
              <td className={tdWrapClass} data-label="Period">{row.period}</td>
              <td className={tdWrapClass} data-label="Company">
                <a href={row.companyLink} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {row.company}
                </a>
              </td>
              <td className={tdClass} data-label="Type">
                <TypeTag type={row.type} />
              </td>
              <td className={tdWrapClass} data-label="Role">{row.role}</td>
              <td className={tdWrapClass} data-label="Stack">{row.stack}</td>
              <td className={tdClass} data-label="More Info">
                <a href={`#${row.detailId}`} className={linkClass}>
                  More Info
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TypeTag({ type }: { type: WorkType }) {
  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium border ${
        type === 'Onsite'
          ? 'border-[var(--th-ink)] text-[var(--th-ink)]'
          : 'border-[var(--th-line)] text-[var(--th-muted)]'
      }`}
    >
      {type}
    </span>
  );
}

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      meta={plural(rows.length, 'role')}
    >
      <ExperienceTable rows={rows} />
    </Section>
  );
}
