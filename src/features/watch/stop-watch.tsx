import { useState, useEffect, useCallback, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";

export const SimpleStopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [elapsedTime1, setElapsedTime1] = useState(0);
  const startTimeRef = useRef(0);
  const intervalRef = useRef(-1);
  const intervalRef1 = useRef(-1);

  const updateTime = () => {
    setElapsedTime(performance.now() - startTimeRef.current);
  };

  const startStop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current || 0);
      clearInterval(intervalRef1.current || 0);
    } else {
      startTimeRef.current = performance.now() - elapsedTime;
      intervalRef.current = setInterval(updateTime, 10);
      intervalRef1.current = setInterval(() => {
        setElapsedTime1(performance.now() - startTimeRef.current);
      }, 1);
    }
    setIsRunning(!isRunning);
  };

  const formatTime = (time: number): string => {
    const centiseconds = ("0" + (Math.floor(time / 10) % 100)).slice(-2);
    const seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
    const minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);

    return `${minutes}:${seconds}:${centiseconds}`;
  };

  const handleStart = () => startStop();
  const handleStop = () => startStop();
  const handleReset = () => {
    clearInterval(intervalRef.current || 0);
    clearInterval(intervalRef1.current || 0);
    setElapsedTime(0);
    setElapsedTime1(0);
    setIsRunning(false);
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
      <Typography variant="h4">stop watch</Typography>
      <Typography variant="h2">{formatTime(elapsedTime)}</Typography>
      <Typography variant="h2">{formatTime(elapsedTime1)}</Typography>
      <Box sx={{ display: "flex" }}>
        {!isRunning ? (
          <Button variant="contained" onClick={handleStart}>
            시작
          </Button>
        ) : (
          <Button variant="contained" onClick={handleStop}>
            정지
          </Button>
        )}
        <Button variant="contained" color="error" onClick={handleReset}>
          리셋
        </Button>
      </Box>
    </Box>
  );
};
