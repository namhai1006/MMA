import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Favorites({ navigation }) {
  const [ratings, setRatings] = useState({});

  const handleStarPress = (bookTitle, star) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [bookTitle]: star,
    }));
  };

  const books = [
    { title: 'Càng Kỷ Luật Càng Tự Do', image: require('../assets/book1webp.webp') },
    { title: 'Chiến Binh Cầu Vồng', image: require('../assets/book2.webp') },
    { title: '30 đề thi vào lớp 10 môn tiếng Anh', image: require('../assets/book3.jpg') },
    { title: 'Kĩ Năng Buông Bỏ', image: require('../assets/book4.png') },
    { title: 'Doraemon và những chuyến phiêu lưu kỳ thú', image: require('../assets/book5.webp') },
    { title: 'Naruto', image: require('../assets/book6.jpg') },
    { title: 'One Piece và đại hải trình', image: require('../assets/book7.jpg') },
    { title: 'Đạo lý làm người', image: require('../assets/book8.jpg') },
  ];

  // Sắp xếp các quyển truyện theo số lượng bầu chọn sao
  const sortedBooks = books.sort((a, b) => (ratings[b.title] || 0) - (ratings[a.title] || 0));

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <FontAwesome name="bars" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Truyện đã yêu thích</Text>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.bookGrid}>
          {sortedBooks.map((book, index) => (
            <View key={index} style={styles.bookItem}>
              <Image source={book.image} style={styles.bookImage} />
              <Text style={styles.bookTitle}>{book.title}</Text>
              <View style={styles.starsContainer}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <TouchableOpacity key={star} onPress={() => handleStarPress(book.title, star)}>
                    <FontAwesome
                      name={star <= (ratings[book.title] || 0) ? "star" : "star-o"}
                      size={32}
                      color={star <= (ratings[book.title] || 0) ? "#FFD700" : "#000"}
                      style={styles.star}
                    />
                  </TouchableOpacity>
                ))}
              </View>
              <Text style={styles.ratingText}>Bạn đã chọn {ratings[book.title] || 0} sao</Text>
            </View>
          ))}
        </View>
      </ScrollView> 
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
    flex: 1,
  },
  bookGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  bookItem: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 24,
  },
  bookImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  bookTitle: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  starsContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  star: {
    marginHorizontal: 4,
  },
  ratingText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
});