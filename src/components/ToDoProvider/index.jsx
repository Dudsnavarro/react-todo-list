import { useEffect, useState } from "react";
import ToDoContext from "./ToDoContext";

const TODOS = 'todos';

export function ToDoProvider({ children }) {

  const savedTodos = localStorage.getItem(TODOS)
  const [showDialog, setShowDialog] = useState(false)
  const [selectedTodo, setSelectedTodo] = useState()

  const openFormTodoDialog = (todo) => {
    if ( todo ) {
      setSelectedTodo(todo)
    }
    setShowDialog(true)
  }

  const closeFormTodoDialog = () => {
    setShowDialog(false)
    setSelectedTodo(null)

  }

    const [todos, setTodos] = useState(() => {
    try {
      return savedTodos ? JSON.parse(savedTodos) : [];
    } catch {
      return [];
    }
  });

  const addTodo = (formaData) => {
    const description = formaData.get("description");
    setTodos((prevState) => { 
      const todo = {
        id: prevState.length + 1,
        description: description,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      return [...prevState, todo];
    });
  };

    useEffect(() => {
        localStorage.setItem(TODOS, JSON.stringify(todos))
    }, [todos])

  const toggleTodoCompleted = (todo) => {
    setTodos((prevState) => {
      return prevState.map((t) => {
        if (t.id == todo.id) {
          return {
            ...t,
            completed: !t.completed,
          };
        }
        return t;
      });
    });
  };

  const deleteTodo = (todo) => {
    setTodos((prevState) => {
      return prevState.filter((t) => t.id != todo.id);
    });
  };

  const editTodo = (formaData) => {
    setTodos((prevState) => {
      return prevState.map((t) => {
        if (t.id == selectedTodo.id) {
          return {
            ...t,
            description: formaData.get('description')
          };
        }
        return t;
      });
    });
  };

  return (
    <ToDoContext value={{ todos, addTodo, toggleTodoCompleted, deleteTodo, showDialog, openFormTodoDialog, closeFormTodoDialog, selectedTodo, editTodo }}>
      {children}
    </ToDoContext>
  );
}
