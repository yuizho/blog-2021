import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../molecules/Container';
import styles from './About.module.css';

export type ExternalLinks = {
  name: string;
  url: string;
};

type Props = {
  thumbnail: StaticImageData;
  summary: string;
  links: Array<ExternalLinks>;
};

const About: FC<Props> = ({ thumbnail, summary, links }: Props) => (
  <>
    <Container>
      <div className={styles.content}>
        <h1 className="text-gray-600 text-xl  font-semibold text-l tracking-tight">
          About
        </h1>
        <div className="text-center">
          <Image
            className="rounded-xl"
            width="240"
            height="240"
            src={thumbnail}
            alt="a thumbnail"
          />
        </div>
        <p className="text-gray-600">{summary}</p>

        <h1 className="utext-gray-600 text-xl  font-semibold text-l tracking-tight">
          Links
        </h1>
        <ul>
          {links.map((link) => (
            <li>
              <Link href={link.url}>
                <a className="text-gray-700 hover:underline">{link.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </>
);

export default About;
