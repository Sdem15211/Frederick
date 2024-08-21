import { Landing } from "@/sections/Landing";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Landing />
      <div className="-z-10 absolute bg-circles/30 size-[46.875rem] rounded-full blur-[9rem] -left-[15.625rem] -bottom-1/2" />
      <div className="-z-10 absolute bg-circles/30 size-[46.875rem] rounded-full blur-[9rem] -right-[17.625rem] -top-1/2" />
    </main>
  );
}
