import React from 'react';
import styles from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
                <button>Remove</button>
            </div>

            <div>
                New Post
            </div>
            <div className={styles.posts}>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
};

export default MyPosts;
