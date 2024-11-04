import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import ChapterList from './components/ChapterListScreen';
import Favorites from './components/FavoritesScreen';
import Home from './components/HomeScreen';
import Profile from './components/ProfileScreen';
import ChapterDetail4_1 from './components/buroto/ChapterDetailScreen4_1';
import ChapterDetail4_2 from './components/buroto/ChapterDetailScreen4_2';
import ChapterDetail4_3 from './components/buroto/ChapterDetailScreen4_3';
import ChapterDetail4_4 from './components/buroto/ChapterDetailScreen4_4';
import ChapterDetail4_5 from './components/buroto/ChapterDetailScreen4_5';
import ChapterDetail1_1 from './components/canglyluattudo/ChapterDetailScreen1_1';
import ChapterDetail1_2 from './components/canglyluattudo/ChapterDetailScreen1_2';
import ChapterDetail1_3 from './components/canglyluattudo/ChapterDetailScreen1_3';
import ChapterDetail1_4 from './components/canglyluattudo/ChapterDetailScreen1_4';
import ChapterDetail1_5 from './components/canglyluattudo/ChapterDetailScreen1_5';
import ChapterDetail2_1 from './components/chienbinhcauvong/ChapterDetailScreen2_1';
import ChapterDetail2_2 from './components/chienbinhcauvong/ChapterDetailScreen2_2';
import ChapterDetail2_3 from './components/chienbinhcauvong/ChapterDetailScreen2_3';
import ChapterDetail2_4 from './components/chienbinhcauvong/ChapterDetailScreen2_4';
import ChapterDetail2_5 from './components/chienbinhcauvong/ChapterDetailScreen2_5';
import ChapterDetail3_1 from './components/conan/ChapterDetailScreen3_1';
import ChapterDetail3_2 from './components/conan/ChapterDetailScreen3_2';
import ChapterDetail3_3 from './components/conan/ChapterDetailScreen3_3';
import ChapterDetail3_4 from './components/conan/ChapterDetailScreen3_4';
import ChapterDetail3_5 from './components/conan/ChapterDetailScreen3_5';
import ChapterDetail5_1 from './components/doremon/ChapterDetailScreen5_1';
import ChapterDetail5_2 from './components/doremon/ChapterDetailScreen5_2';
import ChapterDetail5_3 from './components/doremon/ChapterDetailScreen5_3';
import ChapterDetail5_4 from './components/doremon/ChapterDetailScreen5_4';
import ChapterDetail5_5 from './components/doremon/ChapterDetailScreen5_5';
import ChapterDetail6_1 from './components/naruto/ChapterDetailScreen6_1';
import ChapterDetail6_2 from './components/naruto/ChapterDetailScreen6_2';
import ChapterDetail6_3 from './components/naruto/ChapterDetailScreen6_3';
import ChapterDetail6_4 from './components/naruto/ChapterDetailScreen6_4';
import ChapterDetail6_5 from './components/naruto/ChapterDetailScreen6_5';
import ChapterDetail7_1 from './components/onepiece/ChapterDetailScreen7_1';
import ChapterDetail7_2 from './components/onepiece/ChapterDetailScreen7_2';
import ChapterDetail7_3 from './components/onepiece/ChapterDetailScreen7_3';
import ChapterDetail7_4 from './components/onepiece/ChapterDetailScreen7_4';
import ChapterDetail7_5 from './components/onepiece/ChapterDetailScreen7_5';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="Home" 
        component={Home} 
      />
      <Stack.Screen 
        name="ChapterList" 
        component={ChapterList} 
      />
        <Stack.Screen 
        name="Profile" 
        component={Profile} 
      />
            {/* Book_1 */}
      <Stack.Screen 
        name="ChapterDetail1_1" 
        component={ChapterDetail1_1} 
      />
      <Stack.Screen 
        name="ChapterDetail1_2" 
        component={ChapterDetail1_2} 
      />
       <Stack.Screen 
        name="ChapterDetail1_3" 
        component={ChapterDetail1_3} 
      />
       <Stack.Screen 
        name="ChapterDetail1_4" 
        component={ChapterDetail1_4} 
      />
       <Stack.Screen 
        name="ChapterDetail1_5" 
        component={ChapterDetail1_5} 
      />
      {/* Book_2 */}
      <Stack.Screen 
        name="ChapterDetail2_1" 
        component={ChapterDetail2_1} 
      />
      <Stack.Screen 
        name="ChapterDetail2_2" 
        component={ChapterDetail2_2} 
      />
        <Stack.Screen 
        name="ChapterDetail2_3" 
        component={ChapterDetail2_3} 
      />
        <Stack.Screen 
        name="ChapterDetail2_4" 
        component={ChapterDetail2_4} 
      />
        <Stack.Screen 
        name="ChapterDetail2_5" 
        component={ChapterDetail2_5} 
      />
       {/* Book_3 */}
       <Stack.Screen 
        name="ChapterDetail3_1" 
        component={ChapterDetail3_1} 
      />
        <Stack.Screen 
        name="ChapterDetail3_2" 
        component={ChapterDetail3_2} 
      />
         <Stack.Screen 
        name="ChapterDetail3_3" 
        component={ChapterDetail3_3} 
      />
         <Stack.Screen 
        name="ChapterDetail3_4" 
        component={ChapterDetail3_4} 
      />
         <Stack.Screen 
        name="ChapterDetail3_5" 
        component={ChapterDetail3_5} 
      />
       {/* Book_4 */}
       <Stack.Screen 
        name="ChapterDetail4_1" 
        component={ChapterDetail4_1} 
      />
         <Stack.Screen 
        name="ChapterDetail4_2" 
        component={ChapterDetail4_2} 
      />
         <Stack.Screen 
        name="ChapterDetail4_3" 
        component={ChapterDetail4_3} 
      />
         <Stack.Screen 
        name="ChapterDetail4_4" 
        component={ChapterDetail4_4} 
      />
         <Stack.Screen 
        name="ChapterDetail4_5" 
        component={ChapterDetail4_5} 
      />
      {/*Book5 */}
      <Stack.Screen 
        name="ChapterDetail5_1" 
        component={ChapterDetail5_1} 
      />
      <Stack.Screen 
        name="ChapterDetail5_2" 
        component={ChapterDetail5_2} 
      />
      <Stack.Screen 
        name="ChapterDetail5_3" 
        component={ChapterDetail5_3} 
      />
      <Stack.Screen 
        name="ChapterDetail5_4" 
        component={ChapterDetail5_4} 
      />
      <Stack.Screen 
        name="ChapterDetail5_5" 
        component={ChapterDetail5_5} 
      />
      {/*Book6 */}
      <Stack.Screen 
        name="ChapterDetail6_1" 
        component={ChapterDetail6_1} 
      />
      <Stack.Screen 
        name="ChapterDetail6_2" 
        component={ChapterDetail6_2} 
      />
      <Stack.Screen 
        name="ChapterDetail6_3" 
        component={ChapterDetail6_3} 
      />
      <Stack.Screen 
        name="ChapterDetail6_4" 
        component={ChapterDetail6_4} 
      />
      <Stack.Screen 
        name="ChapterDetail6_5" 
        component={ChapterDetail6_5} 
      />
      {/*Book7 */}
      <Stack.Screen 
        name="ChapterDetail7_1" 
        component={ChapterDetail7_1} 
      />
      <Stack.Screen 
        name="ChapterDetail7_2" 
        component={ChapterDetail7_2} 
      />
      <Stack.Screen 
        name="ChapterDetail7_3" 
        component={ChapterDetail7_3} 
      />
      <Stack.Screen 
        name="ChapterDetail7_4" 
        component={ChapterDetail7_4} 
      />
      <Stack.Screen 
        name="ChapterDetail7_5" 
        component={ChapterDetail7_5} 
      />
  {/*Book8 */}
  <Stack.Screen 
        name="ChapterDetail8_1" 
        component={ChapterDetail1_1} 
      />
      <Stack.Screen 
        name="ChapterDetail8_2" 
        component={ChapterDetail1_2} 
      />
      <Stack.Screen 
        name="ChapterDetail8_3" 
        component={ChapterDetail1_3} 
      />
      <Stack.Screen 
        name="ChapterDetail8_4" 
        component={ChapterDetail1_4} 
      />
      <Stack.Screen 
        name="ChapterDetail8_5" 
        component={ChapterDetail1_5} 
      />
  
      {/* Thêm các màn hình chi tiết chương khác tại đây */}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <ActionSheetProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Drawer.Screen 
            name="Home" 
            component={HomeStack} 
          />
          <Drawer.Screen 
            name="Favorites" 
            component={Favorites} 
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </ActionSheetProvider>
  );
}