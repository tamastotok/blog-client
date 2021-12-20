import { useState, useEffect } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import sanityClient from './client.js';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import CustomRoute from './components/CustomRoute/CustomRoute';

import Home from './views/Home/Home';
import About from './views/About/About';
import Photos from './views/Photos/Photos';
import Blog from './views/Blog/Blog';
import SinglePost from './views/SinglePost/SinglePost';
import Contact from './views/Contact/Contact';
import PageNotFound from './views/PageNotFound/PageNotFound';

export default function App() {
  const [data, setData] = useState(null);

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

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <CustomRoute path="/" exact={true} component={Home} />
        <CustomRoute path="/about" component={About} />
        <CustomRoute path="/photos" component={Photos} />
        <CustomRoute path="/blog/:slug" wrap={false} component={SinglePost} />
        <CustomRoute path="/blog" wProps={<Blog data={data} />} />
        <CustomRoute path="/contact" component={Contact} />
        <CustomRoute path="*" wrap={false} component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}
