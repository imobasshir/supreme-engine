import './App.css';
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { Footer } from "./Components/Footer";
import { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    console.log(todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  }
  const [todos, setTodos] = useState(
    [
      {
        sno: 1,
        title: "Take foods",
        desc: "You need to go to market",
      },
      {
        sno: 2,
        title: "Learn React",
        desc: "You need to go to college",
      },
      {
        sno: 3,
        title: "Watch Movies",
        desc: "You need to go to mall",
      },
    ]
  )
  return (
    <>
      <Header title="My To Do App" />
      <Main todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
