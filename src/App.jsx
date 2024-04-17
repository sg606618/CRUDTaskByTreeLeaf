import "./App.css";
import Form from "./components/Form";
import Result from "./components/Result";

function App() {
  return (
    <>
      <div className="container flex gap-3 rounded-lg mx-auto px-8 py-2 my-10 justify-around flex-wrap">
        <Form />
        <Result />
      </div>
    </>
  );
}

export default App;
