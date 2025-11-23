// Importa as bibliotecas necessárias
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

// Define o componente da tela de perfil
function ProfileScreen({ navigation }) {
  return (
    // ScrollView permite rolar a tela para ver todo o conteúdo
    <ScrollView style={styles.container}>
      
      {/* Cabeçalho com foto, nome e email do usuário */}
      <View style={styles.header}>
        {/* Imagem de perfil do usuário */}
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face' }}
          style={styles.avatar}
        />
        {/* Nome do usuário */}
        <Text style={styles.userName}>João Silva</Text>
        {/* Email do usuário */}
        <Text style={styles.userEmail}>joao@email.com</Text>
      </View>

      {/* Menu de opções do perfil */}
      <View style={styles.menu}>
        
        {/* Botão: Meus Pedidos */}
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>📦 Meus Pedidos</Text>
        </TouchableOpacity>
        
        {/* Botão: Endereços */}
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>📍 Endereços</Text>
        </TouchableOpacity>
        
        {/* Botão: Formas de Pagamento */}
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>💳 Formas de Pagamento</Text>
        </TouchableOpacity>
        
        {/* Botão: Avaliações */}
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>⭐ Avaliações</Text>
        </TouchableOpacity>
        
        {/* Botão: Notificações */}
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>🔔 Notificações</Text>
        </TouchableOpacity>
        
        {/* Botão: Ajuda */}
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>❓ Ajuda</Text>
        </TouchableOpacity>
        
        {/* Botão especial: Sair (com cor diferente) */}
        <TouchableOpacity style={[styles.menuItem, styles.logoutItem]}>
          <Text style={[styles.menuText, styles.logoutText]}>🚪 Sair</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// Define os estilos visuais do componente
const styles = StyleSheet.create({
  // Estilo do container principal
  container: {
    flex: 1,                    // Ocupa toda a tela
    backgroundColor: '#f8f9fa', // Cor de fundo cinza claro
  },
  
  // Estilo do cabeçalho
  header: {
    alignItems: 'center',       // Centraliza os itens
    padding: 20,                // Espaço interno
    paddingTop: 40,             // Espaço extra no topo
    backgroundColor: '#fff',    // Fundo branco
    marginBottom: 10,           // Espaço abaixo do cabeçalho
  },
  
  // Estilo da foto de perfil
  avatar: {
    width: 100,                 // Largura da imagem
    height: 100,                // Altura da imagem
    borderRadius: 50,           // Torna a imagem redonda
    marginBottom: 15,           // Espaço abaixo da imagem
  },
  
  // Estilo do nome do usuário
  userName: {
    fontSize: 24,               // Tamanho da fonte
    fontWeight: 'bold',         // Texto em negrito
    color: '#333',              // Cor do texto (cinza escuro)
    marginBottom: 5,            // Espaço abaixo do texto
  },
  
  // Estilo do email do usuário
  userEmail: {
    fontSize: 16,               // Tamanho da fonte
    color: '#666',              // Cor do texto (cinza)
  },
  
  // Estilo do container do menu
  menu: {
    padding: 10,                // Espaço interno
  },
  
  // Estilo de cada item do menu
  menuItem: {
    backgroundColor: '#fff',    // Fundo branco
    padding: 18,                // Espaço interno
    borderRadius: 10,           // Cantos arredondados
    marginBottom: 8,            // Espaço entre os itens
    shadowColor: '#000',        // Cor da sombra
    shadowOffset: {
      width: 0,                 // Posição horizontal da sombra
      height: 1,                // Posição vertical da sombra
    },
    shadowOpacity: 0.1,         // Transparência da sombra
    shadowRadius: 2,            // Desfoque da sombra
    elevation: 2,               // Sombra no Android
  },
  
  // Estilo do texto dos itens do menu
  menuText: {
    fontSize: 16,               // Tamanho da fonte
    color: '#333',              // Cor do texto
  },
  
  // Estilo especial para o botão de Sair
  logoutItem: {
    marginTop: 20,              // Espaço extra acima
    backgroundColor: '#e74c3c', // Cor vermelha
  },
  
  // Estilo especial para o texto do botão Sair
  logoutText: {
    color: '#fff',              // Texto branco
    fontWeight: 'bold',         // Texto em negrito
  },
});

// Exporta o componente para ser usado em outros arquivos
export default ProfileScreen;
