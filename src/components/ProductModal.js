import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductModal = ({ product, visible, onClose }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart[product?.id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (!product) return null;

  return (
    <Modal isVisible={visible} onBackdropPress={onClose}>
      <View style={styles.modalContent}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <Text style={styles.title}>{product.title}</Text>      
        
        
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionLabel}>Description:</Text>
          <Text style={styles.descriptionText}>{product.description}</Text>
        </View>

        <View style={styles.buttonContainer}>
          {!cartItem && (
            <TouchableOpacity onPress={handleAddToCart} style={styles.addButton}>
              <Text style={styles.addButtonText}>
                <Icon name="cart-plus" size={20} color="white" /> Add To Cart
              </Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
    marginBottom: 10,
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  descriptionLabel: {
    fontWeight: 'bold',
  },
  descriptionText: {
    marginLeft: 5,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 2,
  },
  addButton: {
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'black',
  },
});

export default ProductModal;
