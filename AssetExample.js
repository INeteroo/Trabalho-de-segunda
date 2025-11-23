// Importa os componentes necessários do React Native
import { Text, View, StyleSheet, Image } from 'react-native';

// Define o componente AssetExample (Exemplo de Asset)
export default function AssetExample() {
  return (
    // Container principal do componente
    <View style={styles.container}>
      {/* Texto explicativo sobre como importar arquivos locais */}
      <Text style={styles.paragraph}>
        Local files and assets can be imported by dragging and dropping them into the editor
        // Em português: "Arquivos locais e assets podem ser importados arrastando e soltando no editor"
      </Text>
      
      {/* Imagem de exemplo carregada de um arquivo local */}
      <Image style={styles.logo} source={require('../assets/Supreme.png')} />
      // require() é usado para carregar imagens locais do projeto
      // '../assets/Supreme.png' é o caminho relativo para a imagem
    </View>
  );
}

// Define os estilos visuais do componente
const styles = StyleSheet.create({
  // Estilo do container principal
  container: {
    alignItems: 'center',        // Centraliza os itens horizontalmente
    justifyContent: 'center',    // Centraliza os itens verticalmente
    padding: 24,                 // Espaço interno de 24 unidades
  },
  
  // Estilo do parágrafo/texto
  paragraph: {
    margin: 24,                  // Espaço externo de 24 unidades em todos os lados
    marginTop: 0,                // Remove o espaço superior (sobrescreve o margin acima)
    fontSize: 14,                // Tamanho da fonte
    fontWeight: 'bold',          // Texto em negrito
    textAlign: 'center',         // Texto centralizado
  },
  
  // Estilo da imagem/logo
  logo: {
    height: 128,                 // Altura fixa de 128 unidades
    width: 128,                  // Largura fixa de 128 unidades (imagem quadrada)
  }
});
