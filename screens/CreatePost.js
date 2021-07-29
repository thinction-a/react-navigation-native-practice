import React, { useState } from "react";
import { Dimensions } from "react-native";
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

const TestTextInput = styled.TextInput`
  width: ${Dimensions.get("screen").width - 32 + "px"};
  margin: 0 auto;
  height: 24px;
  background: #fff;
`;

const MoveBtn = styled.TouchableOpacity`
  padding: 4px 8px;
  border: 3px solid #fc9a3f;
  border-radius: 4px;
  margin-top: 16px;
`;

const MoveText = styled.Text`
  font-size: 24px;
  font-weight: 500;
  color: #fc9a3f;
`;

export default function CreatePost({ navigation, route }) {
  const [postText, setPostText] = useState("");
  return (
    <MainContainer>
      <MainText>It's Detail Page</MainText>
      <TestTextInput value={postText} onChangeText={setPostText} multiline />
      <MoveBtn
        onPress={() =>
          navigation.navigate({
            name: "Home",
            params: { post: postText },
            merge: true,
          })
        }
      >
        <MoveText>Done</MoveText>
      </MoveBtn>
    </MainContainer>
  );
}
