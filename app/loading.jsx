'use client';

import React from 'react';
import { animate, motion } from 'framer-motion';
import { Spinner3 } from '@lucide/react';

export default function () {
  return (
    <div className="mx-auto p-4 h-screen flex items-center justify-center flex-col text-center">
      <motion animate="pulse">
        <Spinner3 className="w-20 h-20" />
      </motion>
    </div>
  );
}