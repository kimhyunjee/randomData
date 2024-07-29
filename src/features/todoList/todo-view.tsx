import { FormEvent, useCallback, useState } from "react";
import { faker } from "@faker-js/faker";
import {
  Box,
  TextField,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
} from "@mui/material";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export const MiniTodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddTodo = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      if (newTodo.trim() !== "") {
        setTodos([
          ...todos,
          { id: faker.string.uuid(), text: newTodo.trim(), completed: false },
        ]);
        setNewTodo("");
      }
    },
    [newTodo]
  );

  const handleToggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <Box sx={{ margin: "auto", mt: 4 }}>
      <form onSubmit={handleAddTodo}>
        <Box sx={{ display: "flex", mb: 2 }}>
          <TextField
            fullWidth
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="새 할 일"
            variant="outlined"
            size="small"
          />
          <Button type="submit" variant="contained" sx={{ ml: 1 }}>
            추가
          </Button>
        </Box>
      </form>

      <List>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            onClick={() => handleToggleTodo(todo.id)}
            sx={{ cursor: "pointer" }}
          >
            <ListItemIcon>
              <Checkbox edge="start" checked={todo.completed} />
            </ListItemIcon>
            <ListItemText
              primary={todo.text}
              sx={{ textDecoration: todo.completed ? "line-through" : "none" }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
