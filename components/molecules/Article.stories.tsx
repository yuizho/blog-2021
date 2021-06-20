import { Story, Meta } from '@storybook/react/types-6-0';
import Article from './Article';

export default {
  title: 'molecules/Article',
  component: Article,
} as Meta;

const Template: Story = () => (
  <Article id={1} title="title1" url="/articles/1" />
);

export const Default = Template.bind({});
