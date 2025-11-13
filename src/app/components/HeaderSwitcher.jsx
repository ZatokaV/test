"use client";

import { usePathname } from 'next/navigation';
import Header from './Header/Header';
import OrderHeader from './OrderHeader/OrderHeader';

export default function HeaderSwitcher() {
  const pathname = usePathname();

  if (pathname === '/order') {
    return <OrderHeader />;
  }

  return <Header />;
}