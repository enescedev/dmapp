// components/Sidebar.jsx
import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link href="/dashboard/servers">
        <a>Sunucular</a>
      </Link>
      <Link href="/dashboard/backups">
        <a>Backup İşlemleri</a>
      </Link>
      <Link href="/dashboard/monitoring">
        <a>İzleme</a>
      </Link>
      <Link href="/dashboard/operations">
        <a>Operasyonlar</a>
      </Link>
    </div>
  );
};

export default Sidebar;
