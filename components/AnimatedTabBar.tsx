import { CompassIcon } from "@/assets/Icons/CompassIcon";
import { HomeIcon } from "@/assets/Icons/HomeIcon";
import { PlusIcon } from "@/assets/Icons/PlusIcon";
import { COLORS } from "@/constants/Colors";
import { BottomTabBarProps, BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs";
import { NavigationHelpers, RouteProp } from "@react-navigation/native";
import React from "react";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";
import styled from "styled-components/native";

const Container = styled.View`
    background-color: ${COLORS.PUREWHITE};
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 75px;
    padding-inline: 5%;
`;

const TabButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    row-gap: 5px;
    width: 100px;
    font-family: "Nunito-Regular";
    font-size: 14px;
`;

const CreateButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    background-color: ${COLORS.DARKGREEN};
    border-radius: 42px;
    width: 42px;
    height: 42px;
    margin-bottom: 4%;
`;

type TabBarItemProps = {
    route: RouteProp<any>;
    isFocused: boolean;
    options: any;
    navigation: NavigationHelpers<any, BottomTabNavigationEventMap>;
};
  

function TabBarItem({ route, isFocused, options, navigation } : TabBarItemProps) {
    const label = options.title;

    const onPress = () => {
        const event = navigation.emit({ type: "tabPress", target: route.key, canPreventDefault: true});

        if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
        }
    }

    const animatedLabelStyle = useAnimatedStyle(() => ({
        opacity: withTiming(isFocused ? 1 : 0, { duration: 500 }),
        transform: [{ translateY: withTiming(isFocused ? 0 : 5) }],
    }));

    return (
        <TabButton onPress={onPress}>
            {route.name === "index" ? (
                    <HomeIcon color={isFocused ? COLORS.DARKGREEN : COLORS.GRAY} />
                ) : (
                    <CompassIcon color={isFocused ? COLORS.DARKGREEN : COLORS.GRAY}/>
                )
            }
            <Animated.Text style={animatedLabelStyle}>{label}</Animated.Text>
        </TabButton>
    )
}

export function AnimatedTabBar({ state, descriptors, navigation } : BottomTabBarProps) {
    
    return (
        <Container>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                if (route.name === "create") {
                    return (
                        <CreateButton key={route.key}>
                            <PlusIcon/>
                        </CreateButton>
                    )
                }

                return (
                    <TabBarItem
                        key={route.key}
                        route={route}
                        options={options}
                        navigation={navigation}
                        isFocused={isFocused}            
                    />
                )
            })}
        </Container>
    )
}