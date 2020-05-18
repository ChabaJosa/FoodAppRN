import {createAppContainer }    from "react-navigation"
import {createStackNavigator }  from "react-navigation-stack"
import SearchScreen             from "./src/screens/searchScreen"

const navigator = createStackNavigator({
  Search: SearchScreen,
},{
  initialRouteName: "Search",
  defaultNavigationOptions: {
    title: "Search Food"
  }
})

export default createAppContainer(navigator) // This built in function exports it as kind of a nav bar component instead of a whole page

