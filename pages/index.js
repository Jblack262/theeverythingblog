import Head from 'next/head'
import Image from 'next/image'
import BlogCard from '../components/blogCard'
import GoogleAd from '../components/googleAd'
import Script from 'next/script'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>The Everything Blog</title>
        <meta name="description" content="The Everything Blog is a one-stop destination for all your informational needs. From current events and politics to science and technology, we cover it all. Our team of expert writers brings you the latest news and insights on a wide range of topics, providing in-depth analysis and thoughtful commentary. Whether you're looking to stay up-to-date on the latest trends or want to learn something new, The Everything Blog has you covered. Join our growing community of readers and discover why we're the go-to source for comprehensive coverage of everything under the sun." />
        <link rel="icon" href="/favicon.ico" />

        <Script async="true" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9451016379752441" crossorigin="anonymous" />
      </Head>
      
      <div id='page-header'>
        <div className='logo'></div>
        <h1>The Everything Blog</h1>
      </div>

      <section id='page-body'>
        <div id='content'>
          <h1 id='content-title'>The blog that knows no limits</h1>
          <p id='content-subtitle'>The Everything Blog is a comprehensive source of information on a wide range of topics, providing expert analysis and commentary.</p>
          <a href='#' className='btn'>Learn More</a>
        </div>
      </section>

      <section id='recent-posts'>
        <div id='recent-posts-header'>
          <h1>Recent Blog Posts</h1>
        </div>

        <div id='posts-row'>
          <div className='google-container'><GoogleAd /></div>
          <div className='posts-container'>
            <div className='posts-grid'>
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
            <a className='btn'>View All Posts</a>
          </div>
          <div className='google-container'><GoogleAd /></div>
        </div>
      </section>

      <footer>
        <div id='logo-container'>
          <div className='logo'></div>
        </div>
        <ul id='links'>
          <li><a href='/'>Home</a></li>
          <li><a href='/'>Articles</a></li>
          <li><a href='/'>Terms</a></li>
          <li><a href='/'>Privacy</a></li>
        </ul>
        <p>The Everything Blog © 2022</p>
      </footer>
    </div>
  )
}
