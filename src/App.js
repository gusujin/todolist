import axios from "axios";
import { useState, useCallback, useEffect } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);

  const getTodoList = useCallback(async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1/todos"
    );
    setTodoList(data); //response.data 담기
  }, []);

  useEffect(() => {
    getTodoList();
  }, []);

  const createTodo = useCallback(async () => {
     await axios.post("https://jsonplaceholder.typicode.com/users/1/todos", {
      "userId": 1000,
      "id":1,
      "title": "해아할아ㅓ라ㅣㅓ나ㅓㅇㄹr2222",
      "completed": true,
    }).then(function (response) {
      console.log(response);
      const { data } = response;
      setTodoList([...todoList, data]);
    }).catch(function (error) {
      console.log(error);
    });
  }, []);

  const updateTodo = useCallback(async() => {
   await axios.put("https://jsonplaceholder.typicode.com/users/1/todos", {
     userId: 1,
     id:1,
      title: "vero rerum temporibus dolor2222",
      completed: true,
    }).then(function (response) {
      console.log(response);
      
    }).catch(function (error) {
      console.log(error);
    });
  }, []);

  const deleteTodo = useCallback(() => {
    setTodoList([]);
  }, []);

  return (
    <div>
      <button onClick={createTodo}>호출하기</button>
      <button onClick={updateTodo}>업데이트하기</button>
      <button onClick={deleteTodo}>지우기</button>
      <ul>
        {todoList.map((todo) => (
          <li style={todo.completed ? {color:"gray"} : {color :"red"}} key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
