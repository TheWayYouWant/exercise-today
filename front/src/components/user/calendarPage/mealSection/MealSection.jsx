import React, { useCallback, useEffect, useState } from "react";
import {
  MealContainer,
  MealInfoContainer,
  IconWrapper,
  InputWrapper,
  CountWrapper,
  StyledTextField,
  StyledButton,
  MealWrapper,
  FormWrapper,
  Form,
  SubmitImageButton,
} from "./MealSection.style";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import { get, post, postImage } from "../../../../api";

const MealSection = ({
  title,
  type,
  strDate,
  imgUrl,
  setUrl,
  setFoodList,
  setMealCalrorie,
}) => {
  // 음식 리스트
  const [mealOptions, setMealOptions] = useState([]);
  // 선택한 음식
  const [meal, setMeal] = useState(null);
  const [count, setCount] = useState(0);

  const [image, setImage] = useState(null);

  // api
  const getFoods = useCallback(async () => {
    const res = await get("foods");
    setMealOptions(res.data);
  }, []);

  const getTotalCal = async () => {
    if (count === 0) return;
    setMeal(null);
    setCount(0);
    try {
      const res = await post("foods/calories", [
        {
          category: meal,
          volume: count,
        },
      ]);
      // console.log(typeof strDate);
      // const img = await get("dietimage/items/date", {
      //   whenDate: strDate,
      // });
      // console.log(img.data);

      setFoodList((current) => {
        const temp = [...current];
        const find = temp.findIndex((ele) => ele.category === meal);
        if (find < 0) {
          temp.push({
            type,
            category: meal,
            volume: Number(count),
          });
        } else {
          temp[find].volume += Number(count);
        }

        return temp;
      });
      setMealCalrorie((current) => {
        return current + res.data.calories;
      });
    } catch (e) {
      throw new Error(e);
    }
  };

  const handleSubmitImage = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("whenDate", strDate);
      formData.append("type", type);
      formData.append("dietImg", image);

      const res = await postImage("dietimage", formData);
      setUrl(res.data.imgurl);
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    try {
      getFoods();
    } catch (e) {
      throw new Error(e);
    }
  }, []);

  return (
    <MealContainer>
      <h5>{title}</h5>
      <MealWrapper>
        <FormWrapper>
          {/* action="dietimage" method="post" */}
          {imgUrl === null ? (
            <Form onSubmit={handleSubmitImage}>
              <label>
                <input
                  type="file"
                  style={{
                    display: "none",
                  }}
                  accept="image/*"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                />
                <div
                  style={{
                    display: "inline",
                  }}
                >
                  이미지 <br />
                  업로드
                </div>
              </label>
              <SubmitImageButton type="submit">확인</SubmitImageButton>
            </Form>
          ) : (
            <img
              alt="temp"
              src={imgUrl}
              style={{ width: "90px", height: "90px" }}
            ></img>
          )}
        </FormWrapper>
        {/* <Image /> */}
        <MealInfoContainer>
          <InputWrapper>
            <Autocomplete
              disablePortal
              id="food-combo-box"
              sx={{ width: "100%" }}
              renderInput={(params) => <TextField {...params} label="Food" />}
              options={mealOptions}
              size="small"
              value={meal}
              onChange={(e, value) => {
                setMeal(value);
              }}
            />
            <CountWrapper>
              <StyledTextField
                id="count-meal"
                label="개수"
                variant="outlined"
                size="small"
                type="number"
                value={count}
                InputProps={{
                  inputProps: { min: 0 },
                }}
                onChange={(e) => {
                  setCount(e.target.value);
                }}
              />
              <h4 style={{ marginBottom: "0" }}>개</h4>
            </CountWrapper>
            <StyledButton onClick={getTotalCal}>추가</StyledButton>
            {/* <StyeldAddCircleOutlineIcon onClick={getTotalCal} /> */}
          </InputWrapper>
          <IconWrapper></IconWrapper>
        </MealInfoContainer>
      </MealWrapper>
    </MealContainer>
  );
};

export default MealSection;