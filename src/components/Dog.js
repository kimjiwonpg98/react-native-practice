import React from "react";
import styled from "styled-components/native";
import { useFetch } from "../hooks/useFetch";

const StyledImage = styled.Image`
  background-color: #e8d9ff;
  width: 300px;
  height: 300px;
`;

const ErrorMessage = styled.Text`
  font-size: 30px;
  color: #4374d9;
`;

const LoadingMessage = styled.Text`
  font-size: 24px;
  color: #2ecc71;
`;

const URL = `https://dog.ceo/api/breeds/image/random`;

const Dog = () => {
  const { data, error, inProgress } = useFetch(URL);

  return (
    <>
      {inProgress && <LoadingMessage>The API is Loading</LoadingMessage>}
      <StyledImage source={data?.message ? { url: data.message } : null} />
      <ErrorMessage>{error?.message}</ErrorMessage>
    </>
  );
};

export default Dog;
