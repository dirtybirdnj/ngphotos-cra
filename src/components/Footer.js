import Link from 'next/link'

export const Footer = (props) => {
  return (
    <div>
        <Link href="/">
          <a>HOME</a>
        </Link>
        <Link href="/posts">
          <a>FACEBOOK</a>
        </Link>
        <Link href="/posts">
          <a>INSTAGRAM</a>
        </Link>
        <Link href="/posts">
          <a>PINTREST</a>
        </Link>
        <Link href="/posts">
          <a>EMAIL</a>
        </Link>
    </div>
  )
}
