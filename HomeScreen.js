// Importa as bibliotecas necessárias
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

// Define o componente da tela inicial
function HomeScreen({ navigation }) {
  return (
    // ScrollView permite rolar a tela se o conteúdo for grande
    <ScrollView style={styles.container}>
      
      {/* Cabeçalho com título e subtítulo */}
      <View style={styles.header}>
        {/* Nome do restaurante */}
        <Text style={styles.title}>Grill & Smash</Text>
        {/* Slogan ou descrição */}
        <Text style={styles.subtitle}>Os melhores hambúrgueres da cidade</Text>
      </View>

      {/* Imagem banner do restaurante */}
      <Image 
        source={{ uri: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop' }}
        style={styles.banner}
      />

      {/* Seção de características/benefícios */}
      <View style={styles.features}>
        
        {/* Card de entrega rápida */}
        <View style={styles.featureCard}>
          <Text style={styles.featureTitle}>🚚 Entrega Rápida</Text>
          <Text style={styles.featureText}>Entregamos em até 40min</Text>
        </View>
        
        {/* Card de qualidade */}
        <View style={styles.featureCard}>
          <Text style={styles.featureTitle}>🍔 Qualidade</Text>
          <Text style={styles.featureText}>Ingredientes selecionados</Text>
        </View>
        
        {/* Card de formas de pagamento */}
        <View style={styles.featureCard}>
          <Text style={styles.featureTitle}>💳 Pagamento Fácil</Text>
          <Text style={styles.featureText}>Cartão, pix ou dinheiro</Text>
        </View>
      </View>

      {/* Botão principal para ver o cardápio */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Cardápio')}  // Navega para a tela do cardápio
      >
        <Text style={styles.buttonText}>Ver Cardápio Completo</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// Define os estilos visuais do componente
const styles = StyleSheet.create({
  // Container principal
  container: {
    flex: 1,                    // Ocupa toda a tela
    backgroundColor: '#f8f9fa', // Cor de fundo cinza muito claro
  },
  
  // Estilo do cabeçalho
  header: {
    alignItems: 'center',       // Centraliza os itens horizontalmente
    padding: 20,                // Espaço interno
    paddingTop: 40,             // Espaço extra no topo (para não colar na status bar)
  },
  
  // Estilo do título principal
  title: {
    fontSize: 32,               // Tamanho grande da fonte
    fontWeight: 'bold',         // Texto em negrito
    color: '#e74c3c',          // Cor vermelha
    marginBottom: 10,           // Espaço abaixo do título
  },
  
  // Estilo do subtítulo
  subtitle: {
    fontSize: 18,               // Tamanho médio da fonte
    color: '#666',              // Cor cinza
    textAlign: 'center',        // Texto centralizado
  },
  
  // Estilo da imagem banner
  banner: {
    width: '90%',               // Largura de 90% da tela
    height: 200,                // Altura fixa
    borderRadius: 15,           // Cantos arredondados
    alignSelf: 'center',        // Centraliza a imagem horizontalmente
    marginVertical: 20,         // Espaço acima e abaixo
  },
  
  // Container dos cards de características
  features: {
    padding: 20,                // Espaço interno
  },
  
  // Estilo de cada card de característica
  featureCard: {
    backgroundColor: '#fff',    // Fundo branco
    padding: 15,                // Espaço interno
    borderRadius: 10,           // Cantos arredondados
    marginBottom: 10,           // Espaço entre os cards
    // Sombras para efeito de elevação
    shadowColor: '#000',
    shadowOffset: {
      width: 0,                 // Sombra na horizontal
      height: 2,                // Sombra na vertical
    },
    shadowOpacity: 0.1,         // Transparência da sombra
    shadowRadius: 3,            // Desfoque da sombra
    elevation: 3,               // Sombra no Android
  },
  
  // Título de cada característica
  featureTitle: {
    fontSize: 16,               // Tamanho da fonte
    fontWeight: 'bold',         // Texto em negrito
    marginBottom: 5,            // Espaço abaixo do título
  },
  
  // Texto descritivo de cada característica
  featureText: {
    fontSize: 14,               // Tamanho menor da fonte
    color: '#666',              // Cor cinza
  },
  
  // Botão principal de ação
  button: {
    backgroundColor: '#e74c3c', // Cor vermelha (combina com o título)
    paddingHorizontal: 30,      // Espaço interno na horizontal
    paddingVertical: 15,        // Espaço interno na vertical
    borderRadius: 25,           // Cantos muito arredondados (formato "pill")
    margin: 20,                 // Espaço externo
    alignItems: 'center',       // Centraliza o texto
    // Sombras mais pronunciadas para o botão
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,        // Sombra mais escura
    shadowRadius: 3.84,         // Desfoque maior
    elevation: 5,               // Sombra mais elevada no Android
  },
  
  // Texto do botão
  buttonText: {
    color: 'white',             // Texto branco
    fontSize: 18,               // Tamanho grande da fonte
    fontWeight: 'bold',         // Texto em negrito
  },
});

// Exporta o componente para ser usado em outros arquivos
export default HomeScreen;
