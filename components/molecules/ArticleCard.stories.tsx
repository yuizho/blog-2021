import { Story, Meta } from '@storybook/react/types-6-0';
import ArticleCard from './ArticleCard';
import image from '../../public/vercel.svg';

export default {
  title: 'molecules/ArticleCard',
  component: ArticleCard,
} as Meta;

const Template: Story = () => (
  <ArticleCard
    id="1"
    title="これは仮のタイトルです"
    url="/articles/1"
    thumbnail={image.toString()}
    publishedAt={new Date('2020-06-01')}
    summary="これはサマリーです。こんな感じで概要とかを書く感じです。折返しもちゃんとされますね。"
    tags={[
      'Java',
      'Python',
      'bbbbbbbbbbbb',
      'Ruby',
      'Haskell',
      'cccccccc',
      'Ocaml',
      'Rust',
      'Go',
      'aaaaaaaaaaa',
    ]}
  />
);

export const Default = Template.bind({});
