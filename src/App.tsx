import { Box, Heading } from "@chakra-ui/react";
import Login from "./components/Login/Login";
import DndMain from "./components/Dnd/DndMain";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState<string[]>([]);
  return (
    <>
      {!(user.length > 0) ? (
        <Box
          padding="2em"
          border="1px"
          borderColor="whiteAlpha.600"
          borderRadius="10px"
          textAlign="center"
          alignItems="center"
          marginTop="200px"
        >
          <Heading marginBottom="30px">Login</Heading>
          <Login setUser={setUser} />
        </Box>
      ) : (
        <DndMain />
      )}
    </>
  );
};

export default App;
