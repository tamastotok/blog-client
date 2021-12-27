import { Link } from 'react-router-dom';
import { album } from '../../utils/constants/images';
import * as S from './Blog.styles';

export default function Blog({ data }) {
  return (
    <>
      <S.Blog_Text_Section>
        <img
          src={album.woman_in_sunglasses.src}
          alt={album.woman_in_sunglasses.alt}
        />
        <div>
          <h2>The blog</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            delectus magni repellat amet non perspiciatis quam itaque id
            aperiam. Molestias sit expedita impedit nobis voluptatum consectetur
            vel illum. Ducimus, aliquam dolorem. Et nostrum veniam, dolor illo
            mollitia placeat perspiciatis quo!
          </p>
        </div>
      </S.Blog_Text_Section>

      <S.Blog_Posts>
        {data &&
          data.map((post) => {
            return (
              <Link to={`/blog/${post.slug.current}`} key={post.slug.current}>
                <img
                  src={post.mainImage.asset.url}
                  style={{ objectFit: 'cover' }}
                  alt={post.slug.current}
                />
                {post.title}
              </Link>
            );
          })}
      </S.Blog_Posts>
    </>
  );
}
