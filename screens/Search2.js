import React, { useEffect } from "react";
import { Alert } from "react-native";
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

const MoveBtn = styled.TouchableOpacity`
  padding: 4px 8px;
  border-radius: 4px;
  margin-top: 16px;
`;

const MoveText = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: darkblue;
`;

export default function Search2({ navigation, route }) {
  return (
    <MainContainer>
      <MainText>Search2 Screen</MainText>
      <MoveBtn onPress={() => Alert("todo!")}>
        <MoveText>Search 2</MoveText>
      </MoveBtn>
      <MoveBtn onPress={() => Alert("todo!")}>
        <MoveText>React Native School</MoveText>
      </MoveBtn>
    </MainContainer>
  );
}
