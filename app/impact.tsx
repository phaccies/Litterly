import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { router } from 'expo-router';

export default function ImpactScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* TOP NAV */}
        <View style={styles.topNav}>
          <View style={styles.topNavLeft}>
            <View style={styles.logoCircle} />
            <Text style={styles.topNavText}>Litterly</Text>
          </View>

          <Text style={styles.topNavText}>Dashboard</Text>

        </View>

        {/* HEADER ROW */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Text style={styles.backIcon}>{'‹'}</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Your Impact</Text>
        </View>

        {/* METRICS GRID */}
        <View style={styles.metricsRow}>
          <View style={styles.metricBox} />
          <View style={styles.metricBox} />
        </View>

        <View style={styles.metricsRow}>
          <View style={styles.metricBox} />
          <View style={styles.metricBox} />
        </View>

        {/* QUICK TIPS CARD */}
        <View style={styles.tipsCard}>
          <View style={styles.tipsHeaderRow}>
            <Text style={styles.tipsTitle}>Quick tips</Text>
            <TouchableOpacity style={styles.viewAllBtn}>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.tipLine} />
          <View style={styles.tipLine} />
          <View style={styles.tipLine} />
        </View>

        {/* ADD NEW ITEM BUTTON */}
        <TouchableOpacity style={styles.addBtn} onPress={() => router.push('/capture')}>
          <Text style={styles.addBtnPlus}>＋</Text>
          <Text style={styles.addBtnText}>Add new item</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* BOTTOM NAV */}
      <View style={styles.bottomNavWrapper}>
        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={() => router.push('/')} style={styles.navItem}>
            <Text style={styles.navIcon}>🏠</Text>
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/capture')} style={styles.navItem}>
            <Text style={styles.navIcon}>📷</Text>
            <Text style={styles.navText}>Capture</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/impact')} style={styles.navItem}>
            <Text style={styles.navIcon}>📊</Text>
            <Text style={styles.navText}>Impact</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/profile')} style={styles.navItem}>
            <Text style={styles.navIcon}>👤</Text>
            <Text style={styles.navText}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const GREEN_BG = '#f8ffee';
const GREEN_ACCENT = '#A3B89C';
const LIGHT_GRAY_BG = '#d9d9d9';
const CARD_BG = '#ffffff';

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: GREEN_BG,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 140, // make space for bottom nav
  },

  /* TOP NAV */
  topNav: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#e5e5e5',
    paddingVertical: 14,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 16,
  },
  topNavLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  logoCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: GREEN_ACCENT,
  },
  topNavText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '400',
    flex: 1,
    textAlign: 'center',
  },

  /* HEADER ROW */
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  backBtn: {
    backgroundColor: LIGHT_GRAY_BG,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  backIcon: {
    fontSize: 16,
    color: '#000',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },

  /* METRICS GRID */
  metricsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  metricBox: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    minHeight: 80,
    borderWidth: 1,
    borderColor: '#efefef',
  },

  /* TIPS CARD */
  tipsCard: {
    backgroundColor: CARD_BG,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ececec',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginTop: 20,
    marginBottom: 24,
  },
  tipsHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    alignItems: 'center',
  },
  tipsTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  viewAllBtn: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  viewAllText: {
    fontSize: 12,
    color: '#000',
  },
  tipLine: {
    backgroundColor: '#dcdcdc',
    borderRadius: 10,
    height: 28,
    marginBottom: 12,
  },

  /* ADD BUTTON */
  addBtn: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    gap: 8,
    backgroundColor: GREEN_ACCENT,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 32,
  },
  addBtnPlus: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  addBtnText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },

  /* BOTTOM NAV */
  bottomNavWrapper: {
    backgroundColor: GREEN_BG,
    borderTopWidth: 1,
    borderColor: '#e5e5e5',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingTop: 16,
    paddingBottom: 28,
    borderTopWidth: 1,
    borderColor: '#e5e5e5',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  navIcon: {
    fontSize: 20,
    color: '#000',
  },
  navText: {
    fontSize: 12,
    color: '#000',
  },
});