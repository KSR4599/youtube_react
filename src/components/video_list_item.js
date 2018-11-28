import React from 'react';

//Intead of taking in props, we are taking in {video}, which indeed means that grab the video property of props (props.video) and let it be available in the below component as video.
const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
return (
 <li onClick={() => onVideoSelect(video)} className = "list-group-item">
  <div className ="video-list media">
  <div className ="media-left">
  <img className = "media-object"  src= {imageUrl}/>
  </div>

  <div className = "media-body">
   <div className = "media-heading">{video.snippet.title} </div>
   </div>
   </div>
 </li>
);
};

export default VideoListItem;
