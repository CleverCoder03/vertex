import Link from "next/link"

const Navbar = () => {
  return (
    <div className="font-abc-marist uppercase flex justify-between items-center text-xl tracking-wide py-6 border-b-2">
        <div>
          <Link href="/">
            Vertex
          </Link>
        </div>
        <div>
            Menu
        </div>
    </div>
  )
}

export default Navbar