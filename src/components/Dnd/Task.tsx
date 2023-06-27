import { Box, IconButton } from "@chakra-ui/react";
import { TaskModel } from "../../utils/models";
import { DeleteIcon } from "@chakra-ui/icons";
import AutoResizeTextarea from "./AutoResizeTextArea";
import { useTaskDragAndDrop } from "../../hooks/useTaskDragAndDrop";

interface TaskProps {
  index: number;
  task: TaskModel;
  onDelete: (id: TaskModel["id"]) => void;
  onUpdate: (id: TaskModel["id"], updatedTask: TaskModel) => void;
  onDropHover: (i: number, j: number) => void;
}
const Task = ({
  index,
  task,
  onUpdate: handleUpdate,
  onDelete: handleDelete,
  onDropHover: handleDropHover,
}: TaskProps) => {
  const { ref, isDragging } = useTaskDragAndDrop<HTMLDivElement>(
    {
      task,
      index,
    },
    handleDropHover
  );

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTitle = e.target.value;
    handleUpdate(task.id, { ...task, title: newTitle });
  };

  const handleDeleteClick = () => {
    handleDelete(task.id);
  };

  return (
    <Box
      ref={ref}
      as="div"
      role="group"
      position="relative"
      rounded="lg"
      width={200}
      pl={3}
      pr={7}
      pt={3}
      pb={1}
      boxShadow="xl"
      cursor="grab"
      backgroundColor={task.color}
      opacity={isDragging ? 0.5 : 1}
    >
      <IconButton
        position="absolute"
        top={0}
        right={0}
        zIndex={100}
        aria-label="delete-task"
        size="md"
        colorScheme="gray.700"
        icon={<DeleteIcon />}
        onClick={handleDeleteClick}
        opacity={0}
        _groupHover={{ opacity: 1 }}
      ></IconButton>
      <AutoResizeTextarea
        value={task.title}
        fontWeight="semibold"
        cursor="inherit"
        border="none"
        p={0}
        resize="none"
        minHeight={70}
        maxH={200}
        focusBorderColor="none"
        color="gray.700"
        onChange={handleTitleChange}
      ></AutoResizeTextarea>
    </Box>
  );
};

export default Task;
