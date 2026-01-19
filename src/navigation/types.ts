import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Main: NavigatorScreenParams<BottomTabParamList>;
  ItemDetails: { id: string; name: string };
  Notifications: undefined;
  StorePicker: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Menu: undefined;
  Orders: undefined;
  Loyalty: undefined;
  Profile: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
