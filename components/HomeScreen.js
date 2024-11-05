import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Image, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Home({ navigation }) {
  const initialBooks = [
    { title: 'Càng Kỷ Luật Càng Tự Do', chapters: ['Chương 1', 'Chương 2', 'Chương 3', 'Chương 4', 'Chương 5'], image: require('../assets/book1webp.webp') },
    { title: 'Chiến Binh Cầu Vồng', chapters: ['Chương 1', 'Chương 2', 'Chương 3', 'Chương 4', 'Chương 5'], image: require('../assets/book2.webp') },
    { title: 'Conan và hung thủ trong bóng tối', chapters: ['Chương 1', 'Chương 2', 'Chương 3', 'Chương 4', 'Chương 5'], image: require('../assets/book3.jpg') },
    { title: 'Buroto và chuyến phiêu lưu', chapters: ['Chương 1', 'Chương 2', 'Chương 3', 'Chương 4', 'Chương 5'], image: require('../assets/book4.png') },
    { title: 'Doraemon và những chuyến phiêu lưu kỳ thú', chapters: ['Chương 1', 'Chương 2', 'Chương 3', 'Chương 4', 'Chương 5'], image: require('../assets/book5.webp') },
    { title: 'Naruto', chapters: ['Chương 1', 'Chương 2', 'Chương 3', 'Chương 4', 'Chương 5'], image: require('../assets/book6.jpg') },
    { title: 'One Piece và đại hải trình', chapters: ['Chương 1', 'Chương 2', 'Chương 3', 'Chương 4', 'Chương 5'], image: require('../assets/book7.jpg') },
    { title: 'Đạo lý làm người', chapters: ['Chương 1', 'Chương 2', 'Chương 3', 'Chương 4', 'Chương 5'], image: require('../assets/book8.jpg') },
  ];

  const [books, setBooks] = useState(initialBooks);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(initialBooks);
  const [isSearching, setIsSearching] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newChapters, setNewChapters] = useState('');
  const [newImage, setNewImage] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const filtered = books.filter((book) =>
        book.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredBooks(filtered);
    } else {
      setFilteredBooks(books);
    }
  };

  const handleCreateBook = () => {
    const newBook = {
      title: newTitle,
      chapters: newChapters.split(',').map(chapter => chapter.trim()),
      image: newImage ? { uri: newImage } : require('../assets/book1webp.webp'), // Default image if none provided
    };
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
    setFilteredBooks(updatedBooks);
    setModalVisible(false);
    setNewTitle('');
    setNewChapters('');
    setNewImage(null);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setNewImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <FontAwesome name="bars" size={24} color="black" />
        </TouchableOpacity>
        {isSearching ? (
          <TextInput
            style={styles.searchInput}
            placeholder="Search books..."
            value={searchQuery}
            onChangeText={handleSearch}
            onBlur={() => setIsSearching(false)}
            autoFocus
          />
        ) : (
          <>
            <Text style={styles.headerTitle}>Menu</Text>
            <TouchableOpacity onPress={() => setIsSearching(true)}>
              <FontAwesome name="search" size={24} color="black" />
            </TouchableOpacity>
          </>
        )}
      </View>
      <ScrollView style={styles.content}>
        <Image
          source={require('../assets/logo.webp')}
          style={styles.bannerImage}
        />
        <Text style={styles.sectionTitle}>Mới Nhất</Text>
        <View style={styles.bookGrid}>
          {filteredBooks.map((book, index) => (
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
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Home')}>
          <FontAwesome name="home" size={24} color="white" />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Profile')}>
          <FontAwesome name="user" size={24} color="white" />
          <Text style={styles.footerText}>Account</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.fab} onPress={() => setModalVisible(true)}>
        <FontAwesome name="plus" size={24} color="black" />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Create New Book</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Title"
              value={newTitle}
              onChangeText={setNewTitle}
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Chapters (comma separated)"
              value={newChapters}
              onChangeText={setNewChapters}
            />
            <TouchableOpacity style={styles.imagePickerButton} onPress={pickImage}>
              <Text style={styles.imagePickerButtonText}>Pick an image</Text>
            </TouchableOpacity>
            {newImage && <Image source={{ uri: newImage }} style={styles.previewImage} />}
            <TouchableOpacity style={styles.modalButton} onPress={handleCreateBook}>
              <Text style={styles.modalButtonText}>Create</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    flex: 1,
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
  fab: {
    position: 'absolute',
    bottom: 30, // Slightly above the footer
    alignSelf: 'center',
    backgroundColor: 'white',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    borderWidth: 2,
    borderColor: '#f97316',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalInput: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  imagePickerButton: {
    backgroundColor: '#f97316',
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
  },
  imagePickerButtonText: {
    color: 'white',
    fontSize: 16,
  },
  previewImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 16,
  },
  modalButton: {
    width: '100%',
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
    backgroundColor: '#f97316',
    borderRadius: 8,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 18,
  },
});