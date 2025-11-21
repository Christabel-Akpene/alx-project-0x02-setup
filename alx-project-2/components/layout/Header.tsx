import Link from "next/link"
const Header = () => {
  return (
    <div className="p-4">
        <div className="flex justify-between items-center">
            <Link href={"/"}><h1 className="text-2xl font-semibold">My App</h1></Link>
            <ul className="flex space-x-4 ">
                <li><Link href={"/home"}>Home</Link></li>
                <li><Link href={"/about"}>About</Link></li>
            </ul>
        </div>

    </div>
  )
}

export default Header