import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

export const SimpleCounter = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4">count</Typography>
      <Typography variant="h1">{count}</Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button variant="contained" onClick={handleIncrement}>
          +
        </Button>
        <Button variant="contained" onClick={handleDecrement}>
          -
        </Button>
      </Box>
    </Box>
  );
};

export default SimpleCounter;
