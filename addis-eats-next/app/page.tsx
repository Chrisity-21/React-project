import Link from "next/link"


export default function Home (){
  return(
    <main>
      <h2>Welcome to Addis Eat</h2>
      <p>Discover delicious Ethiopian and international dishes.</p>
      <Link href="/menu">
        View Menu
      </Link>
    </main>
  )
}