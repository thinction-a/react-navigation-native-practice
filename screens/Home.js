import React, { useEffect } from "react";
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

export default function Home({ navigation, route }) {
  return (
    <MainContainer>
      <MainText>Master List Screen</MainText>
      <MoveBtn
        onPress={() =>
          navigation.push("Detail", { name: "React Native by Example" })
        }
      >
        <MoveText>React Native by Example</MoveText>
      </MoveBtn>
      <MoveBtn
        onPress={
          (() => navigation.push("Detail"), { name: "React Native School" })
        }
      >
        <MoveText>React Native School</MoveText>
      </MoveBtn>
      <MoveBtn onPress={() => navigation.toggleDrawer()}>
        <MoveText>Drawer</MoveText>
      </MoveBtn>
    </MainContainer>
  );
}
