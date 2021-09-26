import React, { useState } from 'react'
import { View, Text, ScrollView, KeyboardAvoidingView, Platform, Image } from 'react-native'
import { Header } from '../../components/Header'
import { CategorySelect } from '../../components/CategorySelect';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles'
import { Background } from '../../components/Background';
import { theme } from '../../global/styles/theme';
import { GuildIcon } from '../../components/GuildIcon';
import { SmallDateInput } from '../../components/SmallDateInput';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { ModalView } from '../../components/ModalView';
import { Guilds } from '../Guilds';
import { GuildProps } from '../../components/Guild';

export function AppointmentCreate() {
  const [category, setCategory] = useState('');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({}as GuildProps);

  function handleCategorySelect(categoryId:string) {
    setCategory(categoryId);
  }

  function handleOpenGuilds() {
    setOpenGuildsModal(prevState=>!prevState);
  }

  function handleGuildSelect(guildSelected:GuildProps) {
    setGuild(guildSelected);
    setOpenGuildsModal(false);

  }

  return (
    <Background>
      <Header 
        title="Agendar partida"
      />
      <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === 'ios'? 'padding' : 'height'}
      >
        <ScrollView>

          <Text style={[styles.label, {marginLeft: 24, marginTop: 25, marginBottom: 19}]}>
            Categoria
          </Text>


          <CategorySelect 
            setCategory={handleCategorySelect}
            categorySelected={category}
            hasCheckBox
          />

          <View style={styles.form}>
            <RectButton
              onPress={handleOpenGuilds}
            >
              <View style={styles.select}>
              
                {guild.icon? 
                  <GuildIcon 
                    icon={guild.icon}
                  />
                  :
                  <View style={styles.image}/>
                }

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {guild.name? guild.name : 'Selecione um servidor'}
                  </Text>
                </View>

                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />

              </View>
            </RectButton>
            

            <View style={styles.field}>
              <View>
                <Text style={[styles.label, {marginBottom:12}]}>
                  Dia e mês
                </Text>
              
                <View style={styles.column}>
                  <SmallDateInput maxLength={2}/>
                  <Text style={styles.divider}>
                    /
                  </Text>
                  <SmallDateInput maxLength={2}/>
                </View>
              </View>

              <View>
                <Text style={[styles.label, {marginBottom:12}]}>
                  Hora e minuto
                </Text>

                <View style={styles.column}>
                  <SmallDateInput maxLength={2}/>
                  <Text style={styles.divider}>
                    :
                  </Text>
                  <SmallDateInput maxLength={2}/>
                </View>
              </View>

            </View>
          
          
            <View style={styles.field}>
              <Text style={styles.label}>
                Descrição
              </Text>
              <Text style={styles.caracteres}>
                Max. 100 caracteres
              </Text>
            </View>

            <TextArea />
            
            <View style={styles.footer}>
              <Button 
                text="Agendar"
              />
            </View>
          </View>

      </ScrollView>

      <ModalView 
        visible={openGuildsModal}
        closeModal={handleOpenGuilds}
      >
        <Guilds 
          handleGuildSelect={handleGuildSelect}
        />
      </ModalView>

    </KeyboardAvoidingView>
  </Background>
  )
}
