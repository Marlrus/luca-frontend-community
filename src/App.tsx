import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { fetchUserAction } from "./redux/actions/user.actions";

// Types
import { ThunkDispatch } from "redux-thunk";
import { State } from "./redux/store.types";
import { UserState, UserActions } from "./redux/types/user.types";

import logo from "./logo.svg";
import "./App.css";

const App: React.FC<AppProps> = ({ fetchUser }) => {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
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

export default connector(App);
