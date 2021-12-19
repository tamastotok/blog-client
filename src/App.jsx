import { useState, useEffect, lazy, Suspense } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import sanityClient from './client.js';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import CustomRoute from './components/CustomRoute/CustomRoute';

const Home = lazy(() => import('./views/Home/Home'));
const About = lazy(() => import('./views/About/About'));
const Photos = lazy(() => import('./views/Photos/Photos'));
const Blog = lazy(() => import('./views/Blog/Blog'));
const SinglePost = lazy(() => import('./views/SinglePost/SinglePost'));
const Contact = lazy(() => import('./views/Contact/Contact'));
const PageNotFound = lazy(() => import('./views/PageNotFound/PageNotFound'));

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
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <CustomRoute path="/" exact={true} component={Home} />
          <CustomRoute path="/about" component={About} />
          <CustomRoute path="/photos" component={Photos} />
          <CustomRoute path="/blog/:slug" wrap={false} component={SinglePost} />
          <CustomRoute path="/blog" wProps={<Blog data={data} />} />
          <CustomRoute path="/contact" component={Contact} />
          <CustomRoute path="*" wrap={false} component={PageNotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
