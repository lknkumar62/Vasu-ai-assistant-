import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Context Providers
import { VasuProvider } from './src/context/VasuContext';
import { VoiceProvider } from './src/context/VoiceContext';
import { MemoryProvider } from './src/context/MemoryContext';
import { SecurityProvider } from './src/context/SecurityContext';
import { AutomationProvider } from './src/context/AutomationContext';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import VoiceScreen from './src/screens/VoiceScreen';
import CommandsScreen from './src/screens/CommandsScreen';
import AutomationScreen from './src/screens/AutomationScreen';
import MemoryScreen from './src/screens/MemoryScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import SecurityScreen from './src/screens/SecurityScreen';
import AccessibilityScreen from './src/screens/AccessibilityScreen';
import CodingScreen from './src/screens/CodingScreen';
import DeploymentScreen from './src/screens/DeploymentScreen';
import LearningScreen from './src/screens/LearningScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <SecurityProvider>
        <MemoryProvider>
          <VoiceProvider>
            <AutomationProvider>
              <VasuProvider>
                <NavigationContainer>
                  <StatusBar style="light" />
                  <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                      headerStyle: { backgroundColor: '#0a0a0a' },
                      headerTintColor: '#00ff88',
                      headerTitleStyle: { fontWeight: 'bold' },
                      cardStyle: { backgroundColor: '#0a0a0a' }
                    }}
                  >
                    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Voice" component={VoiceScreen} />
                    <Stack.Screen name="Commands" component={CommandsScreen} />
                    <Stack.Screen name="Automation" component={AutomationScreen} />
                    <Stack.Screen name="Memory" component={MemoryScreen} />
                    <Stack.Screen name="Settings" component={SettingsScreen} />
                    <Stack.Screen name="Security" component={SecurityScreen} />
                    <Stack.Screen name="Accessibility" component={AccessibilityScreen} />
                    <Stack.Screen name="Coding" component={CodingScreen} />
                    <Stack.Screen name="Deployment" component={DeploymentScreen} />
                    <Stack.Screen name="Learning" component={LearningScreen} />
                  </Stack.Navigator>
                </NavigationContainer>
              </VasuProvider>
            </AutomationProvider>
          </VoiceProvider>
        </MemoryProvider>
      </SecurityProvider>
    </SafeAreaProvider>
  );
}