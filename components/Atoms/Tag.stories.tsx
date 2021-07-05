import { Story, Meta } from '@storybook/react/types-6-0';
import Tag from './Tag';

export default {
  title: 'atom/Tag',
  component: Tag,
} as Meta;

const Template: Story = () => <Tag tag="tag!" />;

export const Default = Template.bind({});
