import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {Feather} from '@expo/vector-icons';
import { View, Image, Text, FlatList, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';


import styles from './styles';

import logoImg from '../../assets/logo.png'

export default function Detail(){

    const navigation = useNavigation();
    const route = useRoute();

    const incident = route.params.incident;
    const message = `Olá ${incident.nome}, estou em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de R$ ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' } ).format(incident.value)}`;

    function navigateBack(){

        navigation.goBack();

    }

    function sendMail(){

        MailComposer.composeAsync({
            subject: `Heroi do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message
        });

    }

    function sendWhatsApp(){

        Linking.openURL(`whatsapp://send?phone=5511${incident.whatsapp}&text=${message}`);

    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>

            <Image source={logoImg} />
            <TouchableOpacity onPress={navigateBack}>
                <Feather
                    name="arrow-left"
                    size={28}
                    color="#E82041" />
            </TouchableOpacity>

            </View>

            <FlatList 
                    style={styles.list}
                    data={[incident]}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={incident => String(incident.id) }
                    renderItem={( { item: incident } ) => 
            ( 
                <View>

                    <View style={styles.Box}>

                        <Text style={ [ styles.IncidentProperty, { marginTop: 0 } ] }>Caso:</Text>
                        <Text style={styles.IncidentValue}>{incident.title}</Text>

                        <Text style={styles.IncidentProperty}>ONG:</Text>
                        <Text style={styles.IncidentValue}>{incident.nome}</Text>
            
                        <Text style={styles.IncidentProperty}>Descrição:</Text>
                        <Text style={styles.IncidentValue}>{incident.description}</Text>

                        <Text style={styles.IncidentProperty}>Valor:</Text>
                        <Text style={styles.IncidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' } ).format(incident.value)}</Text>

                    </View>
                

                    <View style={ [ styles.Box, { marginBottom: 0 } ] }>

                        <View style={styles.contact}>
                            <Text style={styles.heroTitle}>Salve o dia</Text>
                            <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                            <Text style={styles.heroDescription}>Entre em contato</Text>
                        </View>

                        <View style={styles.actions}>
                            <TouchableOpacity style={styles.action}
                                            onPress={sendWhatsApp}
                            >

                                <Text style={styles.actionText}>WhatsApp</Text>

                            </TouchableOpacity>

                            <TouchableOpacity style={styles.action}
                                            onPress={sendMail}
                            >

                                <Text style={styles.actionText}>E-mail</Text>

                            </TouchableOpacity>
                        </View>

                    </View>

                </View>        

            ) } />

        </View>
    );

}