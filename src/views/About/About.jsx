import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { album } from '../../utils/constants/images';
import scrollTo from '../../utils/helpers/scrollIntoView';
import * as S from './About.styles';

export default function About() {
  const quoteRef = useRef(!null);

  return (
    <>
      <S.About_Me_Section>
        <div>
          <h2>Hello my name is Lily</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, ad vel? Libero error iusto iure iste ut sequi quia
            sint, molestias autem ipsam. Maiores deserunt dignissimos quia in
            numquam exercitationem.
          </p>
          <Link to="/about#quote" onClick={(e) => scrollTo(e, quoteRef)}>
            Read more
          </Link>
        </div>

        <img src={album.blonde.src} alt={album.blonde.alt} />
      </S.About_Me_Section>

      <S.About_Me_Main>
        <h2 ref={quoteRef}>
          "Sometimes the simplest things are the most profound"
        </h2>

        <img src={album.street.src} alt={album.street.alt} />

        <S.Text_Div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dicta
            iste quam illum consequatur veritatis voluptatum excepturi alias,
            eligendi doloribus dolorum minus, iure hic? Inventore eius iste
            corrupti, recusandae consectetur quos quis pariatur aut dolorum! Ut
            optio mollitia ipsum vitae facilis doloremque earum voluptas quis.
            <br />
            <br />
            Reiciendis maxime iusto sapiente deleniti repellat vel recusandae
            alias nobis nesciunt repudiandae! Libero magnam tempora dicta nisi
            illum non, ipsum velit sapiente magni minima, accusamus sit qui
            tenetur autem minus rerum vel animi dolorem consequatur!
          </p>
          <Link to="/contact">Let's connect</Link>
        </S.Text_Div>
      </S.About_Me_Main>

      <S.Fun_Facts_Section>
        <h2>Fun facts</h2>

        <div>
          <h4>Favorite food</h4>
          <p>You can wake me up for pizza</p>
        </div>

        <div>
          <h4>Secret talent</h4>
          <p>I play guitar and I can sing</p>
        </div>

        <div>
          <h4>Vacation</h4>
          <p>I love the little streets in Italy</p>
        </div>

        <h1>next</h1>
      </S.Fun_Facts_Section>
      {/* ------------------------- */}
    </>
  );
}
