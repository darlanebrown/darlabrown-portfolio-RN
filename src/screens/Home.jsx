import {
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const nav = useNavigation();

    const onContactMe = () => {
        nav.navigate('Contact');
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/images/background.jpeg')}
                style={{ width: '100%', height: '100%' }}
            >
                <View style={styles.container}>
                    <Text style={styles.text}>DARLA BROWN</Text>
                    <Text style={styles.text}>Mobile development</Text>
                    <Text style={styles.text}>Web development</Text>
                    <Pressable style={styles.btn} onPress={onContactMe}>
                        <Text style={styles.text}>Contact me</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    text: { fontSize: 30, color: '#fff', fontWeight: 'bold' },
    btn: {
        padding: 20,
        backgroundColor: '#00f',
        borderRadius: 4,
        marginTop: 100,
    },
});
