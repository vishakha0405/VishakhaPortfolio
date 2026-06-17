export default function Navbar() {
  return (
    <nav className="w-full max-w-6xl mx-auto flex justify-between items-center px-8 py-5">
      <h1 className="font-bold text-xl">
        Vishakha Batham
      </h1>

      <div className="flex gap-10">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}