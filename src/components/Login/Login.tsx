import { Button, Input, InputGroup, Text } from "@chakra-ui/react";
import { FormEvent, useState } from "react";

interface Props {
  setUser: (name: string[]) => void;
}

const Login = ({ setUser }: Props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const preventReload = (event: FormEvent) => {
    event.preventDefault();
  };

  const handleSubmit = () => {
    if (name === "" || password === "") {
      setError(true);
    } else {
      setError(false);
      setUser([name]);
    }
  };

  return (
    <>
      <form onSubmit={preventReload}>
        <InputGroup
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          display="flex"
          gap="20px"
        >
          <Input
            type="text"
            onChange={(event) => setName(event.target.value)}
            value={name}
          ></Input>
          <Input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          ></Input>
          <Button textAlign="center" onClick={handleSubmit}>
            Sign in
          </Button>
        </InputGroup>
        {error && (
          <Text color="yellow.400" marginTop="10px">
            Ups, please enter all the required information!
          </Text>
        )}
      </form>
    </>
  );
};

export default Login;
