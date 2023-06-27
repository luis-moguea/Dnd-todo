import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: (props: {colorMode: string}) => ({
        body: {
            bg: props.colorMode === "dark" ? "gray.800": "white"
        }
    })
})

export default theme