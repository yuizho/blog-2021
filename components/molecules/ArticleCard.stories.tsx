import { Story, Meta } from '@storybook/react/types-6-0';
import ArticleCard from './ArticleCard';

export default {
  title: 'molecules/ArticleCard',
  component: ArticleCard,
} as Meta;

const Template: Story = () => (
  <ArticleCard id={'1'} title="これは仮のタイトルです" url="/articles/1" />
);

export const Default = Template.bind({});
