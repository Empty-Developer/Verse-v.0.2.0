import { FlatList, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import Animated, { useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import RenderItem from '@/app/components/RenderItem';
import slider, { OnboardingData } from '@/service/options/OnboardingService'


export default function Onboarding() {
  const finishOnboarding = async () => {
    await AsyncStorage.setItem("onboarding", "true");

    router.replace("/");
  };

  const flatListRef = useAnimatedRef<FlatList<OnboardingData>>();
  /*
    create a sharedValue named x
    for the data scroll
  */
 const x = useSharedValue(0)

 const onScroll = useAnimatedScrollHandler({
  onScroll: event => {
    x.value = event.contentOffset.x
  }
 })

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={slider}
        renderItem={({item, index}) => {
          return <RenderItem item={item} index={index} x={x}/>
        }}
        keyExtractor={item => item.id}
        onScroll={onScroll}
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