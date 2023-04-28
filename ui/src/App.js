import QuestionForm from "./QuestionFrom";
import "./index.css";

function App() {
  return (
    <div className="px-24 py-8">
      <header>
        <h1 className="text-3xl">
          Expert <span className="font-bold">Finder</span>
        </h1>
      </header>
      <main className="mt-8">
        <QuestionForm />
      </main>
    </div>
  );
}

export default App;
