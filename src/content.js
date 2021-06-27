import React from "react";
import ReactDOM from "react-dom";
import Frame, { FrameContextConsumer } from "react-frame-component";
import App from "./App";

const Main = () => {
  return (
    <Frame
      head={[
        <link
          type="text/css"
          rel="stylesheet"
          key="content-css"
          href={chrome.runtime.getURL("/static/css/content.css")}
        ></link>,
      ]}
    >
      <FrameContextConsumer>
        {({ document }) => {
          document.body.style = "background-color: #282c34";
          return <App />;
        }}
      </FrameContextConsumer>
    </Frame>
  );
};

export default Main;

const app = document.createElement("div");

app.id = "my-extension-root";

document.body.appendChild(app);

ReactDOM.render(<Main />, app);

app.style.display = "none";

function toggle() {
  if (app.style.display === "none") {
    app.style.display = "block";
  } else {
    app.style.display = "none";
  }
}

chrome.runtime.onMessage.addListener(function (request) {
  const { message } = request;
  if (message === "BROWSER_ACTION_CLICKED") {
    toggle();
  }
});
