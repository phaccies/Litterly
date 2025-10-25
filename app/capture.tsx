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

export default function CaptureScreen() {
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
          <Text style={styles.headerTitle}>Your Tree</Text>
        </View>

        {/* TREE PREVIEW BOX */}
        <View style={styles.bigBox} />

        {/* SNAP / AI ASSIST ROW */}
        <View style={styles.actionRowCard}>
          <View style={styles.rowSpace}>
            <View style={styles.snapLabelPill}>
              <Text style={styles.snapLabelText}>Snap a picture:</Text>
            </View>
            <View style={styles.aiAssistPill}>
              <Text style={styles.aiAssistText}>AI assist</Text>
            </View>
          </View>

          <View style={styles.rowSpace}>
            {/* icons row */}
            <View style={styles.iconRow}>
              <View style={styles.circleIconLight}>
                <Text style={styles.circleIconText}>↻</Text>
              </View>
              <View style={styles.circleIconGreen} />
              <View style={styles.circleIconLight}>
                <Text style={styles.circleIconText}>🖼</Text>
              </View>
            </View>
          </View>
        </View>

        {/* PREVIEW READY CARD */}
        <View style={styles.previewCard}>
          <View style={styles.previewLeft}>
            <View style={styles.squareIconLight}>
              <Text style={styles.circleIconText}>🖼</Text>
            </View>
            <View>
              <Text style={styles.previewTitle}>Preview ready</Text>
              <Text style={styles.previewSub}>Detected: Plastic</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.editBtn}>
            <Text style={styles.editBtnText}>Edit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* BOTTOM NAV */}
      <View style={styles.bottomNavWrapper}>
        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={() => router.push('/') } style={styles.navItem}>
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

        </View>
      </View>
    </SafeAreaView>
  );
}

const GREEN_BG = '#f8ffee';
const GREEN_ACCENT = '#A3B89C';
const LIGHT_GRAY_BG = '#d9d9d9';
const CARD_BG = '#f8ffee';
const WHITE = '#ffffff';

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: GREEN_BG,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 120, // leave room for bottom nav
  },

  /* TOP NAV */
  topNav: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: WHITE,
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

  /* BIG TREE BOX */
  bigBox: {
    backgroundColor: '#dcdcdc',
    borderRadius: 10,
    height: 160,
    marginBottom: 20,
  },

  /* ACTION ROW CARD (snap + icons) */
  actionRowCard: {
    backgroundColor: CARD_BG,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ececec',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 16,
  },
  rowSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  snapLabelPill: {
    backgroundColor: LIGHT_GRAY_BG,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  snapLabelText: {
    color: '#000',
    fontSize: 13,
    fontWeight: '500',
  },
  aiAssistPill: {
    backgroundColor: '#efefef',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  aiAssistText: {
    fontSize: 13,
    color: '#000',
  },

  iconRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  circleIconLight: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: LIGHT_GRAY_BG,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleIconGreen: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: GREEN_ACCENT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleIconText: {
    fontSize: 14,
    color: '#000',
  },

  /* PREVIEW READY CARD */
  previewCard: {
    backgroundColor: CARD_BG,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ececec',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 24,
  },
  previewLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: 12,
  },
  squareIconLight: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: LIGHT_GRAY_BG,
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  previewSub: {
    fontSize: 13,
    color: '#000',
  },
  editBtn: {
    alignSelf: 'flex-start',
    backgroundColor: GREEN_ACCENT,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  editBtnText: {
    color: '#fff',
    fontSize: 14,
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