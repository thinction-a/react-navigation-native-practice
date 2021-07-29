import React, { useEffect, useState, useMemo } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { AuthContext } from "./context";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Detail from "./screens/Detail";
import CreatePost from "./screens/CreatePost";
import Splash from "./screens/Splash";
import SignIn from "./screens/SignIn";
import CreateAccount from "./screens/CreateAccount";
import Search from "./screens/Search";
import Search2 from "./screens/Search2";
import TabDetail from "./screens/TabDetail";

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen
        name="Detail"
        component={Detail}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </HomeStack.Navigator>
  );
};

const SearchStack = createStackNavigator();
const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={Search} />
      <SearchStack.Screen name="Search2" component={Search2} />
    </SearchStack.Navigator>
  );
};

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
};

const TopTabs = createMaterialTopTabNavigator();
const TopTabsScreen = () => {
  return (
    <TopTabs.Navigator>
      <TopTabs.Screen name="Tab1" component={TabDetail} />
      <TopTabs.Screen name="Tab2" component={TabDetail} />
      <TopTabs.Screen name="Tab3" component={TabDetail} />
    </TopTabs.Navigator>
  );
};

const BottomTabs = createBottomTabNavigator();
const BottomTabsScreen = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Home" component={HomeStackScreen} />
      <BottomTabs.Screen name="Search" component={SearchStackScreen} />
    </BottomTabs.Navigator>
  );
};

const Drawer = createDrawerNavigator();
const DrawerScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTabsScreen} />
      <Drawer.Screen name="Profile" component={ProfileStackScreen} />
    </Drawer.Navigator>
  );
};

const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: "로그인 하기",
        }}
      />
      <AuthStack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{ title: "계정 생성" }}
      />
    </AuthStack.Navigator>
  );
};

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => {
  return (
    <RootStack.Navigator headerMode="none">
      {userToken ? (
        <RootStack.Screen
          name="App"
          component={DrawerScreen}
          options={{ animationEnabled: false }}
        />
      ) : (
        <RootStack.Screen
          name="Auto"
          component={AuthStackScreen}
          options={{ animationEnabled: false }}
        />
      )}
    </RootStack.Navigator>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  } else {
    return (
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          <RootStackScreen userToken={userToken} />
        </NavigationContainer>
      </AuthContext.Provider>
    );
  }
}
