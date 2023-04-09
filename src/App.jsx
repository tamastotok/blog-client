import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import sanityClient from './client.js';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './views/Home/Home';
import About from './views/About/About';
import Photos from './views/Photos/Photos';
import Blog from './views/Blog/Blog';
import SinglePost from './views/SinglePost/SinglePost';
import Contact from './views/Contact/Contact';
import PageNotFound from './views/PageNotFound/PageNotFound';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

export default function App() {
  const [data, setData] = useState(null);
  const [navbarIsClosed, setNavbarIsClosed] = useState(true);
  const [serverMessage, setServerMessage] = useState('');
  const [serverIsOffline, setServerIsOffline] = useState(false);

  const PROXY = process.env.REACT_APP_PROXY;

  // Check if contact server is online
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const { data } = await axios.get(`${PROXY}/status`);
        if (data) {
          setServerMessage('');
          setServerIsOffline(false);
        } else {
          setServerMessage('Contact is unavailable!');
          setServerIsOffline(true);
        }
      } catch (error) {
        setServerMessage('Contact is unavailable!');
        setServerIsOffline(true);
      }
    }, 5000);

    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="post"]{
                     title,
                     slug,
                     mainImage{
                          asset->{
                               _id,
                               url
                            },
                            alt
                       }
                  }`
      )
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.error(err));
  }, []);

  //  Close navbar on mobile when click outside
  const changeNavbar = (state) => {
    setNavbarIsClosed(state);
  };

  return (
    <BrowserRouter>
      <>
        <ScrollToTop />
        <Header navbarIsClosed={navbarIsClosed} changeNavbar={changeNavbar} />
        <div className="overlay" onClick={() => changeNavbar(true)}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/blog/post/:slug" element={<SinglePost />} />
            <Route path="/blog" element={<Blog data={data} />} />
            <Route
              path="/contact"
              element={
                <Contact
                  serverMessage={serverMessage}
                  serverIsOffline={serverIsOffline}
                />
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
      </>
    </BrowserRouter>
  );
}
