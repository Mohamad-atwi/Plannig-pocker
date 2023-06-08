import React from "react";
import Typography from "@mui/material/Typography";

const TermsAndConditions = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Planning Poker Game - GBDR Edition
      </Typography>
      <Typography variant="body1" paragraph>
        In this game, we will use the GBDR scale to evaluate the complexity,
        risks, and uncertainties associated with different tasks. Let's
        familiarize ourselves with the terms used in this game:
      </Typography>

      <Typography variant="body1" paragraph>
        <strong>1. Good (G):</strong> Tasks categorized as "Good" are those that
        are relatively straightforward, well understood, and have minimal risks
        or uncertainties. These tasks are considered low complexity and can be
        accomplished with ease.
      </Typography>

      <Typography variant="body1" paragraph>
        <strong>2. Bad (B):</strong> "Bad" tasks are more challenging and may
        involve various difficulties or complexities. These tasks often require
        more effort, time, or resources to complete. They can be risky and may
        involve potential hurdles or unknowns.
      </Typography>

      <Typography variant="body1" paragraph>
        <strong>3. Doubtful (D):</strong> "Doubtful" tasks refer to those that
        contain significant uncertainties, dependencies, or ambiguous
        requirements. These tasks are less predictable and may require further
        analysis, discussion, or investigation to gain clarity and reduce
        ambiguity.
      </Typography>

      <Typography variant="body1" paragraph>
        <strong>4. Risky (R):</strong> "Risky" tasks are associated with high
        levels of uncertainty, potential roadblocks, or significant risks. These
        tasks may have dependencies on external factors, have a higher chance of
        encountering obstacles, or require extensive research and planning to
        mitigate risks effectively.
      </Typography>

      <Typography variant="body1" paragraph>
        As we estimate the complexity and risks of each task, we will
        collectively assign a GBDR value to represent our consensus. Each
        participant will use a deck of cards numbered from 1 to 10 (or Fibonacci
        sequence) to cast their votes. After voting, we will discuss any
        discrepancies and attempt to reach a consensus. The purpose is to align
        our understanding of the tasks and ensure a shared vision of the
        project.
      </Typography>

      <Typography variant="body1" paragraph>
        Remember, the GBDR scale is subjective, and individual perspectives may
        differ. It's important to communicate and discuss your reasoning behind
        assigning a particular value to encourage productive conversations and
        foster a better understanding of the project.
      </Typography>

      <Typography variant="body1" paragraph>
        Let's get started with the Planning Poker Game - GBDR Edition!
      </Typography>
    </div>
  );
};

export default TermsAndConditions;
