import { Story, Meta } from '@storybook/react/types-6-0';
import Article from './Article';
import image from '../../public/vercel.svg';

export default {
  title: 'organisms/Article',
  component: Article,
} as Meta;

const Template: Story = () => (
  <Article
    title="title"
    body="<p>test content!!!</p><ul><li>aaaa</li><li>bbbb</li></ul>"
    publishedAt="2021-06-02"
    thumbnail={image.toString()}
    tags={['Java', 'test']}
  />
);

export const Default = Template.bind({});
