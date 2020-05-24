// You will add code to this file
import React, {useState} from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
let [comments, setComments] = useState(props.comments);
const [newComment, setNewComment] = useState("");

const submitComment = (event) => {
  event.preventDefault();

  setComments(
    comments = [...comments, {
    username: 'Paulo',
    text: newComment
  }]);

  setNewComment("");
}

const changeComment = (event) => {
  // e.preventDefault();
  setNewComment(event.target.value);
}

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comments.map((comment, index) => {
        return <Comment key={index} comments={comment} />;
      })}
      
      <CommentInput comment={newComment} submitComment={submitComment} changeComment={changeComment} />
    </div>
  );
};

export default CommentSection;