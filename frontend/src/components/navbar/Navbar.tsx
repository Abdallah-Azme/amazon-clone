export default function Navbar() {
  return (
    <header className="p-10 text-xl container mx-auto max-w-7xl ">
      <div className="flex justify-between">
        <h1>Amazon Clone</h1>
        <div className=" flex gap-4">
          <a href="/cart"> Cart</a>
          <a href="/signin"> Sign In</a>
        </div>
      </div>
    </header>
  );
}
