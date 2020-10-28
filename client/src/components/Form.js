import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { create } from "../Network/CRUD";
import track from "../Analytics/Mixpanel";

export default function Form(props) {
  const history = useHistory();
  const nameInput = useRef();
  const contentInput = useRef();
  const { addComment } = props;

  const onNameKeyUp = (e) => {
    if (e.key === "Enter") contentInput.current.focus();
  };

  const onSubmit = async () => {
    const data = await create("/comments/create", {
      name: nameInput.current.value,
      content: contentInput.current.value,
    });
    console.log("data: ", data);
    track("Clicked 'Add Comment'");
    if (data.message === "Comment Added Successfully") {
      addComment({
        name: nameInput.current.value,
        content: contentInput.current.value,
      });
      setTimeout(() => history.push("/bravo"), 1000);
    }
    // nameInput.current.value = "";
    // contentInput.current.value = "";
  };

  useEffect(() => {
    nameInput.current.focus();
  }, []);

  return (
    <div id="form">
      <input
        className="name-input"
        ref={nameInput}
        onKeyUp={(e) => onNameKeyUp(e)}
        placeholder="Name..."
      />
      <textarea
        className="comment-input"
        onInput={() => track("Typing a comment")}
        ref={contentInput}
        placeholder="Share your thoughts..."
      />
      {/* <Link to="/bravo"> */}
      <button className="add-comment-btn" onClick={() => onSubmit()}>
        Add Comment
      </button>
      {/* </Link> */}
    </div>
  );
}
