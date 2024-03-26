import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack 
        screenOptions={{
            headerShown: false
        }}
    >
      <Stack.Screen name="details" options={{ animation: 'slide_from_bottom' }} />  
      <Stack.Screen name="home" options={{ animation: 'ios' }} />  
    </Stack>
  )
}