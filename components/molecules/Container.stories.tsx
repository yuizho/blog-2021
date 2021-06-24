import { Story, Meta } from '@storybook/react/types-6-0';
import image from '../../public/vercel.svg';
import Container from './Container';

export default {
  title: 'molecules/Container',
  component: Container,
} as Meta;

const Template: Story = () => (
  <Container>
    <h1>タイトル</h1>
    <hr />
    <p>これが本文</p>
  </Container>
);

export const Default = Template.bind({});
