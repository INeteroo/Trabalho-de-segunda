// Importa as bibliotecas necessárias
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

// Define o componente da tela do carrinho
function CartScreen({ navigation, route }) {
  // Pega os itens do carrinho passados como parâmetro da tela anterior, ou usa array vazio se não houver
  const cart = route.params?.cart || [];

  // Função para calcular o preço total do carrinho
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
    // reduce() soma todos os preços dos itens, começando de 0
  };

  // Função para remover item do carrinho (ainda não implementada)
  const removeFromCart = (index) => {
    // Implementar remoção do carrinho
    alert('Funcionalidade de remover em desenvolvimento');
  };

  // Se o carrinho estiver vazio, mostra mensagem especial
  if (cart.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Seu carrinho está vazio</Text>
        {/* Botão para voltar ao cardápio */}
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Cardápio')}
        >
          <Text style={styles.buttonText}>Ver Cardápio</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Se houver itens no carrinho, mostra a lista normal
  return (
    <View style={styles.container}>
      {/* Área rolável com os itens do carrinho */}
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Meu Carrinho</Text>
        
        {/* Para cada item no carrinho, cria um card */}
        {cart.map((item, index) => (
          <View key={index} style={styles.cartItem}>
            {/* Informações do produto */}
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={styles.itemPrice}>R$ {item.price.toFixed(2)}</Text>
            </View>
            
            {/* Botão para remover o item */}
            <TouchableOpacity 
              style={styles.removeButton}
              onPress={() => removeFromCart(index)}
            >
              <Text style={styles.removeButtonText}>×</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Rodapé fixo com total e botão de finalizar */}
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: R$ {getTotalPrice().toFixed(2)}</Text>
        </View>
        
        {/* Botão para finalizar o pedido */}
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Finalizar Pedido</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Define os estilos visuais do componente
const styles = StyleSheet.create({
  // Container principal
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  // Container para carrinho vazio
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',  // Centraliza verticalmente
    alignItems: 'center',      // Centraliza horizontalmente
    padding: 20,
  },
  // Texto do carrinho vazio
  emptyText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  // Área rolável
  scrollView: {
    flex: 1,        // Ocupa o espaço disponível
    padding: 16,    // Espaço interno
  },
  // Título da tela
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  // Card de cada item do carrinho
  cartItem: {
    flexDirection: 'row',          // Itens na horizontal
    backgroundColor: '#fff',       // Fundo branco
    borderRadius: 12,              // Cantos arredondados
    padding: 16,                   // Espaço interno
    marginBottom: 12,              // Espaço entre os itens
    alignItems: 'center',          // Centraliza verticalmente
    justifyContent: 'space-between', // Espaço entre informações e botão
  },
  // Área de informações do item
  itemInfo: {
    flex: 1,  // Ocupa o espaço disponível
  },
  // Nome do produto
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  // Descrição do produto
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  // Preço do produto
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2ecc71',  // Verde
  },
  // Botão para remover item
  removeButton: {
    backgroundColor: '#e74c3c',  // Vermelho
    width: 30,
    height: 30,
    borderRadius: 15,            // Torna o botão redondo
    justifyContent: 'center',    // Centraliza o "X" verticalmente
    alignItems: 'center',        // Centraliza o "X" horizontalmente
  },
  // Texto do botão de remover
  removeButtonText: {
    color: '#fff',      // Branco
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Rodapé fixo na parte inferior
  footer: {
    padding: 16,
    borderTopWidth: 1,          // Linha separadora
    borderTopColor: '#ddd',     // Cor da linha
  },
  // Container do total
  totalContainer: {
    marginBottom: 12,           // Espaço entre total e botão
  },
  // Texto do total
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  // Botão de finalizar pedido
  checkoutButton: {
    backgroundColor: '#2ecc71',  // Verde
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  // Texto do botão de finalizar
  checkoutButtonText: {
    color: '#fff',      // Branco
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Botão para voltar ao cardápio (usado no carrinho vazio)
  button: {
    backgroundColor: '#3498db',  // Azul
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  // Texto do botão do cardápio
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

// Exporta o componente para ser usado em outros arquivos
export default CartScreen;
