import { posts } from '@/utils/data';
import { Posts } from './Posts';

export const PostData = () => {
  return (
    <div>
      {posts.map((post) => {
        return <Posts name={post.author.name} />;
      })}
    </div>
  );
};
