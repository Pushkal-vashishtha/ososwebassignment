import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import axios from 'axios';
import ProductModal from './ProductModal';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../redux/cartSlice';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => setSelectedProduct(item)}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.itemDetails}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.ratingContainer}>
          {[...Array(5)].map((_, i) => (
            <Text key={i} style={styles.star}>{i < Math.floor(item.rating.rate) ? '★' : '☆'}</Text>
          ))}
          <Text style={styles.ratingCount}>{item.rating.count}</Text>
        </View>
        <Text style={styles.price}>Rs. {item.price.toFixed(2)}</Text>
        <Text style={styles.category}>Category: {item.category}</Text>
      </View>
      {cart[item.id] && (
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => dispatch(decrementQuantity(item.id))}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{cart[item.id].quantity}</Text>
          <TouchableOpacity onPress={() => dispatch(incrementQuantity(item.id))}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.headerContainer}>
      <Text style={styles.header}>Shopping</Text>
    </View>
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
    <ProductModal
      product={selectedProduct}
      visible={!!selectedProduct}
      onClose={() => setSelectedProduct(null)}
    />
  </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  headerContainer: {
    backgroundColor: '#87CEEB',
    padding: 16,
    alignItems: 'center', // Center the content horizontally
    justifyContent: 'center', // Center the content vertically
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
    backgroundColor: '#87CEEB',
    color: 'black',
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  star: {
    color: '#FFD700',
  },
  ratingCount: {
    marginLeft: 4,
    color: '#888',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  category: {
    fontSize: 12,
    color: '#888',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    fontSize: 20,
    paddingHorizontal: 10,
  },
  quantity: {
    fontSize: 16,
    paddingHorizontal: 10,
  },
});

export default ProductList;