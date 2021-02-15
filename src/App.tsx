import React, { useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { Route } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import { fetchUserAction } from "./redux/actions/user.actions";
import CommunityPage from "./pages/CommunityPage/Community.page";
import QuestionFormPage from "./pages/QuestionFormPage/QuestionForm.page";

// Types
import { ThunkDispatch } from "redux-thunk";
import { State } from "./redux/store.types";
import { UserState, UserActions } from "./redux/types/user.types";

import "./App.css";

const App: React.FC<AppProps & RouteComponentProps> = ({
  fetchUser,
  history,
}) => {
  useEffect(() => {
    fetchUser();
    // redirect on load
    if (history.location.pathname === "/") history.push("/community");
  }, [fetchUser, history]);

  return (
    <>
      <Route exact path="/community" component={CommunityPage} />
      <Route
        exact
        path="/community/question/new"
        component={QuestionFormPage}
      />
    </>
  );
};

const mapStateToProps = (state: State) => ({
  user: state.user,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<UserState, undefined, UserActions>
) => ({
  fetchUser: () => dispatch(fetchUserAction()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type AppProps = ConnectedProps<typeof connector>;

export default withRouter(connector(App));
