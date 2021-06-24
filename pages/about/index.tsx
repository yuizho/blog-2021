import Head from 'next/head';
import React, { FC } from 'react';
import Frame from '../../components/templates/Frame';
import About from '../../components/organisms/About';
import thumbnail from '../../public/yuizho.webp';

const AboutPage: FC = () => (
  <>
    <Head>
      <title>blog</title>
    </Head>

    <Frame>
      <About
        thumbnail={thumbnail}
        summary="プログラマーをしています。ラーメンが好きで、東京ヤクルトスワローズのファンです。色々ありフランス語を勉強していましたが、最近サボっています。"
        links={[
          { name: 'Twitter', url: 'https://twitter.com/yuizho' },
          { name: 'GitHub', url: 'https://github.com/yuizho' },
          { name: 'Scrapbox', url: 'https://scrapbox.io/yuizho-tech' },
          { name: 'Qiita', url: 'https://qiita.com/yuizho' },
          { name: 'SlideShare', url: 'https://www.slideshare.net/yuiito94' },
        ]}
      />
    </Frame>
  </>
);

export default AboutPage;
