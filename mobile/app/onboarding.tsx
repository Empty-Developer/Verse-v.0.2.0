import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import Animated from 'react-native-reanimated';
import RenderItem from '@/app/components/RenderItem';
import slider from '@/service/options/OnboardingService'


export default function Onboarding() {
  const finishOnboarding = async () => {
    await AsyncStorage.setItem("onboarding", "true");

    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={slider}
        renderItem={({item, index}) => {
          return <RenderItem item={item} index={index}/>
        }}
        keyExtractor={item => item.id}
        scrollEventThrottle={16}
        horizontal={true}
        bounces={false}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}

      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})