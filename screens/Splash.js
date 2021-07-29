import React, { useEffect } from "react";
import { Alert } from "react-native";
import styled from "styled-components/native";

const MainContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const MainText = styled.Text`
  font-size: 16px;
  font-weight: 400;
`;

export default function Splash() {
  return (
    <MainContainer>
      <MainText>Loading ...</MainText>
    </MainContainer>
  );
}
