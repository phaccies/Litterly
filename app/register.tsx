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

export default function RegisterScreen() {
  // when user taps Create account
  const handleCreateAccount = () => {
    // go straight to capture page and clear auth screens from history
    router.replace('/capture');
  };

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
            <TouchableOpacity onPress={() => router.push('/login')}>
              <Text style={styles.navLink}>Login</Text>
            </TouchableOpacity>
            <View style={styles.registerBtn}>
              <Text style={styles.registerText}>Register</Text>
            </View>
          </View>
        </View>

        {/* HEADER ROW WITH BACK */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Text style={styles.backIcon}>{'‹'}</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Create your account</Text>
        </View>

        {/* CARD */}
        <View style={styles.card}>
          {/* first / last name */}
          <View style={styles.rowGap}>
            <View style={styles.flexHalf}>
              <Text style={styles.label}>First name</Text>
              <TextInput style={styles.input} placeholder="" placeholderTextColor="#aaa" />
            </View>

            <View style={styles.flexHalf}>
              <Text style={styles.label}>Last name</Text>
              <TextInput style={styles.input} placeholder="" placeholderTextColor="#aaa" />
            </View>
          </View>

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

          {/* Confirm */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirm password</Text>
            <TextInput
              style={styles.input}
              placeholder=""
              placeholderTextColor="#aaa"
              secureTextEntry
            />
          </View>

          {/* Terms */}
          <View style={styles.rowLeftSmall}>
            <Switch value={true} />
            <Text style={styles.termsNote}>I agree to the Terms and Conditions</Text>
          </View>

          {/* Create btn */}
          <TouchableOpacity style={styles.primaryBtn} onPress={handleCreateAccount}>
            <Text style={styles.primaryBtnText}>Create an account</Text>
          </TouchableOpacity>

          {/* Bottom note */}
          <TouchableOpacity onPress={() => router.push('/login')}>
            <Text style={styles.bottomNote}>
              Already have an account? <Text style={styles.linkText}>Login</Text>
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
  navLink: {
    fontSize: 16,
    color: '#000',
    fontWeight: '400',
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

  rowGap: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  flexHalf: {
    flex: 1,
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

  rowLeftSmall: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  termsNote: {
    fontSize: 12,
    color: GRAY_TEXT,
    flexShrink: 1,
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
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 12,
    paddingBottom: 40,
    paddingTop: 20,
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