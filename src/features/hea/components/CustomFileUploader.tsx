import { Button, Input, Box, makeStyles } from "@material-ui/core";

import React, { useRef } from "react";


const useStyles = makeStyles(() => ({
  fileUploadButton: {
    marginLeft: "1rem",
    marginBottom: "0.5rem",
    textTransform:"none"
  },
}));

type CustomFileUploadButtonProps = {
  buttonTitle: string;
  color?: "inherit" | "default" | "primary" | "secondary" | undefined;
};

const CustomFileUploader = ({
  buttonTitle,
  color,
}: CustomFileUploadButtonProps) => {
  const classes = useStyles();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {};

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <Box>
      <Button
        variant="contained"
        color={color}
        className={classes.fileUploadButton}
        onClick={handleButtonClick}
      >
        {buttonTitle}
      </Button>
      <Input
        type="file"
        inputRef={fileInputRef}
        onChange={handleFileChange}
        inputProps={{
          accept: "image/*",
          style: { display: "none" },
        }}
      />
    </Box>
  );
};

export default CustomFileUploader;
