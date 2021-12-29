import { useState, useEffect } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
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
  const [navbarIsClosed, setNavbarIsClosed] = useState(false);

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
      <ScrollToTop />
      <Header navbarIsClosed={navbarIsClosed} changeNavbar={changeNavbar} />
      <div className="overlay" onClick={() => changeNavbar(true)}>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" component={About} />
          <Route path="/photos" component={Photos} />
          {/*<Route path="/blog/:slug" component={SinglePost} />*/}
          <Route path="/blog">
            <Blog data={data} />
          </Route>
          <Route path="/contact" component={Contact} />
          <Route path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </div>

      <div className="overlay" onClick={() => changeNavbar(true)}>
        <Switch>
          <Route path="/blog/:slug" component={SinglePost} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
