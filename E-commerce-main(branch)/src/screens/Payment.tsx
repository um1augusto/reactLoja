// src/screens/Payment.tsx
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useUserContext } from '../contexts/UserContext';
import CreditCard from '../components/CreditCard';

const Payment = () => {
  const { userData } = useUserContext();

  // Dados fictícios do cartão de crédito (substitua pelos dados reais)
  const cardInfo = {
    cardNumber: "1234567812345678",
    cardholderName: userData?.user.fname + " " + userData?.user.lname,
    expiryDate: "12/25",
    cvv: "123"
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Pagamento</Text>
      <CreditCard 
        cardNumber={cardInfo.cardNumber} 
        cardholderName={cardInfo.cardholderName} 
        expiryDate={cardInfo.expiryDate} 
        cvv={cardInfo.cvv} 
      />
      
      <Button title="Confirmar Pagamento" onPress={() => console.log("Pagamento confirmado!")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  }
});

export default Payment;
