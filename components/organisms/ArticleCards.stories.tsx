import { Story, Meta } from '@storybook/react/types-6-0';
import ArticleCards from './ArticleCards';

export default {
  title: 'organisms/ArticleCards',
  component: ArticleCards,
} as Meta;

const Template: Story = () => (
  <ArticleCards
    articles={[
      { id: 1, title: 'title1', url: '/articles/1' },
      { id: 2, title: 'title2', url: '/articles/2' },
    ]}
  />
);

export const Default = Template.bind({});
