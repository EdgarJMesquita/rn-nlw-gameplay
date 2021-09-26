import React from "react";
import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { SvgProps } from "react-native-svg";
import { categories } from "../../utils/category";
import { GuildIcon } from "../GuildIcon";
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { LinearGradient } from "expo-linear-gradient";

export type GuildProps = {
  id: string;
  name: string;
  icon: SvgProps | null;
  owner: boolean;
} 

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
}

type Props = RectButtonProps & {
  data: AppointmentProps
}

export function Appointment({ data, ...rest }:Props) {
  const [category] = categories.filter(category=>category.id === data.category);
  const { owner } = data.guild;
  const { primary, on } = theme.colors;

  return(
    <RectButton {...rest}>
      <View style={styles.container}>

        <LinearGradient
          style={styles.guildIconContainer}
          colors={[theme.colors.secondary50,theme.colors.secondary70]}
        >
          <GuildIcon />

        </LinearGradient>

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>
              { data.guild.name }
            </Text>

            <Text style={styles.category}>
              { category.title }
            </Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />

              <Text style={styles.date}>
                { data.date }
              </Text>
            </View>

            <View style={styles.playersInfo}>
              <PlayerSvg fill={ owner? primary : on }/>
              <Text style={[
                styles.player,
                {color: owner? primary : on}
              ]}>
                { owner? 'Anfitrião': 'Visitante' }
              </Text>
            </View>
         

          </View>
        </View>
      </View>
    </RectButton>
  );
}