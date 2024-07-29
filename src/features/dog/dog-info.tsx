import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export interface DogInfoProps {
  name: string;
  age: number;
  breed: string;
}

export function DogInfo({ name, age, breed }: DogInfoProps) {
  return (
    <Card sx={{ flex: "1 1 33%" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2">{age}</Typography>
        <Typography variant="body2">{breed}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
