// Importa as bibliotecas necessárias
import React from 'react';
// NavigationContainer é o "container" principal que envolve toda a navegação
import { NavigationContainer } from '@react-navigation/native';
// createStackNavigator cria navegação em pilha (telas que empilham)
import { createStackNavigator } from '@react-navigation/stack';
// createBottomTabNavigator cria navegação por abas na parte inferior
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Ionicons é a biblioteca de ícones que vamos usar
import { Ionicons } from '@expo/vector-icons';

// Importa as telas dos componentes
import HomeScreen from './components/HomeScreen';
import MenuScreen from './components/MenuScreen';
import CartScreen from './components/CartScreen';
import ProfileScreen from './components/ProfileScreen';

// Cria os navegadores
const Stack = createStackNavigator();      // Navegador em pilha
const Tab = createBottomTabNavigator();    // Navegador por abas

// Define o componente das abas principais
function MainTabs() {
  return (
    // Cria o navegador por abas
    <Tab.Navigator
      // Configurações das abas
      screenOptions={({ route }) => ({
        // Função que define o ícone de cada aba
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;  // Variável para armazenar o nome do ícone

          // Verifica qual aba está ativa e escolhe o ícone apropriado
          if (route.name === 'Início') {
            // Se estiver focada: ícone preenchido, senão: contorno
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Cardápio') {
            iconName = focused ? 'fast-food' : 'fast-food-outline';
          } else if (route.name === 'Carrinho') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // Retorna o componente do ícone
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        // Cor da aba quando está ativa (vermelho)
        tabBarActiveTintColor: '#e74c3c',
        // Cor da aba quando está inativa (cinza)
        tabBarInactiveTintColor: 'gray',
      })}
    >
      {/* Define cada aba da navegação */}
      <Tab.Screen name="Início" component={HomeScreen} />
      <Tab.Screen name="Cardápio" component={MenuScreen} />
      <Tab.Screen name="Carrinho" component={CartScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// Componente principal do aplicativo
function App() {
  return (
    // Container que envolve toda a navegação do app
    <NavigationContainer>
      {/* Navegador em pilha (geralmente usado para transições entre telas) */}
      <Stack.Navigator 
        screenOptions={{ headerShown: false }}  // Esconde o cabeçalho padrão
      >
        {/* Tela principal que contém as abas */}
        <Stack.Screen name="Main" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Exporta o componente principal para ser executado
export default App;
