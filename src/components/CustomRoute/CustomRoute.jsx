import { lazy } from "react";
import { Route } from "react-router-dom";

const Wrapper = lazy(() => import("../Wrapper/Wrapper"));

function CustomRoute({
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

export default CustomRoute;
