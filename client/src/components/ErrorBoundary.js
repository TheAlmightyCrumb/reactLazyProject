import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(err) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <img
            alt="TubbyGIF"
            src="https://rb.gy/qnfmja"
            width="250"
            height="250"
          />
        </>
      );
    }
    return <>{this.props.children}</>;
  }
}
