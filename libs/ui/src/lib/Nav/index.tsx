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
  console.log(router.pathname);
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
    <div>
      <NavLink to="/countries" name="Países" router={router} />
    </div>
  );
};

export default Nav;
