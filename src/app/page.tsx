import HeaderCom from '@/components/HeaderCom';
import DetailCom from '@/components/DetailCom';
import FounderCom from '@/components/FounderCom';
import WorksCom from '@/components/WorksCom';
import ServicesCom from '@/components/ServicesCom';
import BuildingCom from '@/components/BuildingCom';
import Navbar from '@/components/Navbar/Navbar';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-[#f9f9f9]">
      <Navbar />
      <main className="flex w-full flex-col items-center gap-12 bg-[#f9f9f9] sm:gap-20">
        <HeaderCom />
        <BuildingCom />
        <DetailCom />
        <FounderCom />
        <WorksCom />
        <ServicesCom />
      </main>
    </div>
  );
}
