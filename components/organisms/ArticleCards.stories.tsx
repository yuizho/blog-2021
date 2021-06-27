import { Story, Meta } from '@storybook/react/types-6-0';
import ArticleCards from './ArticleCards';
import image from '../../public/vercel.svg';

export default {
  title: 'organisms/ArticleCards',
  component: ArticleCards,
} as Meta;

const Template: Story = () => (
  <ArticleCards
    articles={[
      {
        id: '1',
        title: 'title1',
        url: '/articles/1',
        publishedAt: new Date('2021-06-02'),
        thumbnail: image.toString(),
        summary: 'hoge',
        tags: ['tag'],
      },
      {
        id: '2',
        title: 'title2',
        url: '/articles/2',
        publishedAt: new Date('2021-06-02'),
        thumbnail: '',
        summary: '',
        tags: [],
      },
    ]}
  />
);

export const Default = Template.bind({});
