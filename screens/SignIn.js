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

export default function SignIn({ navigation, route }) {
  const { signIn } = useContext(AuthContext);
  return (
    <MainContainer>
      <MainText>Sign In Screen</MainText>
      <MoveBtn onPress={() => signIn()}>
        <MoveText>Sign In</MoveText>
      </MoveBtn>
      <MoveBtn onPress={() => navigation.push("CreateAccount")}>
        <MoveText>Create Account</MoveText>
      </MoveBtn>
    </MainContainer>
  );
}
