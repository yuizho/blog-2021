import { Story, Meta } from '@storybook/react/types-6-0';
import Footer from './Footer';

export default {
  title: 'organisms/Footer',
  component: Footer,
} as Meta;

const Template: Story = () => <Footer />;

export const Default = Template.bind({});
