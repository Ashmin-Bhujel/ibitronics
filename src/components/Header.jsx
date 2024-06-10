import Nav from "./Nav";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between text-white bg-slate-800 py-4 px-8 ">
        <h1 className="text-3xl font-semibold">iBitronics</h1>
        <Nav />
      </header>
    </>
  );
}
