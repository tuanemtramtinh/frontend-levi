import { AnimatedTabBar } from "@/components/AnimatedTabBar";
import { Tabs } from "expo-router";

export default function HomeLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false }} tabBar={(props) => <AnimatedTabBar {...props}/>}>
            <Tabs.Screen 
                name="index"
                options={{
                    title: 'Nhà',
                }}
            />
            <Tabs.Screen
                name="create"
                options={{}}
                listeners={{
                    tabPress: (e) => {e.preventDefault();}
                }}
            />
            <Tabs.Screen 
                name="tours"
                options={{
                    title: 'Tour của tôi',
                }}
            />
        </Tabs>
    )
}