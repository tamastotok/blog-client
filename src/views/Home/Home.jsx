import { Link } from 'react-router-dom';
import { album } from '../../utils/constants/images';
import * as S from './Home.styles';

export default function Home() {
  return (
    <>
      <S.Welcome_Section>
        <img
          loading="lazy"
          src={album.palm_leaf.src}
          alt={album.palm_leaf.alt}
        />

        <img
          loading="lazy"
          src={album.woman_portrait.src}
          alt={album.woman_portrait.alt}
        />

        <S.Welcome_Text_Content>
          <h2>Hi</h2>
          <p>
            I am a traveling lifestyle blogger and fashion photographer. I love
            to capture moments that become treasured memories.
          </p>
          <Link to="/contact">Let's work together</Link>
        </S.Welcome_Text_Content>
      </S.Welcome_Section>

      <S.Main_Wrapper>
        <S.About_Section>
          <img src={album.pen.src} alt={album.pen.alt} />

          <S.About_Text>
            <h2>About</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
              tempora deleniti numquam voluptas pariatur?
            </p>
            {<Link to="/about">More about me</Link>}
          </S.About_Text>
        </S.About_Section>

        <S.Photos_Section>
          <div>
            <img src={album.street.src} alt={album.street.alt} />
          </div>
          <S.Photos_Text>
            <h2>Photos</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
              tempora deleniti numquam voluptas pariatur?
            </p>

            <Link to="/photos">Gallery</Link>
          </S.Photos_Text>
        </S.Photos_Section>
      </S.Main_Wrapper>

      <S.Blog_Section>
        <S.Blog_Header>
          <h2>Favorite posts</h2>
          <Link to="/blog">View all blogpost</Link>
        </S.Blog_Header>

        <S.Blog_Wrapper>
          <S.Blog_Content>
            <img src={album.woman_in_pool.src} alt={album.woman_in_pool.alt} />

            <p>Travel</p>
            <Link to="/">
              The best ways to enjoy the last summer days of the year
            </Link>
          </S.Blog_Content>
          <S.Blog_Content>
            <img src={album.marble_table.src} alt={album.marble_table.alt} />

            <p>Lifestyle</p>
            <Link to="/">
              5 hip restaurants in California that I love for a dinner date
            </Link>
          </S.Blog_Content>
        </S.Blog_Wrapper>
      </S.Blog_Section>
    </>
  );
}
