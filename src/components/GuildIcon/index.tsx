import React from "react";
import { Image } from "react-native";
import { styles } from './styles'; 



export function GuildIcon() {
  const uri = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnektony.com%2Fwp-content%2Fuploads%2F2019%2F07%2Fdiscord-icon.png&f=1&nofb=1'
  return(
    <Image 
      source={{uri}}
      style={styles.container}
      resizeMode="cover"
    />
  );
}