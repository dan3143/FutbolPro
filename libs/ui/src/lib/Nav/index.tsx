import { FC } from 'react';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/dist/client/router';

interface NavLinkProps {
  name: string;
  to: string;
  router: NextRouter;
}

const NavLink: FC<NavLinkProps> = ({ to, name, router }) => {
  const activeClass = router.pathname === to ? 'font-bold' : '';
  return (
    <Link href={to}>
      <a href={to} className={`text-white text-xl ${activeClass}`}>
        {name}
      </a>
    </Link>
  );
};

const Nav: FC = () => {
  const router = useRouter();
  return (
    <nav className="flex gap-x-5">
      <NavLink to="/countries" name="Countries" router={router} />
      <NavLink to="/" name="Home" router={router} />
    </nav>
  );
};

export default Nav;
