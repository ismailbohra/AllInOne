import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Divider, Typography } from "@mui/material";

export default function CustomCard(props) {
  const divider = props.divider == 0 ? 0 : 2;
  return (
    <Box>
      <Card
        variant="outlined"
        sx={{ boxShadow: 1, borderRadius: 2, ...props.property }}
      >
        <CardContent
          sx={{ ...(props.nopadding && { padding: "0 !important" }) }}
        >
          {props.title && (
            <>
              <Typography className="cardheader" {...props.titleproperty}>
                {props.title}
              </Typography>
              <Divider sx={{ marginBottom: divider }} />
            </>
          )}
          {props.element}
        </CardContent>
      </Card>
    </Box>
  );
}
