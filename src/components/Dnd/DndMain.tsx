import { Heading, Container, SimpleGrid, Box } from "@chakra-ui/react";
import { ColumnType } from "../../utils/enums";
import Column from "./Column";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import DarkModeIconButton from "../DarkModeIconButton";

const DndMain = () => {
  return (
    <>
      <Box flexDirection="column">
        <Heading
          fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
          fontWeight="bold"
          textAlign="center"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
        >
          Drag and drop TO-DO
        </Heading>
        <Box position="absolute" top={2} right={2}>
          <DarkModeIconButton />
        </Box>
        <Container maxWidth="container.lg" px={4} py={10}>
          <DndProvider backend={HTML5Backend}>
            <SimpleGrid
              columns={{ base: 1, md: 4 }}
              spacing={{ base: 16, md: 4 }}
            >
              <Column column={ColumnType.TO_DO} />
              <Column column={ColumnType.IN_PROGRESS} />
              <Column column={ColumnType.BLOCKED} />
              <Column column={ColumnType.COMPLETED} />
            </SimpleGrid>
          </DndProvider>
        </Container>
      </Box>
    </>
  );
};

export default DndMain;
