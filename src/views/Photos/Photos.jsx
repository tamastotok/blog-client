import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { album } from '../../utils/constants/images';
import scrollTo from '../../utils/helpers/scrollIntoView';
import * as S from './Photos.styles';

export default function Photos() {
  const time = 0.5;
  const [isLoaded, setIsLoaded] = useState(false);
  const [size, setSize] = useState(0);
  const [counter, setCounter] = useState(1);
  const [carouselImages, setCarouselImages] = useState([]);
  const galleryRef = useRef(!null);
  const firstCloneRef = useRef(!null);
  const lastCloneRef = useRef(!null);
  const carouselSlideRef = useRef(!null);
  const prevButtonRef = useRef(!null);
  const nextButtonRef = useRef(!null);
  const styledPrevButtonRef = useRef(!null);
  const styledNextButtonRef = useRef(!null);

  //  Disable button click until the image slide animation ends
  const disableButtonClick = (buttonRef) => {
    buttonRef.current.disabled = true;
    setTimeout(() => {
      buttonRef.current.disabled = false;
    }, time * 1200);
  };

  const imageSlideTransition = (transform) => {
    carouselSlideRef.current.style.transition = !transform
      ? 'none'
      : `transform ${time}s ease-in-out`;
    carouselSlideRef.current.style.transform = `translateX(-${
      size * counter
    }px)`;
  };

  //  Get image width and put every one of them into an array
  useEffect(() => {
    setSize(lastCloneRef.current.clientWidth + 10);
    setCarouselImages([...carouselSlideRef.current.children]);
  }, [isLoaded]);

  //  Set default transform position
  useEffect(() => {
    if (carouselSlideRef.current) {
      carouselSlideRef.current.style.transform = `translateX(-${
        size * counter
      }px)`;
    }
  });

  const nextButtonClick = () => {
    if (!isLoaded) return;
    setCounter((prev) => prev + 1);
    imageSlideTransition(true);
    disableButtonClick(nextButtonRef);
  };

  const prevButtonClick = () => {
    if (!isLoaded) return;
    setCounter((prev) => prev - 1);
    imageSlideTransition(true);
    disableButtonClick(prevButtonRef);
  };

  // Make infinite slide
  const handleTransitionEnd = () => {
    if (carouselImages[counter + 1] === lastCloneRef.current) {
      setCounter(carouselImages.length - 4);
      imageSlideTransition(false);
    }
    if (carouselImages[counter] === firstCloneRef.current) {
      setCounter((prev) => carouselImages.length - prev);
      imageSlideTransition(false);
    }
  };

  return (
    <>
      <S.Photo_Section>
        <h2>"Everything I do is a matter of heart, body and soul"</h2>
        <img src={album.watch.src} alt={album.watch.alt} />
        <div>
          <img
            src={album.woman_in_sunglasses.src}
            alt={album.woman_in_sunglasses.alt}
          />
        </div>
        <Link to="/photos#gallery" onClick={(e) => scrollTo(e, galleryRef)}>
          Open gallery
        </Link>
      </S.Photo_Section>

      <S.Gallery>
        <h2 ref={galleryRef}>Gallery</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          expedita.
        </p>

        <S.Wrapper>
          <S.Left_Arrow onClick={prevButtonClick} ref={styledPrevButtonRef}>
            <div />
            <div />
          </S.Left_Arrow>

          <S.Carausel
            className="images"
            ref={carouselSlideRef}
            onTransitionEnd={handleTransitionEnd}
          >
            <img src={album.camera.src} alt={album.camera.alt} />
            <img
              src={album.marble_table.src}
              alt={album.marble_table.alt}
              ref={lastCloneRef}
              onLoad={() => setIsLoaded(true)}
            />
            <img src={album.palm_leaf.src} alt={album.palm_leaf.alt} />
            <img src={album.pen.src} alt={album.pen.alt} />
            <img src={album.street.src} alt={album.street.alt} />
            <img src={album.watch.src} alt={album.watch.alt} />
            <img src={album.camera.src} alt={album.camera.alt} />
            <img src={album.marble_table.src} alt={album.marble_table.alt} />
            <img
              src={album.palm_leaf.src}
              alt={album.palm_leaf.alt}
              ref={firstCloneRef}
            />
            <img src={album.pen.src} alt={album.pen.alt} />
          </S.Carausel>

          <S.Right_Arrow onClick={nextButtonClick} ref={styledNextButtonRef}>
            <div />
            <div />
          </S.Right_Arrow>

          <S.Button_Group>
            <button onClick={prevButtonClick} ref={prevButtonRef}>
              prev
            </button>{' '}
            /{' '}
            <button onClick={nextButtonClick} ref={nextButtonRef}>
              next
            </button>
          </S.Button_Group>
        </S.Wrapper>
      </S.Gallery>
    </>
  );
}
