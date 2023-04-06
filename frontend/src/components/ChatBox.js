import React from "react";
import { PrettyChatWindow } from "react-chat-engine-pretty";

function ChatBox(props) {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="d3ca5b61-f17a-4ab1-aca4-721314f6b2fa"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100vh" }}
      />
    </div>
  );
}

export default ChatBox;
