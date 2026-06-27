import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";

export default function SettingsScreen() {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  /**
   * @description this feature is located in the
   * user folder and allows the user to upload a
   * profile picture
   * @returns {string}
   */
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      console.log("error");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      // settings
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled && result.assets[0]) {
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* profile image */}
      <View style={styles.form}>
        <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
          {profileImage ? (
            <Image
              source={{uri: profileImage}} // take image from picker-expo
              style={styles.profileImage}
            />
          ) : (
            <View style={styles.placeholderImage}>
              <Image
                style={styles.image}
                source={require("@/assets/images/user.png")}
              />
          </View>)}
          <View style={styles.editBadge}>
            <Text style={styles.editText}>Edit</Text>
          </View>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 160,
    height: 160,
  },
  form: {
    width: "100%",
    alignItems: "center",
  },
  imageContainer: {
    marginBottom: 32,
    position: "relative",
  },
  placeholderImage: {
    width: 150,
    height: 150,
    position: "relative",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#afafafff",
    borderStyle: "dashed",
  },
  editBadge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#171717ff",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  editText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 100,
  }
});
