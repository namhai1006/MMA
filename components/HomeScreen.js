import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home({ navigation }) {
  const books = [
    { title: 'Càng Kỷ Luật Càng Tự Do', chapters: ['Chương 1', 'Chương 2', 'Chương 3', 'Chương 4', 'Chương 5'], image: require('../assets/book1webp.webp') },
    { title: 'Chiến Binh Cầu Vồng', chapters: ['Chương 1', 'Chương 2', 'Chương 3', 'Chương 4', 'Chương 5'], image: require('../assets/book2.webp') },
    { title: 'Conan và hung thủ trong bóng tối', chapters: ['Chương 1', 'Chương 2', 'Chương 3', 'Chương 4', 'Chương 5'], image: require('../assets/book3.jpg') },
    { title: 'Buroto và chuyến phiêu lưu', chapters: ['Chương 1', 'Chương 2', 'Chương 3', 'Chương 4', 'Chương 5'], image: require('../assets/book4.png') },
    { title: 'Doraemon và những chuyến phiêu lưu kỳ thú', chapters: ['Chương 1', 'Chương 2', 'Chương 3', 'Chương 4', 'Chương 5'], image: require('../assets/book5.webp') },
    { title: 'Naruto', chapters: ['Chương 1', 'Chương 2', 'Chương 3', 'Chương 4', 'Chương 5'], image: require('../assets/book6.jpg') },
    { title: 'One Piece và đại hải trình', chapters: ['Chương 1', 'Chương 2', 'Chương 3', 'Chương 4', 'Chương 5'], image: require('../assets/book7.jpg') },
    { title: 'Đạo lý làm người', chapters: ['Chương 1', 'Chương 2', 'Chương 3', 'Chương 4', 'Chương 5'], image: require('../assets/book8.jpg') },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <FontAwesome name="bars" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Menu</Text>
        <FontAwesome name="key" size={24} color="black" />
      </View>
      <ScrollView style={styles.content}>
        <Image
          source={require('../assets/logo.webp')}
          style={styles.bannerImage}
        />
        <Text style={styles.sectionTitle}>Mới Nhất</Text>
        <View style={styles.bookGrid}>
          {books.map((book, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.bookItem} 
              onPress={() => navigation.navigate('ChapterList', { title: book.title, chapters: book.chapters })}
            >
              <Image
                source={book.image}
                style={styles.bookImage}
              />
              <Text style={styles.bookTitle}>{book.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome name="home" size={24} color="white" />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Profile')}>
          <FontAwesome name="user" size={24} color="white" />
          <Text style={styles.footerText}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    paddingTop: 20, // Thêm padding ở trên cùng để di chuyển toàn bộ nội dung xuống
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
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 16,
  },
  bannerImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  sectionTitle: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  bookItem: {
    width: '48%',
    marginBottom: 16,
  },
  bookImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  bookTitle: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 4,
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
});