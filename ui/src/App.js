import QuestionForm from "./QuestionFrom";
import "./index.css";
import Logo from "./assets/icons/logo.svg";

function App() {
  return (
    <div className="px-24 py-8 wrapper">
      <header>
        <h1 className="text-3xl">
          <img className="my-[0] mx-auto w-[200px]" src={Logo} />
        </h1>
      </header>
      <main className="mt-8">
        <QuestionForm />
      </main>
    </div>
  );
}

export default App;
