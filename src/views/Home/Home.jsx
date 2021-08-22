import { Link } from 'react-router-dom';
import { album } from '../../utils/constants/images';
import * as S from './Home.styles';

function Home() {
  return (
    <>
      {/* -------------------- */}
      {/* --- Hero section --- */}
      {/* -------------------- */}
      <S.HeroContainer>
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

        <S.HeroText>
          <h2>Hi</h2>
          <p>
            I am a traveling lifestyle blogger and fashion photographer. I love
            to capture moments that become treasured memories.
          </p>
          <Link to="/contact">Let's work together</Link>
        </S.HeroText>
      </S.HeroContainer>
      {/* -------------------- */}

      {/* -------------------------------- */}
      {/* --- About and Photos section --- */}
      {/* -------------------------------- */}
      <S.Main>
        <S.AboutContainer>
          <img src={album.pen.src} alt={album.pen.alt} />

          <S.AboutText>
            <h2>About</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
              tempora deleniti numquam voluptas pariatur?
            </p>
            {<Link to="/about">More about me</Link>}
          </S.AboutText>
        </S.AboutContainer>

        <S.PhotosContainer>
          <div>
            <img src={album.street.src} alt={album.street.alt} />
          </div>
          <S.PhotosText>
            <h2>Photos</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
              tempora deleniti numquam voluptas pariatur?
            </p>

            <Link to="/photos">Gallery</Link>
          </S.PhotosText>
        </S.PhotosContainer>
      </S.Main>
      {/* -------------------------------- */}

      {/* ------------------ */}
      {/* --- Blog posts --- */}
      {/* ------------------ */}
      <S.BlogContainer>
        <S.BlogHeader>
          <h2>Favorite posts</h2>
          <Link to="/blog">View all blogpost</Link>
        </S.BlogHeader>

        <S.Wrapper>
          <S.BlogContent>
            <img src={album.woman_in_pool.src} alt={album.woman_in_pool.alt} />

            <p>Travel</p>
            <Link to="/">
              The best ways to enjoy the last summer days of the year
            </Link>
          </S.BlogContent>
          <S.BlogContent>
            <img src={album.marble_table.src} alt={album.marble_table.alt} />

            <p>Lifestyle</p>
            <Link to="/">
              5 hip restaurants in California that I love for a dinner date
            </Link>
          </S.BlogContent>
        </S.Wrapper>
      </S.BlogContainer>
      {/* ------------------ */}
    </>
  );
}

export default Home;
