import React from "react";
import Feed from "../screens/Feed";
import CreateStory from "../screens/CreateStory";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from "react-native-vector-icons/Ionicons"

const Tab=createBottomTabNavigator()
const BottomTabNavigator= () => {
    return(
        <Tab.Navigator
            screenOptions={({route}) => ({
                    tabBarIcon:({focused,color,size}) => {
                        let iconName
                        if(route.name === "Feed"){
                            iconName = focused
                                ?"book"
                                :"book-outline"
                        }
                        else if(route.name === "Create Story"){
                            iconName = focused
                                ?"create"
                                :"create-outline"
                        }
                        return
                            <Ionicons name={iconName} size={size} color={color}/>
                    },
                })}
            tabBarOptions={{
                activeTintColor:"green",
                inactiveTintColor:"grey"
            }}
        >
            <Tab.Screen name='Feed' component={Feed}/>
            <Tab.Screen name='Create Story' component={CreateStory}/>
        </Tab.Navigator>
    )
}

export default BottomTabNavigator