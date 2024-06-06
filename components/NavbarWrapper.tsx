'use client';

import { useSelector } from 'react-redux';
import { RootState } from '../app/lib/store';
import Navbar from '@/components/Navbar/Navbar';

export default function NavbarWrapper({ children }: { children: React.ReactNode }) {
  const auth = useSelector((state: RootState) => state.auth);

  return (
    <>
      <Navbar isLoggedIn={auth.isLoggedIn} inDisplay={false} />
        {children}
    </>
  );
}
