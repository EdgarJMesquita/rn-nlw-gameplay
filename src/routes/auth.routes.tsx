import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";
import { AppointmentDetails } from "../screens/AppointmentDetails";
import { AppointmentCreate } from "../screens/AppointmentCreate";
import { Guilds } from "../screens/Guilds";

const { Navigator, Screen } = createNativeStackNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: string;
      SignIn: string;
    }
  }
}

export function AuthRoutes() {
  return(
    <Navigator
      screenOptions={{
        headerShown: false,
       
      }}
    > 
      <Screen 
        name="Home"
        component={ Home }
      />

      <Screen
        name="AppointmentDetails"
        component={AppointmentDetails} 
      />

      <Screen
        name="AppointmentCreate"
        component={AppointmentCreate}
      />
      
    </Navigator>
  );
}