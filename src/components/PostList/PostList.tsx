// import axios from 'axios';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectPost } from '../../feature/post/postSlice';
import { PostItem } from '../PostItem';
import { IPost } from '../types/typex';
import Styled from './PostList.styles';

const PostList: FC = () => {
  // Получение постов с сервера:
  //-----------------------------------------------------------
  // const [posts, setPosts] = useState<IPost[]>([]);

  // useEffect(() => {
  //   getPostsFromServer();
  // }, []);

  // async function getPostsFromServer() {
  //   const response = await axios.get<IPost[]>(
  //     'https://jsonplaceholder.typicode.com/posts'
  //   );
  //   setPosts(response.data);
  // }
  //------------------------------------------------------------

  const postSelector = useSelector(selectPost);

  const { posts } = postSelector;

  return (
    <Styled.Container>
      <Styled.Wrapper>
        {posts.map((post: IPost, index: number) => (
          <PostItem post={post} key={post.id} number={index + 1} />
        ))}
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default PostList;
