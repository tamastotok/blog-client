import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Wrapper({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
