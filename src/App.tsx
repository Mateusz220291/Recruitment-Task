import "./App.css";
import TablePage from "./app/page";

export default function App() {
  return (
    <>
      <header className="header">
        <h1>
          Recruitment Task in <span className="highlight"> React</span>
        </h1>
        <p>Stack Overflow tag table with the number of related posts:</p>
      </header>
      <main className="main">
        <TablePage />
      </main>
    </>
  );
}
