import React from 'react';
import { View, Text } from 'react-native';
import Video from 'react-native-video';

export default function LiveTVScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Video
        source={{ uri: 'https://your-live-stream-url.com/stream.m3u8' }}
        style={{ flex: 1 }}
        controls={true}
      />
      <Text style={{ textAlign: 'center' }}>Live TV</Text>
    </View>
  );
}
