import Link from "next/link"

export default function BlogCard () {
    return (
        <div className="blog-card">
            <p id="blog-post-date">8 December 2022</p>
            <h1 id="blog-post-title">The Role of Social Media in Politics</h1>
            <p id="blog-post-description">Social media has become a vital tool for politicians in campaigns and elections. However, the spread of fake news and disinformation on these platforms is a concern.</p>
            <Link href="#" className="btn">Read More</Link>
        </div>
    )
}