import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  Switch,
} from 'react-native';
import { router } from 'expo-router';

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* NAVBAR */}
        <View style={styles.navbar}>
          <View style={styles.navLeft}>
            <TouchableOpacity onPress={() => router.push('/')}>
              <View style={styles.logoCircle} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/')}>
              <Text style={styles.navBrandLink}>Home</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.navRight}>
            <Text style={styles.navLinkActive}>Login</Text>
            <TouchableOpacity style={styles.registerBtn} onPress={() => router.push('/register')}>
              <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* HEADER ROW WITH BACK */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Text style={styles.backIcon}>{'‹'}</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Welcome back!</Text>
        </View>

        {/* CARD */}
        <View style={styles.card}>
          {/* Email */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder=""
              placeholderTextColor="#aaa"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Password */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder=""
              placeholderTextColor="#aaa"
              secureTextEntry
            />
          </View>

          {/* Remember + Forgot */}
          <View style={styles.rowBetween}>
            <View style={styles.rowLeftSmall}>
              <Switch value={true} />
              <Text style={styles.smallNote}>Remember me</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.smallNote}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          {/* Login button */}
          <TouchableOpacity style={styles.primaryBtn}>
            <Text style={styles.primaryBtnText}>Login</Text>
          </TouchableOpacity>

          {/* Bottom note */}
          <TouchableOpacity onPress={() => router.push('/register')}>
            <Text style={styles.bottomNote}>
              Don't have and account? <Text style={styles.linkText}>Register</Text>
            </Text>
          </TouchableOpacity>
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Learn more</Text>
          </TouchableOpacity>

          <Text style={styles.footerDivider}>||</Text>

          <TouchableOpacity>
            <Text style={styles.footerLink}>Privacy</Text>
          </TouchableOpacity>

          <Text style={styles.footerDivider}>||</Text>

          <TouchableOpacity>
            <Text style={styles.footerLink}>Contact</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const GREEN_BG = '#f8ffee';
const GREEN_ACCENT = '#A3B89C';
const CARD_BG = '#ffffff';
const INPUT_BG = '#faf8f4';
const BORDER_LIGHT = '#eeeeee';
const GRAY_TEXT = '#4a4a4a';

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: GREEN_BG,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  /* NAVBAR */
  navbar: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderColor: '#e5e5e5',
    paddingHorizontal: 16,
    paddingVertical: 14,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: 16,
    marginTop: 8,
  },
  navLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logoCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: GREEN_ACCENT,
  },
  navBrandLink: {
    fontSize: 16,
    color: '#000',
  },
  navRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  navLinkActive: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  registerBtn: {
    backgroundColor: GREEN_ACCENT,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
  },
  registerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },

  /* HEADER ROW */
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  backBtn: {
    backgroundColor: '#d9d9d9',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  backIcon: {
    fontSize: 16,
    color: '#000',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },

  /* CARD */
  card: {
    backgroundColor: CARD_BG,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: BORDER_LIGHT,
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginBottom: 32,

    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },

  inputGroup: {
    marginBottom: 16,
  },
  label: {
    color: '#000',
    fontSize: 14,
    marginBottom: 6,
  },
  input: {
    backgroundColor: INPUT_BG,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: '#000',
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  rowLeftSmall: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  smallNote: {
    fontSize: 12,
    color: GRAY_TEXT,
  },

  primaryBtn: {
    backgroundColor: GREEN_ACCENT,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  primaryBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },

  bottomNote: {
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
  },
  linkText: {
    textDecorationLine: 'underline',
  },

  /* FOOTER */
  footer: {
    borderTopWidth: 1,
    borderColor: '#dcdcdc',
    paddingTop: 20,

    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 12,
    paddingBottom: 40,
  },
  footerLink: {
    fontSize: 14,
    color: GRAY_TEXT,
  },
  footerDivider: {
    fontSize: 14,
    color: GRAY_TEXT,
    paddingHorizontal: 4,
  },
});