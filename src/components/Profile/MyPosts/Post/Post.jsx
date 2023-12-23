import React from 'react';
import styles from './Post.module.css';

const Post = () => {
    return (
        <div className={styles.item}>
            <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Free-Download.png"/>
            post 1
            <div>
                <span>Like!</span>
            </div>

        </div>
    );
};

export default Post;