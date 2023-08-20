import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import PlaidLink, { LinkSuccess, LinkExit } from "react-native-plaid-link-sdk";

// link-sandbox-ce7f78af-6562-4164-9e2e-22133a7117c7

export default function App() {
  return (
    <View style={styles.container}>
      <PlaidLink
        tokenConfig={{ token: "link-sandbox-e9ba780d-2026-41e1-8647-6dffb39f46f8", noLoadingState: false }}
        onSuccess={(success: LinkSuccess) => console.log(success)}
        onExit={(exit: LinkExit) => console.log(exit)}
      >
        <Text>Add Account</Text>
      </PlaidLink>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
