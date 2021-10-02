import React from "react";

import { Home } from "../screens/Home";
import { AppointmentDetails } from "../screens/AppointmentDetails";
import { AppointmentCreate } from "../screens/AppointmentCreate";

import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppointmentProps } from "../components/Appointment";

type RootParamList = {
  Home: undefined,
  AppointmentDetails: { guildSelected: AppointmentProps },
  AppointmentCreate: undefined
}
export type NavigationProps = NativeStackScreenProps<RootParamList>

export type AppointmentRouteProps = NativeStackScreenProps<RootParamList,'AppointmentDetails'> 

const { Navigator, Screen } = createNativeStackNavigator<RootParamList>();

export function AppRoutes() {
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
