import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* NAVBAR */}
        <View style={styles.navbar}>
          <View style={styles.navLeft}>
            <View style={styles.logoCircle} />
            <Text style={styles.brand}>Litterly</Text>
          </View>

          <View style={styles.navRight}>
            <TouchableOpacity onPress={() => router.push('/login')}>
              <Text style={styles.navLink}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerBtn} onPress={() => router.push('/register')}>
              <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* HERO */}
        <View style={styles.hero}>
          <View style={styles.avatar} />

          <Text style={styles.appName}>Litterly</Text>

          <Text style={styles.tagline}>Earn points and grow a tree</Text>

          <TouchableOpacity style={styles.ctaBtn} onPress={() => router.push('/register')}>
            <Text style={styles.ctaText}>Get Started</Text>
          </TouchableOpacity>
        </View>

        {/* FEATURES CARD */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Clean. Earn points. Grow a tree</Text>

          <View style={styles.featuresRow}>
            <TouchableOpacity style={styles.featurePill}>
              <Text style={styles.featureText}>Snap items</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.featurePill}>
              <Text style={styles.featureText}>Track impact</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.featuresRow}>
            <TouchableOpacity style={styles.featurePill}>
              <Text style={styles.featureText}>Clean up</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.featurePill}>
              <Text style={styles.featureText}>Plant trees</Text>
            </TouchableOpacity>
          </View>
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

const GREEN_BG = '#f8ffee'; // very light green background
const GREEN_ACCENT = '#A3B89C'; // muted green (buttons / pills)
const GRAY_PILL = '#d9d9d9'; // gray pill bg

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
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,

    marginBottom: 16,
    marginTop: 8,
  },
  navLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logoCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: GREEN_ACCENT,
  },
  brand: {
    fontSize: 16,
    color: '#000',
    fontWeight: '400',
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

  /* HERO */
  hero: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#dcdcdc',
    marginBottom: 24,
  },
  appName: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
    marginBottom: 12,
  },
  tagline: {
    fontSize: 16,
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: 24,
  },
  ctaBtn: {
    backgroundColor: GREEN_ACCENT,
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 14,
    minWidth: 180,
    alignItems: 'center',
  },
  ctaText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },

  /* CARD */
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#eeeeee',

    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,

    marginBottom: 32,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  featuresRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 12,
  },
  featurePill: {
    flex: 1,
    backgroundColor: GRAY_PILL,
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  featureText: {
    fontSize: 15,
    color: '#000',
    fontWeight: '500',
  },

  /* FOOTER */
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 12,
    paddingBottom: 40,
  },
  footerLink: {
    fontSize: 14,
    color: '#4a4a4a',
  },
  footerDivider: {
    fontSize: 14,
    color: '#4a4a4a',
    paddingHorizontal: 4,
  },
});