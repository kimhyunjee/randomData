import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { faker } from "@faker-js/faker";
import { UserProfileCard } from "../component/user-profile-card";
import { useState } from "react";

export interface UserProfile {
  name: string;
  email: string;
  job: string;
}

const generateUserProfile = (): UserProfile => ({
  name: faker.person.fullName(),
  email: faker.internet.email(),
  job: faker.person.jobTitle(),
});

export const UserProfileView = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>(
    generateUserProfile()
  );

  const handleNewProfile = () => {
    setUserProfile(generateUserProfile());
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UserProfileCard profile={userProfile} />
      <Button
        variant="contained"
        onClick={handleNewProfile}
        sx={{ height: "50px" }}
      >
        새 프로필 생성
      </Button>
    </Box>
  );
};
