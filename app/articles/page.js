import Link from "next/link";

export default function PostsPage(){
    return(
     <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <h1 class="text-3xl font-bold underline">
             Articles Page!
          </h1>
          <Link href="/posts" className="text-3xl "> Take me to the posts Page</Link>
      </main>
    );
}