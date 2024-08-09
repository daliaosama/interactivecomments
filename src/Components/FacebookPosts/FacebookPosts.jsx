/* eslint-disable react/no-unknown-property */
import "./FacebookPosts.css";
import { useState } from "react";
 import amy from "../../assets/avatars/image-amyrobson.png";
import ramsesmiron from "../../assets/avatars/image-ramsesmiron.png";
import maxblaugn from "../../assets/avatars/image-maxblagun.png"; 
import juliusomo from "../../assets/avatars/image-juliusomo.png";
import PostItem from "../PostItem/PostItem";
import InputSection from "../InputSection/InputSection";
import CommentsWraper from "../CommentsWrapper/CommentsWrapper";

function FacebookPosts() {
  const [arrayofPosts, setarrayofPosts] = useState([
     {
      id: 1,
      name: "amyrobson",
      image: amy,
      post: "Impressive!Though it seems the drag feature could be improved.But overall it looks incredibile.You've nailed the design and the responsiveness at various breakpoints works really well.",
      time: "1 month ago",
      comments: [],
    },
    {
      id: 2,
      name: "maxblaugn",
      image: maxblaugn,
      post: "Woah,your project looks awesome! How long have you been coding for?I'm still new,but think I want to dive into React as well so,Perhabs you can give me an insight on where I can learn React? Thanks!",
      time: "2 weeks ago",
      comments: [
        {
          name: "ramsesmiron",
          image: ramsesmiron,
          comment:
            "@maxblaugn if you're still new.I'd recommend focusing on the fundamentals of HTML,CSS,and JS before considering React.It's very tempting to jump ahead but lay a solid foundation first.",
          time: "1 week ago",
        },
        {
          name: "juliusomo",
          image: juliusomo,
          comment:
            "I couldn't agree more with this.Everything moves so fast and it alwaysseems like everyone konws the newest library/framework.But the fundamentals are what stay constant.",
          time: "1 day ago",
        },
      ],
    },
    {
      id: 3,
      name: "juliusomo",
      image: juliusomo,
      post: "Great work!I haven't got much to add beyound what's already been said,but i just wanted to say congrats!You've done an execellent job on this!",
      time: "1 day ago",
      comments: [],
    },
  ]); 
  /* useEffect(()=>{function callApi(){
    console.log("fire");
  fetch("http://localhost:3000/posts").then((response)=>{
    return response.json()
    
  }).then((final)=>{
    setarrayofPosts(final)
    console.log(final)
  })}
   callApi();},[]) */
  function addPost(post) {
    const newPost = {
      post: post,
      id: arrayofPosts.length + 1,
      name: "juliusomo",
      image: juliusomo,
      time: new Date(new Date().getTime()).toLocaleTimeString(),
      comments: [],
    };
    const newarrayPost = [...arrayofPosts, newPost];
    setarrayofPosts(newarrayPost);
  }
  function addComment(postID, CommentContent) {
    console.log(postID, CommentContent);
    const newArray = arrayofPosts.map((post) => {
      if (post.id == postID) {
        const newcommentObject = {
          name: "juliusomo",
          image: juliusomo,
          comment: CommentContent,
          time: new Date(new Date().getTime()).toLocaleTimeString(),
        };
        post.comments.push(newcommentObject);
      }
      return post;
    });

    setarrayofPosts(newArray);
  }

  function deletefromArray(deletedpostId) {
    const newarrayafterdelete = arrayofPosts.filter((post) => {
      return post.id != deletedpostId;
    });
    setarrayofPosts(newarrayafterdelete);
  }

  return (
    <>
      <div className="FacebookPosts">
        {arrayofPosts.map((post) => {
          return (
            <>
              <PostItem
                key={post.id}
                name={post.name}
                image={post.image}
                post={post.post}
                time={post.time}
                deletefromArray={deletefromArray}
                uniqueId={post.id}
                addComment={addComment}
              ></PostItem>

              {post.comments.length > 0 ? (
                <CommentsWraper comments={post.comments}></CommentsWraper>
              ) : null}
            </>
          );
        })}

        <InputSection addPost={addPost}></InputSection>
      </div>
    </>
  );
}
export default FacebookPosts;
