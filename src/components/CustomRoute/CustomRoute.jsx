import { Route } from 'react-router-dom';
import Wrapper from '../Wrapper/Wrapper';

export default function CustomRoute({
  path,
  wrap = true,
  exact = false,
  component = null,
  wProps = null,
}) {
  if (wrap) {
    return (
      <Wrapper>
        <Route path={path} exact={exact} component={component}>
          {wProps}
        </Route>
      </Wrapper>
    );
  }

  return (
    <Route path={path} exact={exact} component={component}>
      {wProps}
    </Route>
  );
}
