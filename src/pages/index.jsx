import { Header } from '@/components/Header';
import { DetailInfo } from '@/components/DetailInfo';
import { BasicInfo } from '@/components/BasicInfo';
import { Posts } from '@/components/Posts';
import { posts } from '@/utils/data';

export default function Home() {
  console.log(posts);
  return (
    <div>
      <Header />
      <BasicInfo />
      <div className="flex bg-[#F0F2F5] p-[20px] justify-center gap-[20px]">
        <DetailInfo />
        <Posts />
      </div>
    </div>
  );
}
