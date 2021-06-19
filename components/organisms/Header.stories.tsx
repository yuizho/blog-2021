import { Story, Meta } from '@storybook/react/types-6-0';
import Header from './Header';

export default {
  title: 'organisms/Header',
  component: Header,
} as Meta;

const Template: Story = () => <Header />;

export const Default = Template.bind({});
