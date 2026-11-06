'use client';

import ProofLink from './ProofLink';
import Section, { plural } from './Section';
import { thClass, tdClass, tdWrapClass, tableClass, rowClass } from './tableStyles';

type Row = {
  id: string;
  title: string;
  link: string;
  platform: string;
  topics: string;
};

const rows: Row[] = [
  {
    id: 'evm-works',
    title: 'How EVM Works',
    link: 'https://dev.to/dhanyosmi/understanding-evmethereum-virtual-machine-2dh7',
    platform: 'Dev.to',
    topics: 'EVM, Blockchain Internals',
  },
  {
    id: 'first-hackathon',
    title: 'My First Hackathon',
    link: 'https://medium.com/@dhanyosmiblog/my-first-hackathon-eb52a5e6a2f6',
    platform: 'Medium',
    topics: 'Experience, Learning',
  },
  {
    id: 'trade-without-knowing',
    title: "You Can't Trade Without Knowing This",
    link: 'https://medium.com/@dhanyosmiblog/you-cant-trade-without-knowing-this-fab251d97983',
    platform: 'Medium',
    topics: 'Trading, Technical Analysis',
  },
  {
    id: 'chainlink-ccip',
    title: 'Chainlink CCIP Implementation',
    link: 'https://github.com/dhanyosmi/Chainlink-CCIP-Guide-Lock-Unlock',
    platform: 'GitHub',
    topics: 'Cross-Chain, Chainlink',
  },
];

export default function BlogPosts() {
  return (
    <Section id="blog" title="Blog" meta={plural(rows.length, 'post')}>
      <div className="overflow-x-auto">
        <table className={`${tableClass} min-w-[720px]`}>
          <colgroup>
            <col className="w-[4%]" />
            <col className="w-[36%]" />
            <col className="w-[16%]" />
            <col className="w-[30%]" />
            <col className="w-[14%]" />
          </colgroup>
          <thead>
            <tr>
              <th className={thClass}>#</th>
              <th className={thClass}>Title</th>
              <th className={thClass}>Platform</th>
              <th className={thClass}>Topics</th>
              <th className={thClass}>Read</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.id} className={rowClass}>
                <td className={tdClass}>{i + 1}</td>
                <td className={tdWrapClass} data-label="Title">{row.title}</td>
                <td className={tdClass} data-label="Platform">{row.platform}</td>
                <td className={tdWrapClass} data-label="Topics">{row.topics}</td>
                <td className={tdClass} data-label="Read">
                  <ProofLink href={row.link}>Read</ProofLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
