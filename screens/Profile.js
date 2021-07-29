import React, { useContext, useEffect } from "react";
import styled from "styled-components/native";
import { AuthContext } from "../context";

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

export default function Profile({ navigation, route }) {
  const { signOut } = useContext(AuthContext);
  return (
    <MainContainer>
      <MainText>Profile Screen</MainText>
      <MoveBtn onPress={() => navigation.toggleDrawer()}>
        <MoveText>Drawer</MoveText>
      </MoveBtn>
      <MoveBtn onPress={() => signOut()}>
        <MoveText>Sign Out</MoveText>
      </MoveBtn>
    </MainContainer>
  );
}
