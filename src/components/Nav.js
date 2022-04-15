import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Link = styled.div`
  color: red;
  padding: 20px;

  &:hover {
    color: blue;
    cursor: pointer;
  }
`;

export const Nav = (props) => {
  return (
    <NavContainer>
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
    </NavContainer>
  )
}
