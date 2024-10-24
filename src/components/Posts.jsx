import { useState } from "react";
import postData from "../data/postData";

function Posts() {

  const [postDatas,setPostDatas] = useState(postData)

  const increaseLike = (likeCount) => {
    const newData = [...postDatas]
    newData[likeCount-1].likes += 1;
    setPostDatas(newData);
  }

  const decreaseLike = (likeCount) => {
    const newData = [...postDatas];
    if (newData[likeCount - 1].likes > 0) {
      newData[likeCount - 1].likes -= 1;
    }
    setPostDatas(newData);
  };
  

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">

        {postDatas.map((data)=>(         
          <div class="post-item" key={data.id}>
            <div class="post-header">
              <h2>{data.title}</h2>
              <div class="post-social-media-stats">
                <span class="stats-topic">Likes: </span>
                <span class="post-likes">{data.likes}</span>
              </div>
            </div>
            <p class="post-content">
              {data.content}
            </p>
            <div class="post-actions">
              <button class="like-button" onClick={()=>increaseLike(data.id)}>Like</button>
              <button class="dislike-button" onClick={()=>decreaseLike(data.id)}>Dislike</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
