import React from 'react';
import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';

const groupMembers = [
  { name: "sam", github_repo: "samuelbraun15", group_no: "2" },
  { name: "merilyne", github_repo: "merilyne", group_no: "2" },
  { name: "anne", github_repo: "annie.ala", group_no: "2" },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Group Members:</Text>

      {groupMembers.map((member, index) => (
        <Text key={index} style={{ marginBottom: 5 }}>
          {member.name}
        </Text>
      ))}

      <Pressable
        onPress={() => Alert.alert("Lab 1 done")}
        style={{ marginTop: 20, backgroundColor: 'lightblue', padding: 10 }}
      >
        <Text>Show Alert</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});