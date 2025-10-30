import { Navbar, Link, Button } from '@shadcn/ui';
import { AiOutlineHome } from 'lucide-react';
import { Head } from 'next/head';
import './globals.css';

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-white">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Galuxium</title>
      </Head>
      <Navbar
        className="fixed top-0 bg-white shadow-md w-full z-50"
        brand={<Link href="/" className="text-lg font-bold">Galuxium</Link>}
        links={[
          { title: 'Home', href: '/' },
          { title: 'Features', href: '/features' },
          { title: 'About', href: '/about' },
        ]}
        right={[
          <Button 
            color="blue"
            onClick={() => window.location.href = '/auth'}
            className="px-4 py-2 rounded-md transition-colors"
          >
            <AiOutlineHome className="h-5 w-5 mr-2" />
            Sign In
          </Button>
        ]}
      />
      <main class="mt-16">
        {children}
      </main>
      <footer 
        className="bg-gray-800 text-white p-4 mt-auto flex items-center justify-center">
        <div class="max-w-md">
          <p class="text-gray-300">© 2024 Galuxium. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}