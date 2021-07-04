import { Story, Meta } from '@storybook/react/types-6-0';
import LinkedText from './LinkedText';

export default {
  title: 'atom/LinkedText',
  component: LinkedText,
} as Meta;

const Template: Story = () => (
  <LinkedText href="/" size="md" text="これはリンクのテキストです" />
);

export const Default = Template.bind({});
