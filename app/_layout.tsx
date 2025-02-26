import { Tabs } from 'expo-router';
import { icons } from "@/assets/icon";

export default function RootLayout() {
  return (
    <Tabs 
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#f3f3f3',
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => icons.Logo(),
          tabBarLabelStyle: {
            fontSize: 12
          }
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: () => icons.Chart(),
          tabBarLabelStyle: {
            fontSize: 12
          }
        }}
      />
    </Tabs>
  );
}
