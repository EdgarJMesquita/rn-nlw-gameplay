import React from "react";
import { Image, View } from "react-native";
import { SvgProps } from "react-native-svg";
import DiscordIcon from '../../assets/discord.png';
import { styles } from './styles'; 

type Props = {
  iconID: string;
  guildId: string;
}

export function GuildIcon({iconID, guildId}:Props) {
  const uri = `${process.env.CDN_IMAGE}/icons/${guildId}/${iconID}.png`;
  const placeholderImage = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnektony.com%2Fwp-content%2Fuploads%2F2019%2F07%2Fdiscord-icon.png&f=1&nofb=1'

  return(
    <View style={styles.container}>
      {
        iconID? 
        <Image 
          source={{uri}}
          style={styles.image}
          resizeMode="cover"
        />
        :
        <Image
          source={{uri: placeholderImage}}
          style={styles.image}
        />

      }
    </View>
  );
}