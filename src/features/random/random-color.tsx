import { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { faker } from "@faker-js/faker";

interface ColorBox {
  id: string;
  color: string;
}

export const RandomColorPalette = () => {
  const [colorPalette, setColorPalette] = useState<ColorBox[]>(
    generateColorPalette()
  );

  function generateColorPalette(): ColorBox[] {
    const loopCount = 10;
    let result: ColorBox[] = [];

    for (let i = 0; i < loopCount; i++) {
      const isOdd = i % 2 === 0;
      if (isOdd) {
        continue;
      }

      result.push({
        id: faker.string.uuid(),
        color: faker.color.rgb(),
      });
    }

    return result;
  }

  const handleNewColor = () => {
    setColorPalette(generateColorPalette());
  };

  return (
    <Box sx={{ p: 3, width: "100%", margin: "auto" }}>
      <Typography variant="h4" gutterBottom align="center">
        색상 팔레트 생성기
      </Typography>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        {colorPalette.map((colorBox) => (
          <Grid item xs={12} sm={6} md={3} key={colorBox.id}>
            <Box
              sx={{
                backgroundColor: colorBox.color,
                height: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {colorBox.color}
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Button variant="contained" onClick={handleNewColor}>
          새 팔레트 생성
        </Button>
      </Box>
    </Box>
  );
};
