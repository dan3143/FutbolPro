import { FC } from 'react';
import { ReactComponent as Ball } from './ball.svg';
import Link from 'next/link';
import Nav from '../Nav';

const Header: FC = () => (
  <header className="bg-gray-700 p-5 shadow-md flex items-center justify-between">
    <Link href="/">
      <a className="flex items-center gap-x-5" href="/">
        <Ball width={64} height={64} className="fill-current text-white" />
        <h1 className="hidden sm:block text-white font-bold text-3xl">
          Fútbol Pro
        </h1>
      </a>
    </Link>
    <Nav />
  </header>
);

export { Header };
