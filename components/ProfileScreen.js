import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen({ route, navigation }) {
  const { email } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <FontAwesome name="bars" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <FontAwesome name="search" size={24} color="black" />
      </View>
      <Image
        source={require('../assets/adaptive-icon.png')} // Thay thế bằng đường dẫn đến ảnh hồ sơ của bạn
        style={styles.profileImage}
      />
      <Text style={styles.name}>Tên người dùng</Text>
      <Text style={styles.email}>{email}</Text>
      <Text style={styles.sectionTitle}>Dự án: Ứng dụng đọc truyện tranh</Text>
      <Text style={styles.sectionContent}>
        Đây là dự án về ứng dụng đọc truyện tranh được thực hiện bởi các sinh viên trường FPT. Ứng dụng cho phép người dùng đọc các truyện tranh yêu thích, lưu lại các truyện đã đọc và đánh dấu các truyện yêu thích.
      </Text>
      <Text style={styles.sectionTitle}>Thành viên trong nhóm:</Text>
      <View style={styles.memberContainer}>
        <Image
          source={require('../assets/adaptive-icon.png')} // Thay thế bằng đường dẫn đến ảnh thành viên
          style={styles.memberImage}
        />
        <View style={styles.memberInfo}>
          <Text style={styles.memberName}>Lê Nam Hải</Text>
          <Text style={styles.memberRole}>Lập Trình Viên</Text>
        </View>
      </View>
      <View style={styles.memberContainer}>
        <Image
          source={require('../assets/adaptive-icon.png')} // Thay thế bằng đường dẫn đến ảnh thành viên
          style={styles.memberImage}
        />
        <View style={styles.memberInfo}>
          <Text style={styles.memberName}>Lê Nguyễn Quốc Đạt</Text>
          <Text style={styles.memberRole}>Lập trình viên</Text>
        </View>
      </View>
      <View style={styles.memberContainer}>
        <Image
          source={require('../assets/adaptive-icon.png')} // Thay thế bằng đường dẫn đến ảnh thành viên
          style={styles.memberImage}
        />
        <View style={styles.memberInfo}>
          <Text style={styles.memberName}>Đặng Trần Gia Huy</Text>
          <Text style={styles.memberRole}>Lập Trình Viên</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Home')}>
          <FontAwesome name="home" size={24} color="white" />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Profile')}>
          <FontAwesome name="user" size={24} color="white" />
          <Text style={styles.footerText}>Account</Text>
        </TouchableOpacity>
      </View>
      {/* Thêm các thành viên khác tại đây */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff', // Nền trắng
    padding: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: '#f97316',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    marginTop: 4,
    fontSize: 12,
    color: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: '#f97316', // Màu cam
    alignSelf: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#f97316', // Màu cam
    textAlign: 'center',
  },
  email: {
    fontSize: 18,
    color: '#666',
    marginBottom: 16,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color: '#f97316', // Màu cam
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
    color: '#333',
  },
  memberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#f97316', // Màu cam
    padding: 10,
    borderRadius: 8,
  },
  memberImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
    borderWidth: 2,
    borderColor: '#ffffff', // Màu trắng
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff', // Màu trắng
  },
  memberRole: {
    fontSize: 16,
    color: '#ffffff', // Màu trắng
  },
});