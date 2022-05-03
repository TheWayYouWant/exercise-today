import { TextField } from "@mui/material";
import styled from "styled-components";

export const CalendarLayout = styled.div`
  display: flex;
  justify-content: center;

  width: 2000px;
  margin: auto;
  border: 1px solid green;
`;

export const CalendarBodyLayout = styled.div`
  display: flex;
  flex-direction: column;

  margin: 3rem 1rem 0 1rem;
  padding: 1rem;

  border: 1px solid blue;

  width: 400px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 0.1;

  border: 1px solid pink;
  border-radius: 10px;
`;

export const BodyWrapper = styled.section`
  flex: 0.9;
  display: flex;
  flex-direction: column;

  border: 1px solid green;
  border-radius: 10px;

  margin-top: 1rem;

  padding: 1rem;
`;

export const TodayChecked = styled.article`
  display: flex;
  border: 1px solid pink;
  flex: 0.1;
`;

export const TodayWeight = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WeightTitle = styled.h4`
  margin-bottom: 0;
`;

export const StyledTextField = styled(TextField)`
  width: 40%;
  justify-content: center;
`;