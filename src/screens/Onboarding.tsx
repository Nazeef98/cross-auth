import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

const { width } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    title: 'Search Jobs, Accommodations',
    description:
      'No more stress! With Class Connect search for part-time or full-time jobs and accommodations hassle-free.',
    image: require('../assets/bro.png'),
  },
  {
    id: '2',
    title: 'Network and Connect',
    description:
      'Connect with your classmates, direct message them, or meet for a coffee.',
    image: require('../assets/bro2.png'),
  },
];

const Onboarding = ({ onFinish }: { onFinish: () => void }): React.JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<any>>(null); // Ref for FlatList

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      flatListRef.current?.scrollToIndex({ animated: true, index: nextIndex }); // Scroll to next slide
    } else {
      onFinish(); // Finish onboarding
    }
  };

  const handleSkip = () => {
    onFinish(); // Skip directly to login
  };

  const renderItem = ({ item }: { item: any }) => (
    <View style={[styles.slide, { width }]}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        scrollEnabled={false} // Disable manual swipe
      />
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skipButton}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
          <Text style={styles.nextButtonText}>
            {currentIndex === slides.length - 1 ? 'Finish' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    paddingHorizontal: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  skipButton: {
    fontSize: 16,
    color: '#888',
  },
  nextButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  nextButtonText: {
    fontSize: 16,
    color: '#FFF',
  },
});

export default Onboarding;
