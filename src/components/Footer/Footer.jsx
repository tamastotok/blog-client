import React from "react";
import { Link } from "react-router-dom";
import { album } from "../../utils/constants/images";
import * as S from "./Footer.styles";

function Footer() {
  return (
    <section>
      <S.Container>
        <S.TextContent>
          <h1>the list</h1>
          <h2>Don't miss a thing</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            consequuntur optio numquam? Cumque, fugit magni. Repellat similique
            iste beatae quasi.
          </p>
          <Link to="/contact">Sign me up!</Link>
        </S.TextContent>

        <S.Center />

        <S.Images>
          <img
            src={album.woman_in_sunglasses.src}
            alt={album.woman_in_sunglasses.alt}
          />
          <img src={album.watch.src} alt={album.watch.alt} />
          <img src={album.woman_portrait.src} alt={album.woman_portrait.alt} />
          <img src={album.pen.src} alt={album.pen.alt} />
        </S.Images>
      </S.Container>

      <S.Bottom />
    </section>
  );
}

export default Footer;