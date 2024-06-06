'use client';

import { useSelector } from 'react-redux';
import { RootState } from '../app/lib/store';
import Navbar from '@/components/Navbar/Navbar';
import Sidebar from '@/components/Profile/sidebar';

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
  const auth = useSelector((state: RootState) => state.auth);
  return (
    <>
      <Navbar isLoggedIn={auth.isLoggedIn} inDisplay={false} />
      <div className="flex justify-end m-10 gap-5">
        {children}
        <Sidebar name={auth.user?.username} />
      </div>
    </>
  );
}
