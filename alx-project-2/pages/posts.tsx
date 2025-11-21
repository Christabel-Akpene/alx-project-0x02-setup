import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

const Posts = ({ posts } : PostProps[]) => {

  return (
    <div className="flex flex-col h-screen">
      <main className="p-4">
          <h1 className=" text-2xl font-semibold text-center">Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 ">
          {
            posts?.map(({ title, body, userId, id }: PostProps, key: number) => (
              <PostCard title={title} body={body} userId={userId} id={id} key={key} />
            ))
          }
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    return {
        props: {
            posts
        }
    }
}

export default Posts;
