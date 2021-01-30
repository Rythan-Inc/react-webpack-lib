import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

import { SimpleComponent } from 'mylib';

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: function(props) {
    const name = 'test'

    return (
      <SimpleComponent name={name}></SimpleComponent>
    );

  },
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return (
      <p role="alert">
        Oops! Something went wrong. Please help us fix this by submitting an issue to 
        <a href="mailto:support@rythan.com">Rythan Support
        </a>{" "} with details on how you got here.
      </p>
    );
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
