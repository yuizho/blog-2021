import { FC } from 'react';
import Tag from '../Atoms/Tag';

type Props = {
  tags: string[];
};

const Tags: FC<Props> = ({ tags }: Props) => (
  <div className="flex flex-wrap">
    {tags.map((tag) => (
      <Tag key={tag} tag={tag} />
    ))}
  </div>
);

export default Tags;
