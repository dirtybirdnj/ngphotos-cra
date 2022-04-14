import Link from 'next/link'

export const Navbar = (props) => {
  return (
    <div>
        <Link href="/">
          <a>HOME</a>
        </Link>
        <Link href="/posts">
          <a>WELCOME</a>
        </Link>
        <Link href="/posts">
          <a>ARCHIVES</a>
        </Link>
        <Link href="/posts">
          <a>INQUIRIES</a>
        </Link>
        <Link href="/posts">
          <a>CONTACT</a>
        </Link>
    </div>
  )
}
