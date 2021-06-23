import { Story, Meta } from '@storybook/react/types-6-0';
import Frame from './Frame';

export default {
  title: 'templates/Frame',
  component: Frame,
} as Meta;

const Template: Story = () => (
  <Frame>
    <h1>test</h1>
  </Frame>
);

export const Default = Template.bind({});
