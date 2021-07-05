import { Story, Meta } from '@storybook/react/types-6-0';
import Tags from './Tags';

export default {
  title: 'molecules/Tags',
  component: Tags,
} as Meta;

const Template: Story = () => <Tags tags={['tag1', 'tag2', 'tag3']} />;

export const Default = Template.bind({});
