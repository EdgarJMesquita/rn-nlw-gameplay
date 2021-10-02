import React from 'react';
import { Modal, Text, ModalProps, View, Image, Pressable } from 'react-native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type Props = ModalProps &{
  setIsModalOpen: (value:boolean)=>void;
  logout: ()=>void;
}


export function LogoutModal({setIsModalOpen, logout,...rest}:Props) {
  return(
    <Modal 
      style={styles.container}
      {...rest}
      transparent
      statusBarTranslucent
      animationType="fade"
    >
      <Pressable onPress={()=>setIsModalOpen(false)} style={styles.overlay}>
        <View style={styles.content}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.title}>Deseja sair do</Text>
            <Text style={[styles.title, {fontFamily: theme.fonts.title700}]}> Game</Text>
            <Text style={[styles.title, {fontFamily: theme.fonts.title700, color: theme.colors.primary}]}>Play</Text>
            <Text style={[styles.title, {fontFamily: theme.fonts.title700}]}>?</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Pressable onPress={()=>setIsModalOpen(false)}  style={[styles.button, {borderColor: '#495BCC', borderWidth: 1, marginRight: 4}]}>
              <RectButton style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.buttonTitle}>Não</Text>
              </RectButton>
            </Pressable>
            <Pressable onPress={logout} style={[styles.button, { backgroundColor: theme.colors.primary, marginLeft: 4 }]}>
              <RectButton style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.buttonTitle}>Sim</Text>
              </RectButton>
            </Pressable>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
}