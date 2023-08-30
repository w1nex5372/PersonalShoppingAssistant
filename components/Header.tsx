import Link from "next/link"
const Header: React.FC = () => {
    return (
      <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center">
        <Link href="/">
          Personalized Shopping
        </Link>
        <div>
            <input className="p-1 text-black" type="text" placeholder="I'm looking for..."/>
        </div>
        <div className="flex space-x-4">
          <Link href="/login" passHref>
            Join / Login
          </Link>
        </div>
      </nav>
    </header>
    )
}


export default Header;