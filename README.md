# Configuração para rodar localmente

## Configurando a api do strapi e o banco de dados postgresql do projeto

### Requisitos para executar:

- Docker instalado, podendo ser instalado com: \
  https://docs.docker.com/docker-for-windows/install/

- Nodejs

- Android Studio configurado para react-native, você pode acessar na documeentação do react-native: `https://reactnative.dev/docs/environment-setup`

### Executando o Projeto

#### API

- Entre na pasta: `cd .\apiRM`
- Depois execute o comando: `docker-compose up` ou, se não quiser vert o log `docker-compose up -d`
- Pronto! está executando a api!

#### Aplicativo

- Inicialize o AVD manager do android studio conforme mostra a documentação do react-native passado acima
- Entre na pasta: `cd .\RickAndMortyFavorite`
- Execute o comando em uma janela do terminal dentro dessa pasta: `npx react-native start`
- Deixe rodando e abra uma nova janela do terminal dentro dessa pasta e execute `npx react-native run-android`