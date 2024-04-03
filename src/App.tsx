import "./App.css";
import TablePage from "./app/page";

export default function App() {
  return (
    <>
      <header className="gap-12 px-8 my-8 mx-auto w-90 max-w-3xl text-gray-300 text-lg">
        <h1 className="text-4xl mb-4">Recruitment Task in React</h1>
        <p>Stack Overflow tag table with the number of related posts:</p>
      </header>
      <main>
        <TablePage />
      </main>
    </>
  );
}
