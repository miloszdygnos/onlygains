import "../styles/home.css";
import {getDocs, collection, doc, deleteDoc} from "firebase/firestore"
import { useState, useEffect } from "react";
import { db, auth } from "../firebase-config";
import Blog from "../components/Blog"

export default function Home({ userName }){
    const [blogs, setBlogs] = useState([]);
    const blogsCollectionRef = collection(db, "blogs")
    const [isLoading, setIsLoading] = useState(false)
    const [deleted,setDeleted] = useState([])
    useEffect(() => {
        const getPosts = async () => {
            setIsLoading(true)
            const data = await getDocs(blogsCollectionRef);
            setBlogs(data.docs.map(doc => ( { ...doc.data(), id: doc.id} )))
            setIsLoading(false)
            
        }
        
        getPosts()
    },[deleted])
    const handleDelete = async (id) => {
        const blogDoc = doc(db,"blogs", id);
        await deleteDoc(blogDoc)
        setDeleted(prev => !prev)
    }
    return(
        <div className="homeSection">

          {!isLoading ?  <div className="blogsContainer">
                    {blogs.length > 0 ? blogs.map(blogData => {
                        return(
                                <Blog key={blogData.id} blogData={blogData} handleDelete={handleDelete} userName={userName}></Blog>
                        )
                    }) : ""}
                    
                </div> : <div className="loading"><h1 className="logo">Loading...</h1></div>}
               
        </div>
    )
}