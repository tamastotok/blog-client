import { useRef } from 'react';
import axios from 'axios';
import { album } from '../../utils/constants/images';
import * as S from './Contact.styles';

export default function Contact({ serverMessage, serverIsOffline }) {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const PROXY = process.env.REACT_APP_PROXY;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      subject: subjectRef.current.value,
      message: messageRef.current.value,
    };

    try {
      const response = await axios.post(`${PROXY}/submit`, data);
      alert(response.data);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <S.Contact>
      <img src={album.pen.src} alt={album.pen.alt} />
      <S.Text>
        {serverIsOffline ? (
          <h2 style={{ color: 'crimson' }}>{serverMessage}</h2>
        ) : (
          <h2>Contact</h2>
        )}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          magni excepturi fugit tempore maxime.
        </p>
      </S.Text>

      <S.Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            autoComplete="off"
            type="text"
            name="name"
            required
            ref={nameRef}
            disabled={serverIsOffline}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            autoComplete="off"
            type="email"
            name="email"
            required
            ref={emailRef}
            disabled={serverIsOffline}
          />
        </div>

        <div>
          <label htmlFor="subject">Subject</label>
          <input
            autoComplete="off"
            type="text"
            name="subject"
            required
            ref={subjectRef}
            disabled={serverIsOffline}
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            className="textarea"
            type="text"
            name="message"
            required
            ref={messageRef}
            disabled={serverIsOffline}
          />
        </div>

        <button type="submit" disabled={serverIsOffline}>
          Send
        </button>
      </S.Form>
    </S.Contact>
  );
}
