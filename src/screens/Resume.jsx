import {
    Dimensions,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import { FontAwesome5 } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

const width = Dimensions.get('window').width;

const Resume = () => {
    const nav = useNavigation();

    return (
        <ScrollView style={styles.container}>
            <View style={[styles.row]}>
                <Image
                    source={require('../../assets/images/Darla-animated.jpg')}
                    width={100}
                    height={100}
                    resizeMode="contain"
                    style={{ width: 100, height: 100 }}
                />
                <View>
                    <Text style={styles.title}>Darla Brown</Text>
                    <Text style={styles.subtitle}>
                        Web and Mobile application developer
                    </Text>
                    <Pressable
                        style={styles.btn}
                        onPress={() => nav.navigate('Contact')}
                    >
                        <Text style={styles.btnText}>Hire me</Text>
                    </Pressable>
                </View>
            </View>
            <Text style={styles.title}>Summary</Text>
            <Text style={styles.info}>
            Demonstrated the ability to complete tasks accurately, 
            despite interruptions and competing demands. Creative 
            professional with extensive project, experience from 
            concept to development. I am an innovator, that always 
            figuring a way to create new content.
                
            </Text>
            <View style={styles.divider} />
            <Text style={styles.title}>Professional skills</Text>
            <Text style={styles.subtitle}>HTML</Text>
            <Progress.Bar
                progress={0.9}
                width={width - 24}
                style={{ marginBottom: 50 }}
            />
            <Text style={styles.subtitle}>CSS</Text>
            <Progress.Bar
                progress={0.85}
                width={width - 24}
                style={{ marginBottom: 50 }}
            />
            <Text style={styles.subtitle}>JavaScript</Text>
            <Progress.Bar
                progress={0.8}
                width={width - 24}
                style={{ marginBottom: 50 }}
            />
            <Text style={styles.subtitle}>React</Text>
            <Progress.Bar
                progress={0.8}
                width={width - 24}
                style={{ marginBottom: 50 }}
                color="#198754"
            />
            <Text style={styles.subtitle}>React Native</Text>
            <Progress.Bar
                progress={0.85}
                width={width - 24}
                style={{ marginBottom: 50 }}
                color="#198754"
            />
            <Text style={styles.subtitle}>Git</Text>
            <Progress.Bar
                progress={0.75}
                width={width - 24}
                style={{ marginBottom: 50 }}
                color="#198754"
            />

            <Text style={styles.title}>Work experience</Text>
            <View style={styles.expContainer}>
                <Text style={styles.expTitle}>
                    Medical Secretary, and Billing Technician
                </Text>
                <Text style={styles.expCompany}>at Alameda Health System</Text>
                <Text style={styles.expDuration}>10/2002 to 02/2019</Text>
                <Text>
                    Digitized over data transition medical records and organized
                    files into company's system using Solarian
                </Text>
                <Text>
                    Company's clinics office activities, including customer
                    service, patient appointment management, billing and
                    collections, and office administration
                </Text>
                <Text>
                    Supervised and trained admitting, billing and collection
                    staff
                </Text>
                <Text>
                    Managed medical supply inventory, insurance records, patient
                    charts and company files using online tracking system
                </Text>
            </View>
            <View style={styles.expContainer}>
                <Text style={styles.expTitle}>
                    React-Native and React apprentice
                </Text>
                <Text style={styles.expCompany}>
                    at Bitwise/Alpha-works Apprenticeship
                </Text>
                <Text style={styles.expDuration}>2021 to Present</Text>
                <Text>
                    Scrum, Agile projects in React and React-Native, Github and
                    Git Flow/project board goals to work on real client project,
                    team building exercise
                </Text>
            </View>
            <Text style={styles.title}>Education</Text>

            <View style={styles.expContainer}>
                <Text style={styles.expTitle}>Kickstart Coding bootcamp</Text>
                <Text style={styles.expCompany}>
                    Oakland, CA
                </Text>
                <Text style={styles.expDuration}>2019</Text>
                <Text>
                    Coursework included final projects in Python, JavaScript,
                    and Computer Science fundamentals Wed development Full stack
                </Text>
            </View>
            <View style={styles.expContainer}>
                <Text style={styles.expTitle}>
                    Women Who Code San Francisco/Oakland
                </Text>
                <Text style={styles.expCompany}>Bay Area CA Region</Text>
                <Text style={styles.expDuration}>2019 to Present</Text>
                <Text>
                    co-lead assisting lead with planning and organizing meeting
                    and meetup. Soliciting sponsors for mentorship. Planning
                    study group for preparing algorithm white board test. Study
                    group mentors support.
                </Text>
            </View>
            <View style={styles.expContainer}>
                <Text style={styles.expTitle}>Bitwise Industries bootcamp</Text>
                <Text style={styles.expCompany}>Fresno, CA remote</Text>
                <Text style={styles.expDuration}>2021</Text>
                <Text>
                    Coursework include Javascript, React, Redux, Github using VS
                    code
                </Text>
            </View>
            <Pressable
                style={styles.btn}
                onPress={() => nav.navigate('Contact')}
            >
                <Text style={styles.btnText}>Find me</Text>
            </Pressable>
            <View style={styles.footer}>
                <FontAwesome5
                    name="facebook"
                    size={24}
                    onPress={() => Linking.openURL('https://www.facebook.com/darla.brown.50')}
                />
                <FontAwesome5
                    name="instagram"
                    size={24}
                    onPress={() => Linking.openURL('https://www.instagram.com/darlanebrown26')}
                />
                <FontAwesome5
                    name="twitter"
                    size={24}
                    onPress={() => Linking.openURL('https://www.twitter.com/@darlanebrown26')}
                />
                <FontAwesome5
                    name="github"
                    size={24}
                    onPress={() => Linking.openURL('https://github.com/darlanebrown')}
                />
                <FontAwesome5
                    name="linkedin"
                    size={24}
                    onPress={() => Linking.openURL('https://www.linkedin.com/in/darla-brown-b1383943')}
                />
            </View>
        </ScrollView>
    );
};

export default Resume;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 12 },
    row: { flexDirection: 'row', alignItems: 'center' },
    title: { fontSize: 24, marginBottom: 8 },
    subtitle: { fontSize: 16 },
    btn: { backgroundColor: '#00f', padding: 12, marginTop: 12 },
    btnText: { color: '#fff', fontSize: 20, textAlign: 'center' },
    info: { fontSize: 16 },
    divider: {
        borderBottomWidth: 1,
        marginVertical: 20,
        borderColor: '#a4a4a4',
    },
    expContainer: {
        padding: 8,
        borderWidth: 1,
        borderColor: '#00000020',
        marginVertical: 20,
    },
    expTitle: { fontSize: 20 },
    expCompany: { color: '#6c757d', fontWeight: 'bold' },
    expDuration: { color: '#6c757d' },
    footer: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
    },
});
