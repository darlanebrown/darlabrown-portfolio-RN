import { useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import * as Linking from "expo-linking";

const width = Dimensions.get("window").width;

const Contact = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendContactForm = () => {
    let mailto = `mailto:darlanebrown@gmail.com`;
    mailto += `?subject=${subject}`;
    mailto += `&body=${message}`;

    Linking.openURL(mailto);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={require("../../assets/images/contact-me.jpg")}
          style={{
            width: width,
            height: 200,
          }}
          width={width}
          height={200}
          resizeMode="cover"
        />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <Text style={styles.title}>Contact us</Text>
          <Text style={styles.label}>Your name</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
          <Text style={styles.label}>Your email</Text>
          <TextInput style={styles.input} />
          {/* <Text style={styles.label}>Subject</Text> */}
          {/* <TextInput style={styles.input} value={subject} onChangeText={setSubject} /> */}
          <Text style={styles.label}>Your message</Text>
          <TextInput style={styles.input} value={message} onChangeText={setMessage} />
          <Pressable style={styles.btn} onPress={sendContactForm}>
            <Text style={styles.btnText}>Send</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title: { fontSize: 24, fontWeight: "bold", marginTop: 8 },
  label: { fontSize: 16, marginVertical: 8, alignSelf: "flex-start" },
  input: {
    borderWidth: 1,
    padding: 12,
    width: "100%",
    marginBottom: 12,
    borderRadius: 8,
  },
  btn: {
    backgroundColor: "#00f",
    width: "100%",
    padding: 12,
    alignItems: "center",
    marginTop: 20,
    borderRadius: 8,
  },
  btnText: { color: "#fff", fontSize: 18 },
});
