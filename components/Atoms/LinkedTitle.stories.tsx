import { Story, Meta } from '@storybook/react/types-6-0';
import LinkedTitle from './LinkedTitle';

export default {
  title: 'atom/LinkedTitle',
  component: LinkedTitle,
} as Meta;

const Template: Story = () => (
  <LinkedTitle href="/" size="lg" text="これはタイトルのテキストです" />
);

export const Default = Template.bind({});
