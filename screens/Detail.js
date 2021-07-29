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

export default function Detail({ navigation, route }) {
  return (
    <MainContainer>
      {route.params.name && <MainText>{route.params.name}</MainText>}
      <MainText>Detail Screen</MainText>
      <MoveBtn onPress={() => alert("todo!")}>
        <MoveText>Go To Detail</MoveText>
      </MoveBtn>
      <MoveBtn onPress={() => alert("todo!")}>
        <MoveText>Go To Back</MoveText>
      </MoveBtn>
      <MoveBtn onPress={() => alert("todo!")}>
        <MoveText>Go To Top</MoveText>
      </MoveBtn>
    </MainContainer>
  );
}
