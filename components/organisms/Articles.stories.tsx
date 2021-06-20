import { Story, Meta } from '@storybook/react/types-6-0';
import Articles from './Articles';

export default {
  title: 'organisms/Articles',
  component: Articles,
} as Meta;

const Template: Story = () => (
  <Articles
    articles={[
      { id: 1, title: 'title1', url: '/articles/1' },
      { id: 2, title: 'title2', url: '/articles/2' },
    ]}
  />
);

export const Default = Template.bind({});
