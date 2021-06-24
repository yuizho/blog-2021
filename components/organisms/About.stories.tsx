import { Story, Meta } from '@storybook/react/types-6-0';
import thumbnail from '../../public/yuizho.webp';
import About from './About';

export default {
  title: 'organisms/About',
  component: About,
} as Meta;

const Template: Story = () => (
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
);

export const Default = Template.bind({});
