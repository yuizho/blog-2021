import { Story, Meta } from '@storybook/react/types-6-0';
import Article from './Article';

export default {
  title: 'organisms/Article',
  component: Article,
} as Meta;

const Template: Story = () => (
  <Article title="title" body="<hr><p>test content!!!</p>" />
);

export const Default = Template.bind({});
