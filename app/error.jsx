import React from 'react';
import Link from 'next/link';
import Button from '@shadcn/ui';

const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-sm mx-auto text-center">
        <p className="text-gray-900 font-bold mt-8">Oops! Something went wrong.</p>
        <Link href="/">
          <Button size="lg" variant="primary" className="mt-4">
            Retry
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Error;