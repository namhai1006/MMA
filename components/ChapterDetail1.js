import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ChapterDetail({ route, navigation }) {
  const { title, bookTitle, chapters } = route.params;

  // Initialize chapterData and ensure each chapter has an images property
  const [chapterData, setChapterData] = useState(
    chapters.map((chapter) => ({
      title: chapter,
      images: [], // Ensure each chapter has an images array
    }))
  );

  const [selectedChapterIndex, setSelectedChapterIndex] = useState(0); // State to keep track of the selected chapter

  const pickImage = async () => {
    try {
      const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!result.granted) {
        Alert.alert("Permission Required", "Permission to access the library is required!");
        return;
      }

      const picked = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!picked.canceled && picked.assets[0].uri) {
        // Add the image to the images array of the selected chapter
        const newChapterData = chapterData.map((chapter, index) => {
          if (index === selectedChapterIndex) {
            return {
              ...chapter,
              images: [...chapter.images, picked.assets[0].uri],
            };
          }
          return chapter;
        });
        setChapterData(newChapterData); // Update the state
      }
    } catch (error) {
      console.error("Error picking image:", error);
    }
  };

  const handleDeleteImage = (chapterIndex, imageIndex) => {
    const newChapterData = chapterData.map((chapter, index) => {
      if (index === chapterIndex) {
        return {
          ...chapter,
          images: chapter.images.filter((_, i) => i !== imageIndex),
        };
      }
      return chapter;
    });
    setChapterData(newChapterData);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.chapterContainer}>
          {/* Display the list of images for the selected chapter */}
          {chapterData[selectedChapterIndex].images.length > 0 && (
            <View style={styles.imageList}>
              {chapterData[selectedChapterIndex].images.map((image, imgIndex) => (
                <View key={imgIndex} style={styles.imageContainer}>
                  <Image
                    source={{ uri: image }}
                    style={styles.chapterImage}
                  />
                  <TouchableOpacity 
                    style={styles.deleteButton}
                    onPress={() => handleDeleteImage(selectedChapterIndex, imgIndex)}
                  >
                    <FontAwesome name="trash" size={24} color="red" />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
      {/* Button to add images */}
      <TouchableOpacity 
        style={styles.addButton}
        onPress={pickImage}
      >
        <Text style={styles.addButtonText}>Thêm ảnh vào chương này</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Home')}>
          <FontAwesome name="home" size={24} color="white" />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={pickImage}>
          <FontAwesome name="plus" size={24} color="white" />
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
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chapterContainer: {
    marginVertical: 10,
  },
  imageList: {
    flexDirection: 'column',
    marginTop: 10,
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 10,
  },
  chapterImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  addButton: {
    marginTop: 20,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 50,
    padding: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Use space-between to evenly space the items
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: '#f97316',
    paddingHorizontal: 40, // Add horizontal padding to ensure spacing from the edges
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