import React, {useState,useEffect} from 'react';
import "./Feed.css";
import StoryReel from './StoryReel';
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot) => 
          setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data()})))
        );
        
    }, []);
    return (
        <div className="feed">
           <StoryReel/>
           <MessageSender />
           
           {posts.map((post) => (
               <Post
                  key={post.id}
                  profilePic={post.data.profilePic}
                  message={post.data.message}
                  timestamp={post.data.timestamp}
                  username={post.data.username}
                  image={post.data.image} />                
           ))}
           {/*<Post 
            profilePic="https://instagram.fbho2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.68.1080.1080a/s640x640/116434565_711283239436349_8315247218996485322_n.jpg?_nc_ht=instagram.fbho2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=8y5_UbYXuD4AX8Qzs_t&oh=9c0dea798594b03e1ba3f065f91bbbd5&oe=5F83DC48"
            message="This is COOOLL"
            timestamp="Timestamp it is"
            username="Dushyant Reddy"
            image="https://www.acko.com/wp-content/uploads/2020/01/get-fancy-registration-number-for-car-and-bike.jpg"
           /> 
           <Post 
            profilePic="https://instagram.fbho2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.68.1080.1080a/s640x640/116434565_711283239436349_8315247218996485322_n.jpg?_nc_ht=instagram.fbho2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=8y5_UbYXuD4AX8Qzs_t&oh=9c0dea798594b03e1ba3f065f91bbbd5&oe=5F83DC48"
            message="This is COOOLL"
            timestamp="Timestamp it is"
            username="Dushyant Reddy"
           />*/}
        </div>
    );
}

export default Feed;
