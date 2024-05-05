import "./App.css";
import AddTodo from "./Components/AddTodo";
import Footer from "./Components/Footer";
import Intro from "./Components/Intro";
import ListTodo from "./Components/ListTodo";

function App() {
  return (
    <div className="App">
      <Intro />
      <AddTodo />
      <ListTodo />
      <Footer />
    </div>
  );
}

export default App;
