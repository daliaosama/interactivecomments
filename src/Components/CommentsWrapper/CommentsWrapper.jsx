/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import "./CommentsWrapper.css";
import CounterComponent from "../CounterComponent/CounterComponent";

const CommentsWrapper = (props) => {
  function getLogedInuserName() {
    return "juliusomo";
  }
  return (
    <>
      {props.comments.map((comment) => {
        return (
          <div className="commentswrapper">
            <CounterComponent></CounterComponent>
            <div className="commentwrapper">
              <div className="person">
                <div className="name" id="name">
                  <img src={comment.image} id="person" />
                  <h5>{comment.name}</h5>
                  {comment.name == getLogedInuserName() ? (
                    <div className="postcreator">you</div>
                  ) : null}
                  <label id="time">{comment.time} </label>
                </div>
                <div id="reply"></div>
              </div>
              <p>{comment.comment}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CommentsWrapper;
