import { useState , useEffect} from "react";
import BlogList from "./BlogList";

function Post(){

    // Data for onclick event
    const handleClick = () => {
       console.log('Hello, Mr Majid');
    }
    const handleClickAgain = (name) => {
        console.log('Hello ' + name)
    }

    // Data for changing state using useState hook
    const [name, setName] = useState('Mario');
    const [age, setAge] = useState(25);
    const handleState = () => {
        setName('Luigi');
        setAge('30');
    }


    // Data to output lists using useState hook
    const [blogs, setBlogs] = useState([
        {title:'My new website', body: 'lorem ipsum sit nullem...', author:'Mario', id:1},
        {title:'Welcome to party', body:'lorem ipsum sit nullem...', author:'Yoshi', id:2},
        {title:'Web dev top tips', body:'lorem ipsum sit nullem...', author:'Mario', id:3}
    ]);

    const deleteBlogHandle = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    // Using the useState Hook with API data
    const [apiData, setApiData] = useState(null);
        
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
          .then(res => {
            if (!res.ok) {
              throw new Error(`Network response was not ok (${res.status})`);
            }
            return res.json();
          })
          .then(data => {
            console.log(data);
            setBlogs(data);
          })
          .catch(error => {
            console.error('Fetch error:', error);
            // Handle the error here, e.g., display an error message to the user
          });
      }, []);
      

    // using of the useEffect Hook
    const [userName, setUserName] = useState('Mario');



    return(
         <div className="row">
            <div className="col-md-12  bg-dark m-2 p-3">
                <h3 className="text-light">Using onClick event</h3>
                <p className="text-light">Majid</p>
                <p className="text-light">Welcome to React</p>
                <button onClick={handleClick}>Click Me to Log</button>
                <button onClick={() => handleClickAgain('Mr Joshi')}>Click Me Again</button>
            </div>

            <div className="col-md-12  bg-dark m-2 p-3">
                <h3 className="text-light">Changing state on button click</h3>
                <p className="text-light">{name} is {age} years old</p>
                <button onClick={handleState}>Click me to change above</button>
            </div>
           
            <h2 className="mt-3">List of All Blogs</h2>
            <div className="col-md-12 bg-dark m-2 p-3 d-flex">
                <BlogList blogs={blogs}  deleteBlogHandle={deleteBlogHandle} />
            </div>
           
            <h2 className="mt-3">List of Mario's Blogs</h2>
            <div className="col-md-12 bg-dark m-2 p-3 d-flex ">
                <BlogList blogs={blogs.filter((blog) => blog.author === 'Mario')} deleteBlogHandle={deleteBlogHandle} />
            </div>

            <div className="col-md-12 bg-dark m-2 p-3 ">
                <p className="text-light">User Name: {userName}</p>
                <button className="btn btn-success" onClick={() => setUserName('Luigi')}>Click Me to Change Name </button>
            </div>

        </div>
    )
}

export default Post;