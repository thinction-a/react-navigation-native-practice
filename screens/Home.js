import * as React from "react";
import styled from "styled-components/native";

const MainContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const MainText = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

export default function Home() {
  return (
    <MainContainer>
      <MainText>Hello World!</MainText>
    </MainContainer>
  );
}
