import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControl/ForrmsControl";

const MyPosts = (props) => {
    let post = props.posts.map(post => <Post message={post.message} key={post.id} id={post.id}
                                             likesCount={post.likesCount}/>)
    
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div>
                {post}
            </div>
        </div>
    )
}

let maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.createPostsBlock}>
            <div>
                <Field name={"newPostText"} component={Textarea} placeholder={"Enter your text"}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;