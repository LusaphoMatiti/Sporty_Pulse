import { Separator } from "@/components/ui/separator";
import Sidebar from "./Sidebar";

function DashBoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2 className="text-2xl pl-4">Dashbaord</h2>
      <Separator className="mt-2 bg-gray-400" />
      <section className="grid lg:grid-cols-12 gap-12 mt-12">
        <div className="lg:col-span-2">
          <Sidebar />
        </div>
        <div className="lg:col-span-10">{children}</div>
      </section>
    </>
  );
}

export default DashBoardLayout;
