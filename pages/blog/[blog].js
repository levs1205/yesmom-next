import { useRouter } from "next/router";

const CardBlogEspecific = ({ currentData}) => {
    const router = useRouter();
console.log(currentData,"judith:)")

// if(router.isFallback){
//     return <div>CARGANDO...</div>
// }

    return (
        <div>
            <p>Holaaa Perú {router.query.blog}</p>
            <p>Holaaa Perú {currentData.blog._id}</p>
        </div>
    )
}

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:5000/getBlogAll/user?limit=all')
    const blogs = await res.json()
  console.log(blogs.length,"ojitoa")
    // Get the paths we want to pre-render based on posts
    const paths = blogs.map((blog) => ({
      params: { blog: String(blog.blog._id) },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }

export async function getStaticProps({params}) {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch(`http://localhost:5000/getBlog/${params.blog}`);
    const currentData = await res.json();
  
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        currentData:currentData[0],
      },
    };
  }
  
export default  CardBlogEspecific
