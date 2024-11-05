import React from 'react';
import { Alert, Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ChapterDetail2({ route, navigation }) {
  const { title, bookTitle, chapters } = route.params;

  const handleBackPress = () => {
    Alert.alert(
      "Xác nhận",
      "Bạn có chắc chắn muốn thoát?",
      [
        {
          text: "Hủy",
          style: "cancel"
        },
        {
          text: "Đồng ý",
          onPress: () => navigation.navigate('ChapterList', { title: bookTitle, chapters: chapters })
        }
      ]
    );
  };
  const handleFavoritePress = () => {
    navigation.navigate('Favorites');
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image
        source={require('../../assets/conan4.jpg')} // Thay thế bằng đường dẫn đến ảnh của bạn
        style={styles.image}
      />
      <Image
        source={require('../../assets/conan 5.jpg')} // Thay thế bằng đường dẫn đến ảnh của bạn
        style={styles.image}
      />
      <Image
        source={require('../../assets/conan 6.jpg')} // Thay thế bằng đường dẫn đến ảnh của bạn
        style={styles.image}
      />
      <Text style={styles.content}>Nội dung của {title}...</Text>
      <View style={styles.buttonContainer}>
        <Button title="Yêu thích" onPress={handleFavoritePress} />
        <Button title="Thoát" onPress={handleBackPress} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 250, // Tăng chiều cao của ảnh
    width: 400,
    borderRadius: 8,
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
  },
});