import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { getTodosByVisibilityFilter } from "../redux/selector";
import { Todo } from "./Todo";

export const TodoList = () => {
  const { todos, visibilityFilter } = useSelector(state => state);
  const filterTodos = getTodosByVisibilityFilter(todos, visibilityFilter);
  
  return (
    <Box my={3}>
      {filterTodos.length ? filterTodos.map((todo, i) => (
      <Todo key={`todo-${todo.id,i}` } todo={todo}/>
      )) :  <Box textAlign="center" my="4">  No Todo Yay!</Box>}
    </Box>
  );
};

export default TodoList;
