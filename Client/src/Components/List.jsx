import React from "react";
import { Box, Typography, Button } from "@mui/material";

const List = () => {
  const object = [
    {
      name: "Saving",
      color: "#f9c74f",
    },
    {
      name: "Investment",
      color: "#36A2EB",
    },
    {
      name: "Expense",
      color: "#FE6B8B",
    },
  ];

  return (
    <Box sx={{ mt: { xs: 4, md: 6 }, mb: { xs: 12, md: 6 } }}>
      <Typography
        variant="h6"
        color="initial"
        fontWeight={600}
        textAlign="center"
      >
        History
      </Typography>

      {object.map((v, i) => {
        return <Transcation key={i} category={v} />;
      })}
    </Box>
  );
};

const Transcation = ({ category }) => {
  if (!category) return null;
  return (
    <Box
      backgroundColor="background.list"
      sx={{
        borderRight: `8px solid ${category.color ?? ""}`,
        borderRadius: "6px",
        py: 0.5,
        mt: 1,
        display: "flex",
      }}
    >
      <Button>Delete</Button>
      <Box sx={{ textAlign: "center", width: "75%" }}>
        <Typography variant="h6" color="initial">
          {category.name ?? ""}
        </Typography>
      </Box>
    </Box>
  );
};

export default List;
