import React, { useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import { Button, Input } from "@mui/material";
import Box from "@mui/material/Box";

import { createStory } from "../services/storyServices";

export default function StoryForm({ sessionId }) {
  const [inputValue, setInputValue] = useState("");
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [summaries, setSummaries] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddStory = () => {
    if (inputValue.trim() !== "") {
      createStory(inputValue, sessionId);
      setInputValue("");
    }
  };

  const handleClearInput = () => {
    setInputValue("");
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setSelectedFileName(file.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      const xmlString = e.target.result;
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "text/xml");

      const summaryElements = xmlDoc.getElementsByTagName("summary");
      const extractedSummaries = Array.from(summaryElements).map(
        (element) => element.textContent
      );

      setSummaries(extractedSummaries);

      // Add each extracted summary as a new story
      extractedSummaries.forEach((summary) => {
        if (summary.trim() !== "") {
          createStory(summary, sessionId);
        }
      });
    };

    reader.readAsText(file);
    console.log("Selected file:", file);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const isInputEmpty = inputValue.trim() === "";
  const isAddButtonDisabled = isInputEmpty;

  return (
    <Box display="flex" alignItems="center" margin="10">
      <TextField
        label="Story"
        multiline
        rows={3}
        variant="outlined"
        value={inputValue}
        onChange={handleInputChange}
        inputProps={{ maxLength: 255 }}
        sx={{ marginBottom: "16px", width: "100%", overflowY: "auto" }}
      />
      <Box sx={{ marginLeft: "8px" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddStory}
          disabled={isAddButtonDisabled}
          sx={{ marginBottom: "8px", width: "100%" }}
        >
          Add Story
        </Button>
        <Button
          variant="contained"
          onClick={handleClearInput}
          disabled={isInputEmpty}
          sx={{ marginBottom: "8px", width: "100%" }}
        >
          Clear
        </Button>

        <Input
          type="file"
          inputRef={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileInputChange}
        />
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{ width: "100%" }}
        >
          Import Jira file
        </Button>
      </Box>
    </Box>
  );
}
