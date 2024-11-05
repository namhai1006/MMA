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

  const [selectedChapterIndex, setSelectedChapterIndex] = useState(null);

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
        {chapterData.map((chapter, index) => (
          <View key={index} style={styles.chapterContainer}>
            <Text style={styles.chapterTitle}>{chapter.title}</Text>
            {/* Display the list of images for the chapter */}
            {chapter.images.length > 0 && (
              <View style={styles.imageList}>
                {chapter.images.map((image, imgIndex) => (
                  <View key={imgIndex} style={styles.imageContainer}>
                    <Image
                      source={{ uri: image }}
                      style={styles.chapterImage}
                    />
                    <TouchableOpacity 
                      style={styles.deleteButton}
                      onPress={() => handleDeleteImage(index, imgIndex)}
                    >
                      <FontAwesome name="trash" size={24} color="red" />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            )}
            {/* Button to select chapter for adding images */}
            
          </View>
        ))}
        {/* Footer to add images */}
        {selectedChapterIndex !== null && (
          <TouchableOpacity 
            style={styles.addButton}
            onPress={pickImage}
          >
            <Text style={styles.addButtonText}>Thêm ảnh vào chương này</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Home')}>
          <FontAwesome name="home" size={24} color="white" />
          <Text style={styles.footerText}>Home</Text>
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
  chapterTitle: {
    fontSize: 18,
    fontWeight: 'bold',
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
  selectButton: {
    marginTop: 10,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  selectButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
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
    justifyContent: 'center',
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