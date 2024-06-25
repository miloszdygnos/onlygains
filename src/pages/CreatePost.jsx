import "../styles/createpost.css"
import { useState } from "react"
import { addDoc, collection, Timestamp } from "firebase/firestore"
import "firebase/firestore";
import {db, auth} from "../firebase-config";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
// eslint-disable-next-line react/prop-types
export default function CratePost({isAuth}) {
    const [blogTitle,setBlogTitle] = useState("")
    const [blogContent,setBlogContent] = useState("")
    const navigate = useNavigate();
    const blogsCollectionRef = collection(db, "blogs")
    const createPost = async () => {
        await addDoc(blogsCollectionRef, {
            title: blogTitle,
            content:blogContent,    
            createdWhen: getDate(),
            author: { name:auth.currentUser.displayName , id:auth.currentUser.uid }
        })
        setBlogTitle("");
        setBlogContent("")
        navigate("/");
        
    }
    const getDate = () => {
        const now = new Date();
        return now;
    }
    return(
        <div className="createPost">
            {!isAuth ? <h1 className="logo">You have to sign in to create a post...</h1> :
            
            <div className="formWrapper">
            <h1 className="formHeader logo">Create a post</h1>
            <form action="">
                <div>
                <input 
                    className="titleForm"
                    type="text"
                    value={blogTitle}
                    onChange={(e) => {
                        e.preventDefault()
                        setBlogTitle(e.target.value)
                    }}
                    placeholder="your post title...."/>
                </div>
                <div>
                    <textarea 
                        rows="15"
                        value={blogContent}
                        onChange={(e) => {
                            e.preventDefault()
                            setBlogContent(e.target.value)
                        }}
                        className="contentForm"
                        placeholder="post">
                        
                    </textarea>
                </div>
                    </form>
                    <button onClick={createPost}className="shareBtn">Share</button>
        </div>
}
        </div>
    )
}