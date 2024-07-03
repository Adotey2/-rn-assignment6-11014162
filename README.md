# Fashion App

## Description

This is a simple fashion app built with React Native. It allows users to browse through a list of available products, add products to their cart, view the items in their cart, and remove items from their cart. The app also calculates the total price of the items in the cart and includes a checkout button.

## Design Choices

### HomeScreen

1. **Layout**: The home screen displays a list of products in a grid format. Each product is shown with an image, name, description, price, and an add-to-cart button. The layout is designed to be clean and easy to navigate.
2. **Header**: The header includes a logo, menu icon, search icon, and a cart icon. These are aligned horizontally at the top of the screen.
3. **Styling**: The price tags are colored pinkish to match the design requirements. The product images are displayed in a consistent size and style.

### CheckoutScreen

1. **Layout**: The checkout screen displays the items in the cart in a list format. Each item is shown with an image, name, description, price, and a remove button. The total price is displayed at the bottom, along with a checkout button.
2. **Header**: The header includes the same icons as the home screen for consistency.
3. **Styling**: The remove buttons are styled with a tomato color to differentiate them from other buttons. The total price and checkout button are prominently displayed at the bottom for easy access.

## Data Storage

### Implementation

- **AsyncStorage**: We used `AsyncStorage` to store the cart items locally on the device. This allows the app to persist the cart items even if the app is closed and reopened.
- **Adding Items**: When an item is added to the cart, it is stored in the state and also saved to `AsyncStorage`.
- **Removing Items**: When an item is removed from the cart, it is removed from the state and `AsyncStorage` is updated accordingly.
- **Fetching Items**: When the app loads, the cart items are fetched from `AsyncStorage` and displayed in the checkout screen.

## Screenshots

Include screenshots of the home screen and checkout screen here.

### HomeScreen

![HomeScreen](./MyReactApp/assets/Dcit202%20screenshot31.png)

### CheckoutScreen

![CheckoutScreen](./MyReactApp/assets/Dcit202%20screenshot32.png)

## How to Run

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the app: `npx react-native run-android` or `npx react-native run-ios`
4. Navigate through the app to view and test the functionalities

## Dependencies

- React Native
- @react-native-async-storage/async-storage

## Conclusion

This app demonstrates a simple yet functional approach to building a fashion app with basic e-commerce functionalities using React Native. The design choices aim to provide a clean and intuitive user experience, while the use of `AsyncStorage` ensures data persistence across sessions.
