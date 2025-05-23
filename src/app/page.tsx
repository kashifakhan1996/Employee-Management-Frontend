'use client';

import { Sidebar } from 'lucide-react';
import { Fragment } from 'react';
import '@/lib/env';

import Header from './components/Header';
import AllEmployees from './pages/employees/page';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Fragment>
      <Header />
      <Sidebar />
      <AllEmployees />
    </Fragment>
  );
}
