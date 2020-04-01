import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create(
    {
        list:{
            marginTop: 48,
            marginBottom: 24
        },
        container:{
            flex: 1,
            paddingHorizontal: 24,
            paddingTop: Constants.statusBarHeight + 20
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        Box: {
            padding: 24,
            borderRadius: 8,
            backgroundColor: "#fff",
            marginBottom:16
        },
        IncidentProperty:{
            fontSize: 14,
            color: "#41414d",
            fontWeight: "bold",
            flexDirection: "row",
            marginTop: 24
        },
        IncidentValue:{
            marginTop: 8,
            fontSize: 15,
            color: "#737380",
            flexDirection: "row"
        },
        heroTitle:{
            fontWeight: "bold",
            fontSize: 20,
            color: "#13131a",
            lineHeight: 30
        },
        heroDescription:{
            fontSize: 15,
            color: "#737380",
            marginTop: 16
        },
        actions:{
            marginTop: 16,
            flexDirection: "row",
            justifyContent: 'space-between'
        },
        action:{
            backgroundColor: "#E02041",
            borderRadius: 8,
            height: 50,
            width: "48%",
            justifyContent: "center",
            alignItems: "center"
        },
        actionText:{
            color: "#FFF",
            fontSize: 15,
            fontWeight: "bold"
        }
     }
);