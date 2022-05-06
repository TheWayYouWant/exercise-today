import { Button, TextField } from "@mui/material";
import styled from "styled-components";

export const CalendarLayout = styled.div`
  display: flex;
  justify-content: center;

  width: 1600px;
  margin: 3rem auto 0 auto;
`;

export const CalendarBodyLayout = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 1rem 0 1rem;
  padding: 1rem;

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  width: 400px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 0.1;

  border-radius: 10px;
`;

export const BodyWrapper = styled.section`
  flex: 0.9;
  display: flex;
  flex-direction: column;

  /* border: 1px solid grey; */
  border-radius: 10px;

  margin-top: 1rem;

  padding: 1rem;
`;

export const TodayChecked = styled.article`
  display: flex;
  flex: 0.1;
  border-bottom: 2px solid grey;
  margin-bottom: 0.3rem;
`;

export const TodayWeight = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  margin-bottom: 0.3rem;
`;

export const InputWeightWrapper = styled.div`
  width: 30%;
`;

export const WeightTitle = styled.h4`
  margin-bottom: 0;
`;

export const StyledTextField = styled(TextField)`
  width: 15%;
  margin-left: 5rem;
`;

export const StyledButton = styled(Button)`
  color: black;
  margin-top: 1rem;
`;
