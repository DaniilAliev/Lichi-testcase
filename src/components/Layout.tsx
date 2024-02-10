import { FC, ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <header className="p-8 md:p-20">
      <h1 className="text-6xl font-bold">Blog</h1>
    </header>

    {children}

    <footer className="px-8 py-4 md:px-20 md:py-10">
      <h5 className="text-stone-300 text-sm font-medium">Developed by: <Link href={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} target='_blank'>Daniil Aliev</Link></h5>
    </footer>
  </>
);
export default Layout;
