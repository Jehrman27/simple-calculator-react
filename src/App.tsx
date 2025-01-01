import Calculator from "./components/Calculator";
import "./App.css";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <>
      <section>
        <Calculator />
      </section>
      <aside className="fixed top-0 right-0 p-4">
        <ModeToggle />
      </aside>
    </>
  );
}

export default App;
