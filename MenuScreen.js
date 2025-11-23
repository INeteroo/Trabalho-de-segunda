// Importa as bibliotecas necessárias
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

// Define o componente da tela do cardápio
function MenuScreen({ navigation }) {
  // Estado para armazenar os itens do carrinho (array vazio inicialmente)
  const [cart, setCart] = useState([]);

  // Lista de itens do cardápio com suas informações
  const menuItems = [
    {
      id: 1,  // Identificador único do item
      name: 'Simples',  // Nome do produto
      price: 18.00,  // Preço do produto
      description: 'Hamburguer tradicional',  // Descrição do produto
      image: require('../assets/Simples.png')  // Imagem do produto (caminho local)
    },
    // ... outros itens seguem a mesma estrutura
    {
      id: 2,
      name: 'X-Burguer',
      price: 21.00,
      description: 'Com queijo derretido',
      image: require('../assets/X-Burguer.png')
    },
    {
      id: 3,
      name: 'X-Bacon',
      price: 24.00,
      description: 'Com bacon crocante',
      image: require('../assets/X-Bacon.png')
    },
    {
      id: 4,
      name: 'Supreme',
      price: 29.00,
      description: 'Especialidade do chefe da casa',
      image: require('../assets/Supreme.png')
    },
    {
      id: 5,
      name: 'Batata Frita',
      price: 13.00,
      description: 'Muito crocante',
      image: require('../assets/Batata.png')  // Nota: nome do arquivo diferente do nome do produto
    },
    {
      id: 6,
      name: 'Refrigerante',
      price: 8.00,
      description: 'Lata 350ml',
      image: require('../assets/Refrigerante.png')
    },
    {
      id: 7,
      name: 'Onion Rings',
      price: 13.00,
      description: 'Pura crocância',
      image: require('../assets/Onion.png')
    }
  ];

  // Função para adicionar um item ao carrinho
  const addToCart = (item) => {
    // Adiciona o novo item ao array existente do carrinho
    setCart([...cart, item]);
    // Mostra um alerta confirmando a adição
    alert(`${item.name} adicionado ao carrinho!`);
  };

  // Retorna a interface da tela
  return (
    <View style={styles.container}>
      {/* Área rolável com os itens do cardápio */}
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Cardápio</Text>
        
        {/* Para cada item do menu, cria um card */}
        {menuItems.map((item) => (
          <View key={item.id} style={styles.menuItem}>
            {/* Container da imagem do produto */}
            <View style={styles.imageContainer}>
              <Image 
                source={item.image}  // Imagem do produto
                style={styles.image}
                resizeMode="cover"  // A imagem cobre todo o espaço sem distorcer
              />
            </View>
            
            {/* Informações do produto: nome, descrição e preço */}
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
            </View>
            
            {/* Botão para adicionar ao carrinho */}
            <TouchableOpacity 
              style={styles.addButton}
              onPress={() => addToCart(item)}  // Chama a função ao clicar
            >
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Botão fixo na parte inferior para ir ao carrinho */}
      <TouchableOpacity 
        style={styles.cartButton}
        onPress={() => navigation.navigate('Carrinho', { cart })}  // Navega para a tela do carrinho passando os itens
      >
        <Text style={styles.cartButtonText}>
          Ver Carrinho ({cart.length})  {/* Mostra a quantidade de itens no carrinho */}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// Define os estilos visuais do componente
const styles = StyleSheet.create({
  // Container principal
  container: {
    flex: 1,  // Ocupa toda a tela
    backgroundColor: '#f5f5f5',  // Cor de fundo cinza claro
  },
  // Área rolável
  scrollView: {
    flex: 1,  // Ocupa o espaço disponível
    padding: 16,  // Espaço interno
  },
  // Título do cardápio
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',  // Cinza escuro
  },
  // Card de cada item do menu
  menuItem: {
    flexDirection: 'row',  // Itens na horizontal
    backgroundColor: '#fff',  // Fundo branco
    borderRadius: 12,  // Cantos arredondados
    padding: 16,  // Espaço interno
    marginBottom: 12,  // Espaço entre os cards
    alignItems: 'center',  // Centraliza verticalmente
    // Sombras para efeito de elevação
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,  // Sombra no Android
  },
  // Container da imagem
  imageContainer: {
    width: 70,
    height: 70,
    borderRadius: 8,  // Cantos levemente arredondados
    overflow: 'hidden',  // Esconde partes da imagem que saem do container
    backgroundColor: '#f0f0f0',  // Cor de fundo se a imagem não carregar
  },
  // Estilo da imagem
  image: {
    width: '100%',  // Largura total do container
    height: '100%',  // Altura total do container
  },
  // Área de informações do produto
  info: {
    flex: 1,  // Ocupa o espaço restante
    marginLeft: 16,  // Espaço entre a imagem e as informações
  },
  // Nome do produto
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  // Descrição do produto
  description: {
    fontSize: 14,
    color: '#666',  // Cinza médio
    marginBottom: 8,
  },
  // Preço do produto
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2ecc71',  // Verde
  },
  // Botão de adicionar ao carrinho
  addButton: {
    backgroundColor: '#e74c3c',  // Vermelho
    width: 40,
    height: 40,
    borderRadius: 20,  // Torna o botão redondo
    justifyContent: 'center',  // Centraliza o texto verticalmente
    alignItems: 'center',  // Centraliza o texto horizontalmente
  },
  // Texto do botão de adicionar
  addButtonText: {
    color: '#fff',  // Branco
    fontSize: 20,
    fontWeight: 'bold',
  },
  // Botão do carrinho (fixo na parte inferior)
  cartButton: {
    backgroundColor: '#3498db',  // Azul
    margin: 16,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  // Texto do botão do carrinho
  cartButtonText: {
    color: '#fff',  // Branco
    fontSize: 18,
    fontWeight: 'bold',
  },
});

// Exporta o componente para ser usado em outros arquivos
export default MenuScreen;
