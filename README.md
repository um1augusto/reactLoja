E-Commerce App
Este é um aplicativo de e-commerce desenvolvido com React Native, permitindo que os usuários façam compras, visualizem produtos, adicionem itens ao carrinho, façam login e realizem o pagamento.

Funcionalidades

1. Tela de Login
Objetivo: Permite que o usuário faça login usando seu email e senha.
Fluxo: Após o login, o usuário é redirecionado para a tela de lista de produtos.
Componentes usados: TextInput, TouchableOpacity, useContext (UserContext).

2. Tela de Lista de Produtos
Objetivo: Exibe uma lista de produtos disponíveis para compra, utilizando uma API externa para carregar os dados.
Componentes usados: FlatList, ActivityIndicator, ProductCard (exibe informações sobre cada produto, como nome, imagem e preço).
Funcionalidade: Os usuários podem clicar em um produto para ver mais detalhes e adicioná-lo ao carrinho.

3. Tela de Detalhes do Produto
Objetivo: Exibe informações detalhadas sobre o produto, como descrição e avaliação.
Fluxo: A partir da lista de produtos, o usuário pode tocar em um item para visualizar os detalhes.
Componentes usados: Text, Image, View.

4. Carrinho de Compras
Objetivo: Exibe os produtos que o usuário adicionou ao carrinho.
Componentes usados: CartCard (exibe o produto no carrinho, com a possibilidade de alterar a quantidade ou remover o item).
Funcionalidade: O usuário pode adicionar ou remover produtos, e também decrementar a quantidade de itens.

5. Tela de Pagamento
Objetivo: Exibe um formulário para o usuário revisar e confirmar os dados de pagamento (dados do cartão de crédito).
Componentes usados: CreditCard (exibe as informações do cartão de crédito), Button.
Funcionalidade: Permite ao usuário confirmar o pagamento e finalizar a compra.

6. Status do Pedido
Objetivo: Exibe o status atual do pedido após a compra ser confirmada.
Componentes usados: Text, View.
Fluxo: Exibe um feedback de sucesso ou erro após a finalização do pagamento.

7. Tela de Perfil do Usuário
Objetivo: Exibe as informações do usuário logado, como nome, email e avatar.
Componentes usados: Image, Text, Button.
Funcionalidade: O usuário pode fazer logout e voltar para a tela de login.
Tecnologias
React Native: Para desenvolvimento do app mobile.
React Navigation: Para navegação entre as telas (Stacks e Bottom Tabs).
Axios: Para fazer requisições HTTP e carregar os dados dos produtos.
AsyncStorage: Para armazenar os dados do usuário e do carrinho localmente.
Toast: Para mostrar notificações de sucesso e erro no app.
Estrutura do Projeto
O projeto está organizado nas seguintes pastas:

1. /src/components
Contém componentes reutilizáveis, como:
CartCard.tsx: Exibe os itens no carrinho com a possibilidade de alterar a quantidade ou remover.
CreditCard.tsx: Exibe as informações do cartão de crédito.
MenuHeader.tsx: Um ícone de carrinho que permite navegar para o carrinho.
ProductCard.tsx: Exibe os produtos na lista de produtos.

2. /src/contexts
Contém os contextos que gerenciam o estado global do carrinho de compras e do usuário.
CartContext.tsx: Gerencia o carrinho de compras, permitindo adicionar, remover e atualizar os produtos.
UserContext.tsx: Gerencia o estado do usuário, incluindo login, logout e armazenamento do token de acesso.

3. /src/routes
Contém as rotas de navegação:
AppRoutes.tsx: Define as rotas principais do app (produtos, carrinho, perfil, etc).
AuthRoutes.tsx: Define as rotas de autenticação (login).
index.tsx: Gerencia a navegação, verificando se o usuário está logado para renderizar as rotas apropriadas.

4. /src/screens
Contém as telas principais do app, como:
Cart.tsx: Exibe o carrinho de compras.
Login.tsx: Tela de login.
OrderStatus.tsx: Tela de status do pedido.
Payment.tsx: Tela de pagamento.
ProductDetails.tsx: Detalhes do produto.
ProductList.tsx: Lista de produtos.
UserDetails.tsx: Detalhes do usuário.

5. /src/types
Contém as definições dos tipos de dados usados no app.
Product.ts: Define as interfaces de produtos e itens no carrinho.
User.ts: Define a interface para os dados do usuário.

6. /src/utils
Contém funções auxiliares, como:
Toast.tsx: Para exibir mensagens de sucesso, erro ou aviso no app.

7. /App.tsx
O ponto de entrada do aplicativo, onde o contexto e as rotas são definidos.
Como Rodar o Projeto
Clone o repositório:

git clone https://github.com/um1augusto/reactLoja

cd e-commerce-app

Instale as dependências:

npm install
Execute o aplicativo no ambiente desejado (Android):

npx react-native run-android
