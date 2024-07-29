import { Card, CardContent, Typography, Box } from "@mui/material";
import { UserProfile } from "../component/user-profile-view";

interface ProfileCardProps {
  profile: UserProfile;
}

export const UserProfileCard = ({ profile }: ProfileCardProps) => {
  return (
    <>
      <Card sx={{ maxWidth: 345, m: 2 }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            {profile.name}
          </Typography>
          <Typography variant="subtitle1">{profile.job}</Typography>
          <Typography variant="body1">{profile.email}</Typography>
        </CardContent>
      </Card>
    </>
  );
};
