import React, { useState } from 'react';
import Img_mov from '../Components/Img-mov/Img_mov';
import Logo_info from '../Components/Logo_info/Logo_info';
import Last from '../Components/Footer/Footer';
import Contact from '../Components/contact/Contact';
import TodoApp from '../Components/todo/TodoApp';
import Todo_btn from '../Components/todo-btn/Todo_btn';
import InternshipSearch from '../Components/FindUs/FindUs'
// import Navbar from '../Components/Navbar/Navbar';
const Home = () => {
  const [showTodo, setShowTodo] = useState(false);
  const [todos, setTodos] = useState([]); // state moved here

  const openTodo = () => setShowTodo(true);
  const closeTodo = () => setShowTodo(false);

  return (
    <div >
      <Logo_info />
      {/* <Navbar setShowLogin={setShowLogin} /> */}
      <Img_mov />
      <InternshipSearch/>
      <Contact />
      <Last />

      {/* floating button */}
      <Todo_btn onOpen={openTodo} />

      {/* popup */}
      {showTodo && (
        <TodoApp
          todos={todos}
          setTodos={setTodos}
          onClose={closeTodo}
        />
      )}
    </div>
  );
};

export default Home;
