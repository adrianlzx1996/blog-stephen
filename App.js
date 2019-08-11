import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import { Provider } from "./src/context/BlogContext";

const navigator = createStackNavigator(
	{
		Create: CreateScreen,
		Edit: EditScreen,
		Index: IndexScreen,
		Show: ShowScreen
	},
	{
		initialRouteName: "Index",
		defaultNavigationOptions: {
			title: "Blog List"
		}
	}
);

const App = createAppContainer(navigator);

export default () => {
	return (
		<Provider>
			<App />
		</Provider>
	);
};