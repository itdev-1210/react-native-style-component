import AsyncStorage from '@react-native-community/async-storage';

const AUTH_TOKEN = 'AUTH_TOKEN';
const USER = 'USER';
let user;
let token;

export const getToken = async () => {
  if (token) {
    return Promise.resolve(token);
  }

  token = await AsyncStorage.getItem(AUTH_TOKEN);
  return token;
};

export const signIn = newToken => {
  token = newToken;
  return AsyncStorage.setItem(AUTH_TOKEN, newToken);
};

export const signOut = () => {
  token = null;
  user = null;
  AsyncStorage.removeItem(USER);
  return AsyncStorage.removeItem(AUTH_TOKEN);
};

export const getUser = async () => {
  if (user) {
    return Promise.resolve(user);
  }

  user = JSON.parse(await AsyncStorage.getItem(USER));
  return user;
};

export const setUser = (userInfo) => {
  user = userInfo;
  return AsyncStorage.setItem(USER, JSON.stringify(user));
};
