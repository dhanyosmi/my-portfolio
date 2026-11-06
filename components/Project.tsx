'use client';

import Section, { plural } from './Section';
import { thClass, tdClass, tdWrapClass, linkClass, tableClass, rowClass } from './tableStyles';

type Row = {
  id: string;
  project: string;
  projectLink: string | null;
  category: string;
  stack: string;
  detailId: string;
};

const rows: Row[] = [
  {
    id: 'talon',
    project: 'Talon',
    projectLink: 'https://talon-cleanverse-hackathon.vercel.app',
    category: 'RWA Protocol',
    stack: 'Solidity, Foundry, Next.js, Supabase',
    detailId: 'detail-talon',
  },
  {
    id: 'prompt-arena',
    project: 'Prompt Arena',
    projectLink: 'https://prompt-arena1.vercel.app/',
    category: 'Full-Stack Platform',
    stack: 'Next.js, Supabase, Gemini/Claude API',
    detailId: 'detail-prompt-arena',
  },
  {
    id: 'stablecoin',
    project: 'Decentralized Stablecoin',
    projectLink: 'https://github.com/dhanyosmi/Decentralized-Stable-Coin/tree/master',
    category: 'Smart Contract',
    stack: 'Solidity, Foundry, Chainlink',
    detailId: 'detail-stablecoin',
  },
  {
    id: 'raffle',
    project: 'Smart Contract Raffle',
    projectLink: 'https://github.com/dhanyosmi/Raffle_Smart_Contract-Foundry-',
    category: 'Smart Contract',
    stack: 'Solidity, Chainlink VRF, Foundry',
    detailId: 'detail-raffle',
  },
];

export default function Project() {
  return (
    <Section id="projects" title="Projects" meta={plural(rows.length, 'project')}>
      <div className="overflow-x-auto">
        <table className={`${tableClass} min-w-[680px]`}>
          <colgroup>
            <col className="w-[4%]" />
            <col className="w-[24%]" />
            <col className="w-[20%]" />
            <col className="w-[36%]" />
            <col className="w-[16%]" />
          </colgroup>
          <thead>
            <tr>
              <th className={thClass}>#</th>
              <th className={thClass}>Project</th>
              <th className={thClass}>Category</th>
              <th className={thClass}>Stack</th>
              <th className={thClass}>More Info</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.id} className={rowClass}>
                <td className={tdClass}>{i + 1}</td>
                <td className={tdWrapClass} data-label="Project">
                  {row.projectLink ? (
                    <a href={row.projectLink} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {row.project}
                    </a>
                  ) : (
                    row.project
                  )}
                </td>
                <td className={tdWrapClass} data-label="Category">{row.category}</td>
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
    </Section>
  );
}
