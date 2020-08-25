import getPosts from "../lib/get-posts";

const Home = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.title}>
          <p>{post.title}</p>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps = () => {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
};

export default Home;
