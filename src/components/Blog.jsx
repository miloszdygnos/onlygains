/* eslint-disable react/prop-types */
export default function Blog({blogData, handleDelete, userName}){ 
    const date = blogData.createdWhen.toDate();  
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return(
        <div className="blog">
            <h1 className="blogTitle logo">{blogData.title}</h1>
            <p className="blogContent">{blogData.content}</p>
            <div className="userInfo">
                <div className="userName">@{blogData.author.name}, {`${day}-${month < 10 ? "0" + month : month }-${year}`} at {`${hours}:${minutes}`}</div>
            </div>
            {userName === blogData.author.id ? <button onClick={() => handleDelete(blogData.id)} className="deletePost">delete</button> : ""}
        </div>
    )
}