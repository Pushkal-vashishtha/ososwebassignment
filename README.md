# React Native Product App

A simple e-commerce product app built with React Native and Expo. This app allows users to browse through products, view details, and add items to their shopping cart.

## Features

- **Product Listing**: Browse a list of products with images, prices, and ratings.
- **Product Details**: View detailed information about a product, including a description, price, and user ratings.
- **Add to Cart**: Easily add products to your shopping cart.
- **Modal**: A modal view for product details with add-to-cart and close functionality.
- **Redux Integration**: State management for cart functionality using Redux.
### Usage
Viewing Products: Open the app to see a list of products. Click on a product to view its details.
Adding to Cart: Inside the product detail view, click the "Add to Cart" button to add the product to your cart.
Closing Modal: Click the "Close" button inside the product detail modal to go back to the product list.
### Dependencies
Expo: The framework for building native apps using React and managed workflow.
React Native: The framework for building native apps using React.
Redux: Used for managing the state of the cart.
React Native Modal: For displaying product details in a modal.
React Native Vector Icons: For including icons in buttons and other UI elements.
Project Structure
src/components: Contains the reusable components used in the app.
src/redux: Contains Redux-related files such as actions, reducers, and store configuration.
assets: Contains images and other static assets.
### Contributing
Contributions are welcome! Please open an issue or submit a pull request for any bugs or feature requests.




## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/react-native-product-app.git
   cd react-native-product-app
Install dependencies:
```
```bash
expo install react-redux @react-native-async-storage/async-storage react-native-vector-icons
Run the app:
```
For iOS:

```bash
expo start --ios
For Android:

expo start --android
Start the Expo bundler:


expo start
```
### License
This project is licensed under the MIT License - see the LICENSE file for details.
