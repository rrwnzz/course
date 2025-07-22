import '../css/blog.css'
import BlogTips from './blogtips'
export default function Blog(){
    return(
        <div>
            <div id='blog'>
                <div className="blogSection">
                    <div id='leftBlog'>
                        <h3>Study Tips & Time Management</h3>
                    </div>
                </div>
                <div id='rightBlog'>
                    <img width={400} src='https://i.pinimg.com/736x/1b/05/f4/1b05f4cace8bfe071d4f5631133d5e65.jpg'></img>
                </div>

            </div>
            <BlogTips />
        </div>
    )
}