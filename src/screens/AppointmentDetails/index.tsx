import React, { useEffect, useState } from 'react'
import { Text, ImageBackground, View, FlatList, Alert, Linking, ActivityIndicator, Share, Platform } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { theme } from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png'
import { styles } from './styles';
import { ListHeader } from '../../components/ListHeader';
import { Member, MemberProps } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';
import { AppointmentRouteProps } from '../../routes/app.routes';
import { api } from '../../services/api';

type WidgetProps = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
  presence_count: number;
}

export function AppointmentDetails({route}:AppointmentRouteProps) {
  const [widget, setWidget] = useState<WidgetProps>({}as WidgetProps);
  const guild = route.params.guildSelected;
  const [isLoading, setIsLoading] = useState(true);

  async function fetchGuildDetails() {
    try {
      const { data } = await api.get(`/guilds/${guild.guild.id}/widget.json`);
      setWidget(data);
      
    } catch (error) {
      Alert.alert('Verifique as configurações do servidor. Verifique se o widget está habilitado');
      
    } finally {
      setIsLoading(false);
    }
  }

  function handleOpenGuild(){
    Linking.openURL(widget.instant_invite);
  }

  function handleShareInvitation(){
    const message = Platform.OS == 'ios'?
    `Junte-se à ${guild.guild.name}`
    :widget?.instant_invite;

    Share.share({
      message,
      url: widget?.instant_invite
    })
  }

  useEffect(() => {
    fetchGuildDetails();
  }, [])

  return(
    <Background>
      <Header 
        title="Detalhes"
        action={ widget.instant_invite &&
          <BorderlessButton onPress={handleShareInvitation}>
            <Fontisto
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />
      <ImageBackground 
        source={BannerImg}
        style={styles.banner}
      > 
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {guild?.guild.name}
          </Text>

          <Text style={styles.subtitle}>
            {guild?.description}
          </Text>
        </View>
      </ImageBackground>

      {
        isLoading? 
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </View> 
        :   
        <>
          <ListHeader
            title="Jogadores"
            subtitle={`Total ${widget.presence_count}`}
          />
          {
            widget?.members && 
            <FlatList
              data={widget.members}
              keyExtractor={item=>item.id}
              renderItem={({item})=>(
                <Member 
                  data={item}
                />
              )}
              ItemSeparatorComponent={()=><ListDivider/>}
              style={styles.members}
              fadingEdgeLength={100}
            />
          }
          { 
            widget.instant_invite &&
            <View style={styles.footer}>
            <ButtonIcon onPress={handleOpenGuild}
              text="Entrar na partida"
              />
            </View>
          }
        </>
        
      }
      
      
    </Background>
  );
}
