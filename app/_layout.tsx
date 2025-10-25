import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerShown: false, // we build custom headers/navbars on each screen
        }}
      >
        {/* "/" */}
        <Stack.Screen name="index" />

        {/* "/login" */}
        <Stack.Screen name="login" />

        {/* "/register" */}
        <Stack.Screen name="register" />

        {/* "/capture" (Scan Item Page) */}
        <Stack.Screen name="capture" />

        {/* "/impact" (Impact Page) */}
        <Stack.Screen name="impact" />
        <Stack.Screen name="profile" />

        {/* "/modal" (optional leftover from template) */}
        <Stack.Screen
          name="modal"
          options={{
            presentation: 'modal',
            headerShown: false,
            title: 'Modal',
          }}
        />
      </Stack>

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}