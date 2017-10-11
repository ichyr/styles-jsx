import Layout from '../components/MyLayout.js'
import Linker from '../components/Linker.js'

function getPosts () {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js'},
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'},
  ]
}

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <div>
      <ul>
        {getPosts().map((post) => (
          <li key={post.id}>
            <Linker post={post} />
          </li>
        ))}
        Colored
      </ul>
    </div>
    <style jsx>{`
      div { background-color: grey; color: yellow;}
      
      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
)