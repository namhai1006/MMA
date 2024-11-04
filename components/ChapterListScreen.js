import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ChapterList({ route, navigation }) {
  const { title, chapters } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  const navigateToChapterDetail = (chapter) => {
    switch (title) {
      case 'Càng Kỷ Luật Càng Tự Do':
        switch (chapter) {
          case 'Chương 1':
            navigation.navigate('ChapterDetail1_1', { title: chapter, bookTitle: title, chapters });
            break;
          case 'Chương 2':
            navigation.navigate('ChapterDetail1_2', { title: chapter, bookTitle: title, chapters });
            break;
          case 'Chương 3':
            navigation.navigate('ChapterDetail1_3', { title: chapter, bookTitle: title, chapters });
            break;
          case 'Chương 4':
            navigation.navigate('ChapterDetail1_4', { title: chapter, bookTitle: title, chapters });
            break;
          case 'Chương 5':
            navigation.navigate('ChapterDetail1_5', { title: chapter, bookTitle: title, chapters });
            break;
          default:
            navigation.navigate('ChapterDetail', { title: chapter, bookTitle: title, chapters });
            break;
        }
        break;
      case 'Chiến Binh Cầu Vồng':
        switch (chapter) {
          case 'Chương 1':
            navigation.navigate('ChapterDetail2_1', { title: chapter, bookTitle: title, chapters });
            break;
          case 'Chương 2':
            navigation.navigate('ChapterDetail2_2', { title: chapter, bookTitle: title, chapters });
            break;
          case 'Chương 3':
            navigation.navigate('ChapterDetail2_3', { title: chapter, bookTitle: title, chapters });
            break;
          case 'Chương 4':
            navigation.navigate('ChapterDetail2_4', { title: chapter, bookTitle: title, chapters });
            break;
          case 'Chương 5':
            navigation.navigate('ChapterDetail2_5', { title: chapter, bookTitle: title, chapters });
            break;
          default:
            navigation.navigate('ChapterDetail', { title: chapter, bookTitle: title, chapters });
            break;
        }
        break;
      case 'Conan và hung thủ trong bóng tối':
        switch (chapter) {
          case 'Chương 1':
            navigation.navigate('ChapterDetail3_1', { title: chapter, bookTitle: title, chapters });
            break;
          case 'Chương 2':
            navigation.navigate('ChapterDetail3_2', { title: chapter, bookTitle: title, chapters });
            break;
          case 'Chương 3':
            navigation.navigate('ChapterDetail3_3', { title: chapter, bookTitle: title, chapters });
            break;
          case 'Chương 4':
            navigation.navigate('ChapterDetail3_4', { title: chapter, bookTitle: title, chapters });
            break;
          case 'Chương 5':
            navigation.navigate('ChapterDetail3_5', { title: chapter, bookTitle: title, chapters });
            break;
          default:
            navigation.navigate('ChapterDetail', { title: chapter, bookTitle: title, chapters });
            break;
        }
        break;
      case 'Buroto và chuyến phiêu lưu':
        switch (chapter) {
          case 'Chương 1':
            navigation.navigate('ChapterDetail4_1', { title: chapter, bookTitle: title, chapters });
            break;
          case 'Chương 2':
            navigation.navigate('ChapterDetail4_2', { title: chapter, bookTitle: title, chapters });
            break;
          case 'Chương 3':
            navigation.navigate('ChapterDetail4_3', { title: chapter, bookTitle: title, chapters });
            break;
          case 'Chương 4':
            navigation.navigate('ChapterDetail4_4', { title: chapter, bookTitle: title, chapters });
            break;
          case 'Chương 5':
            navigation.navigate('ChapterDetail4_5', { title: chapter, bookTitle: title, chapters });
            break;
          default:
            navigation.navigate('ChapterDetail', { title: chapter, bookTitle: title, chapters });
            break;
        }
        break;
      case 'Doraemon và những chuyến phiêu lưu kỳ thú':
        switch (chapter) {
          case 'Chương 1':
            navigation.navigate('ChapterDetail5_1', { title: chapter, bookTitle: title, chapters });
            break;
          case 'Chương 2':
            navigation.navigate('ChapterDetail5_2', { title: chapter, bookTitle: title, chapters });
            break;
          case 'Chương 3':
            navigation.navigate('ChapterDetail5_3', { title: chapter, bookTitle: title, chapters });
            break;
          case 'Chương 4':
            navigation.navigate('ChapterDetail5_4', { title: chapter, bookTitle: title, chapters });
            break;
          case 'Chương 5':
            navigation.navigate('ChapterDetail5_5', { title: chapter, bookTitle: title, chapters });
            break;
          default:
            navigation.navigate('ChapterDetail', { title: chapter, bookTitle: title, chapters });
            break;
        }
        break;
      case 'Naruto':
        switch (chapter) {
          case 'Chương 1':
            navigation.navigate('ChapterDetail6_1', { title: chapter, bookTitle: title, chapters });
            break;
          case 'Chương 2':
            navigation.navigate('ChapterDetail6_2', { title: chapter, bookTitle: title, chapters });
            break;
          case 'Chương 3':
            navigation.navigate('ChapterDetail6_3', { title: chapter, bookTitle: title, chapters });
            break;
          case 'Chương 4':
            navigation.navigate('ChapterDetail6_4', { title: chapter, bookTitle: title, chapters });
            break;
          case 'Chương 5':
            navigation.navigate('ChapterDetail6_5', { title: chapter, bookTitle: title, chapters });
            break;
          default:
            navigation.navigate('ChapterDetail', { title: chapter, bookTitle: title, chapters });
            break;
        }
        break;
      case 'One Piece và đại hải trình':
        switch (chapter) {
          case 'Chương 1':
            navigation.navigate('ChapterDetail7_1', { title: chapter, bookTitle: title, chapters });
            break;
          case 'Chương 2':
            navigation.navigate('ChapterDetail7_2', { title: chapter, bookTitle: title, chapters });
            break;
          case 'Chương 3':
            navigation.navigate('ChapterDetail7_3', { title: chapter, bookTitle: title, chapters });
            break;
          case 'Chương 4':
            navigation.navigate('ChapterDetail7_4', { title: chapter, bookTitle: title, chapters });
            break;
          case 'Chương 5':
            navigation.navigate('ChapterDetail7_5', { title: chapter, bookTitle: title, chapters });
            break;
          default:
            navigation.navigate('ChapterDetail', { title: chapter, bookTitle: title, chapters });
            break;
        }
        break;
      case 'Đạo lý làm người':
        switch (chapter) {
          case 'Chương 1':
            navigation.navigate('ChapterDetail8_1', { title: chapter, bookTitle: title, chapters });
            break;
          case 'Chương 2':
            navigation.navigate('ChapterDetail8_2', { title: chapter, bookTitle: title, chapters });
            break;
          case 'Chương 3':
            navigation.navigate('ChapterDetail8_3', { title: chapter, bookTitle: title, chapters });
            break;
          case 'Chương 4':
            navigation.navigate('ChapterDetail8_4', { title: chapter, bookTitle: title, chapters });
            break;
          case 'Chương 5':
            navigation.navigate('ChapterDetail8_5', { title: chapter, bookTitle: title, chapters });
            break;
          default:
            navigation.navigate('ChapterDetail', { title: chapter, bookTitle: title, chapters });
            break;
        }
        break;
      default:
        navigation.navigate('ChapterDetail', { title: chapter, bookTitle: title, chapters });
        break;
    }
  };

  const showActionSheet = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={showActionSheet}>
          <FontAwesome name="bars" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Menu</Text>
        <FontAwesome name="search" size={24} color="black" />
      </View>
      <Text style={styles.title}>{title}</Text>
      <ScrollView style={styles.content}>
        {chapters.map((chapter, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.chapterItem} 
            onPress={() => navigateToChapterDetail(chapter)}
          >
            <View style={styles.chapterContent}>
              <FontAwesome name="book" size={24} color="#ffffff" style={styles.chapterIcon} />
              <Text style={styles.chapterTitle}>{chapter}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setModalVisible(!modalVisible);
                navigation.navigate('Home');
              }}
            >
              <Text style={styles.modalButtonText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setModalVisible(!modalVisible);
                navigation.navigate('Favorites');
              }}
            >
              <Text style={styles.modalButtonText}>Favorites</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40, // Thêm padding ở trên cùng để tránh trùng với các thanh trạng thái của điện thoại
    paddingHorizontal: 16,
    backgroundColor: '#ffffff', // Nền trắng
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f97316', // Màu cam
    marginBottom: 16,
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
  chapterItem: {
    padding: 16,
    backgroundColor: '#f97316', // Màu cam
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  chapterContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chapterIcon: {
    marginRight: 10,
  },
  chapterTitle: {
    fontSize: 18,
    color: '#ffffff', // Màu trắng
    textAlign: 'center',
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
  modalButton: {
    padding: 10,
    marginVertical: 5,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#f97316',
    borderRadius: 8,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 18,
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