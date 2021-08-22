import { Link } from 'react-router-dom';
import * as S from './PageNotFound.styles';

function PageNotFound() {
  return (
    <S.Message>
      <h1>Page not found!</h1>
      <Link to="/">back</Link>
    </S.Message>
  );
}

export default PageNotFound;
