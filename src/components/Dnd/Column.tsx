import {
  Badge,
  Box,
  Heading,
  IconButton,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { ColumnType } from "../../utils/enums";
import { AddIcon } from "@chakra-ui/icons";
import Task from "./Task";
import useColumnTasks from "../../hooks/useColumnTask";
import useColumnDrop from "../../hooks/useColumnDrop";

const ColumnColorScheme: Record<ColumnType, string> = {
  Todo: "gray",
  "In progress": "blue",
  Blocked: "red",
  Completed: "green",
};

const Column = ({ column }: { column: ColumnType }) => {
  const {
    tasks,
    addEmptyTask,
    updateTask,
    deleteTask,
    dropTaskFrom,
    swapTasks,
  } = useColumnTasks(column);

  const { dropRef, isOver } = useColumnDrop(column, dropTaskFrom);
  const columnTasks = tasks.map((task, index) => (
    <Task
      index={index}
      key={task.id}
      onDelete={deleteTask}
      onUpdate={updateTask}
      task={task}
      onDropHover={swapTasks}
    ></Task>
  ));
  return (
    <Box>
      <Heading>
        <Badge
          px={2}
          py={1}
          rounded="md"
          colorScheme={ColumnColorScheme[column]}
        >
          {column}
        </Badge>
      </Heading>
      <IconButton
        size="xs"
        width="full"
        color={useColorModeValue("gray.500", "gray.400")}
        backgroundColor={useColorModeValue("gray.100", "gray.700")}
        _hover={{ backgroundColor: useColorModeValue("gray.200", "gray.600") }}
        aria-label="add-task"
        py={2}
        variant="solid"
        colorScheme="black"
        icon={<AddIcon />}
        onClick={addEmptyTask}
      />
      <Stack
        ref={dropRef}
        direction={{ base: "row", md: "column" }}
        h={{ base: 300, md: 600 }}
        p={4}
        mt={2}
        spacing={4}
        backgroundColor={useColorModeValue("gray.50", "gray.900")}
        rounded="lg"
        boxShadow="md"
        overflow="auto"
        opacity={isOver ? 0.5 : 1}
      >
        {columnTasks}
      </Stack>
    </Box>
  );
};

export default Column;
