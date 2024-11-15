// src/components/CreditCard.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface CreditCardProps {
  cardNumber: string;
  cardholderName: string;
  expiryDate: string;
  cvv: string;
}

const CreditCard = ({ cardNumber, cardholderName, expiryDate, cvv }: CreditCardProps) => {
  const maskedCardNumber = cardNumber.replace(/\d(?=\d{4})/g, "*");
  const maskedCVV = cvv.replace(/\d/g, "*");

  return (
    <View style={styles.cardContainer}>
      {/* Cartão de Crédito com imagem fictícia de fundo */}
      <View style={styles.cardContent}>
        <Text style={styles.cardNumber}>{maskedCardNumber}</Text>
        <Text style={styles.cardHolder}>Titular: {cardholderName}</Text>
        <View style={styles.cardInfo}>
          <Text style={styles.cardExpiry}>Validade: {expiryDate}</Text>
          <Text style={styles.cardCVV}>CVV: {maskedCVV}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 15,
    margin: 10,
    backgroundColor: '#3D737F',  // Cor do fundo do cartão
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  cardContent: {
    padding: 15,
    justifyContent: 'center',
  },
  cardNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 2,
  },
  cardHolder: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
  },
  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  cardExpiry: {
    fontSize: 14,
    color: '#fff',
  },
  cardCVV: {
    fontSize: 14,
    color: '#fff',
  },
});

export default CreditCard;
