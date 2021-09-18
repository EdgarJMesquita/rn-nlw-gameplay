import React from "react";
import { Image } from "react-native";
import { SvgProps } from "react-native-svg";
import { styles } from './styles'; 

type Props = {
  icon: string;
}

export function GuildIcon({icon}:Props) {
  const uri = icon || 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnektony.com%2Fwp-content%2Fuploads%2F2019%2F07%2Fdiscord-icon.png&f=1&nofb=1'
  return(
    <Image 
      source={{uri}}
      style={styles.container}
      resizeMode="cover"
    />
  );
}