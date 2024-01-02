import UserInfo from "@/components/UserInfo";
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';

export default function Dashboard() {
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="content">
                <h1>Welcome to the Dashboard!</h1>
                {/* Dashboard içeriği buraya gelebilir */}
                <UserInfo />
                <div>
                    <Link href="/dashboard/servers">Sunucular</Link>
                </div>
                <div>
                    <Link href="/dashboard/backups">Backup İşlemleri</Link>
                </div>
                <div>
                    <Link href="/dashboard/monitoring">İzleme</Link>
                </div>
                <div>
                    <Link href="/dashboard/operations">Operasyonlar</Link>
                </div>
            </div>
        </div>
    )
}
