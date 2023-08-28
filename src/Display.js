import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Display = (props) => {
  const { personData } = props;

  return (
    <Box sx={{ flexGrow: 1, margin: "20px" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {personData.map((person, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>
              Name: {person.name} <br></br>
              Date of Birth: {person.dob} <br></br>
              Contact: {person.contact} <br></br>
              Email: {person.email} <br></br>
              Message: {person.more}
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Display;
