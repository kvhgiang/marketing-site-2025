export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow">
      <h1 className="text-2xl font-bold">AwesomeApp</h1>
      <nav>
        <a href="#features" className="mr-4 text-gray-700 hover:text-blue-600">Features</a>
        <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
      </nav>
    </header>
  );
}
