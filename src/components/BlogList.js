const BlogList = ({blogs, title, deleteBlogHandle}) => {
    //const blogs = props.blogs;

    return(
        <>
        <h2 className="text-light">{title}</h2>

        {blogs.map((blog) =>  (
            <div className="col-md-4 bg-light mx-1 p-2" key={blog.id}>
                <h3>{blog.title}</h3>
                <p >{blog.body} </p>
                <p>Written by: {blog.author} </p>
                <button onClick={() => deleteBlogHandle(blog.id)} className=" btn btn-danger">Delete Post</button>
            </div>            
        
        ))}

    </>

    );
   

}

export default BlogList;