/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import reply from "../../assets/icon-reply.svg";
import deleteimg from "../../assets/icon-delete.svg";
import CounterComponent from "../CounterComponent/CounterComponent";
import "./PostItem.css";
import juliusomo from "../../assets/avatars/image-juliusomo.png";
import { useState } from "react";

function PostItem(props) {
  const deletePost = (event) => {
    props.deletefromArray(event.target.id);
  };

  const showComment = () => {
    setReplyClicked(true);
  };
  function sendComment(event) {
    const postId = event.target.getAttribute("customid");
    const passedComment = commentcontent;
    props.addComment(postId, passedComment);
    setCommentContent("");
    setReplyClicked(false);
  }
  const [replyClicked, setReplyClicked] = useState(false);
  const [commentcontent, setCommentContent] = useState("");

  function getLogedInuserName() {
    return "juliusomo";
  }
  function handleonChange(event) {
    setCommentContent(event.target.value);
  }
  return (
    <>
      <div className="postitem">
        <CounterComponent></CounterComponent>
        <div className="post">
          <div className="person">
            <div className="name">
              <img src={props.image} id="person" />
              <h5>{props.name}</h5>
              <label id="time">{props.time}</label>
            </div>
            <div id="reply">
              {props.name == getLogedInuserName() ? (
                <button
                  className="btn"
                  id={props.uniqueId}
                  onClick={deletePost}
                >
                  <img src={deleteimg} id="del" /> Delete
                </button>
              ) : null}
              <button
                className="re"
                onClick={showComment}
                disabled={replyClicked}
              >
                <img src={reply} id="rep" /> Reply
              </button>
            </div>
          </div>
          <p>{props.post}</p>
        </div>
      </div>
      {replyClicked == true ? (
        <div className="inputreply">
          <img src={juliusomo} id="img" />
          <textarea value={commentcontent} onChange={handleonChange}></textarea>
          <button
            className="reply"
            onClick={sendComment}
            customid={props.uniqueId}>
          
           REPLY
          </button>
        </div>
      ) : null}
    </>
  );
}
export default PostItem;
