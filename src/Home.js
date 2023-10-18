import { useState } from "react"
const Home = () => {

    // let name = 'mario'
    const [blogs, setBlogs] = useState([
        {title: 'my new website', body: 'lorem website...',author:'mario', id:1},
        {title: 'welcome to party', body: 'lorem website...',author:'yoshi', id:2},
        {title: 'devops coding', body: 'lorem website...',author:'luigi', id:3}
    ])
    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog_preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written By :{blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home; 