import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import sanityClient from '../../client.js';
import Content from '@sanity/block-content-to-react';
import * as S from './SinglePost.styles';

export default function SinglePost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
          title,
          _id,
          slug,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          body,
          "name": author->name,
          "authorImage": author->image
        }`
      )
      .then((res) => setPost(res[0]))
      .catch((err) => console.error(err));
  }, [slug]);

  return (
    <S.Post>
      <Link className="back-button" to="/blog">
        back
      </Link>
      <h1>{post && post.title}</h1>

      <br />
      <br />

      <div>
        <Content
          blocks={post && post.body}
          projectId="1r0x1pwf"
          dataset="production"
        />
      </div>

      <p className="author">{post && post.name}</p>
    </S.Post>
  );
}
