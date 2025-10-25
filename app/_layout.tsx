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
          headerShown: false, // we’re building our own headers/navbars
        }}
      >
        {/* "/" */}
        <Stack.Screen name="index" />

        {/* "/login" */}
        <Stack.Screen name="login" />

        {/* "/register" */}
        <Stack.Screen name="register" />

        {/* If you still want modal.tsx to work at /modal, keep this.
            If you don't care about it, you can delete this Screen + delete modal.tsx */}
        <Stack.Screen
          name="modal"
          options={{
            presentation: 'modal',
            // headerShown false because you're doing custom back button styling
            headerShown: false,
          }}
        />
      </Stack>

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}