import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const About = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Image
                    source={require('../../assets/images/darla.jpg')}
                    width={400}
                    height={400}
                    style={{
                        width: 400,
                        height: 400,
                    }}
                    resizeMode="contain"
                />
                <Text style={styles.title}>Darla Brown</Text>
                <Text style={styles.info}>
                    Born in Seattle Washington, live between there and Regina
                    Saskatchewan Canada on Piapot Indian reservation until 3
                    years old. We move to Fresno California where I grew up, and
                    the half of my life lived in Oakland California. I headed
                    her own successful catering company employing youth from the
                    community. Through my journey and experiences in life I’ve
                    written novels 3 exact, self-publish 1 on Amazon. And
                    currently working on my 4th. To top it off, I’ve written 4
                    screenplays and currently working on my 5th script. For many
                    many moons ago working at the county hospital, I learn to
                    problem solve computer glitches, without experiences. My
                    co-workers express I was missing my calling, to back to
                    school to learn depth of computer programming. In my tiny
                    spare time, I’d volunteered East bay Collective ‘Feed the
                    hood’, this is where meet at a place and put together
                    toiletry bags and sandwiches to distribute to the homeless
                    encampment. But my passions is support and volunteered Safe
                    Place battered women shelter fundraisers. Pre-covid I belong
                    to dance group, where we performed at venues, parades, and
                    festivals. My passion is music and dancing..
                </Text>
            </ScrollView>
        </View>
    );
};

export default About;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    info: { fontSize: 16, lineHeight: 22, letterSpacing: 0.5 },
});
