## Pre requisitos
- [Setup ambiente de desenvolvimento](/Instructions/SETUP.md)

## Instalação

Abrir o terminal neste diretório e rodar o comando:

```
 docker-compose build
```

Se ocorrer erro no build, rode o comando:
 
```
 DOCKER_BUILDKIT=1 docker-compose build
```

Executar container IRIS com o seu projeto:

```
 docker-compose up -d
```

## Acessando o IRIS

- Terminal:

```
$ docker-compose exec iris iris session iris
```

- Portal local
```

```
 http://localhost:53773/csp/sys/%25CSP.Portal.Home.zen
    - usuario: _SYSTEM
    - senha: SYS
```

## Criar uma nova namespace para o projeto
- Acesse o portal local:  http://localhost:53773/csp/sys/%25CSP.Portal.Home.zen
- Acesse Sistema > Configuração > Namespaces > Criar novo namespace
- Preencha os dados do namespace:

![namespace.png](/Instructions/images/namespace.png)


## Manutenção de usuários

- No portal de administração, acesse Sistema > Administração de Segurança > Usuários para visualizar os usuários existentes e seus direitos de acesso

![irisusuarios.png](/Instructions/images/irisusuarios.png)

- Ao criar um novo usuário, para facilitar copie os direitos de acesso de um usuário existente

![irisnovousuario.png](/Instructions/images/irisnovousuario.png)






## How to start coding
This repository is ready to code in VSCode with ObjectScript plugin.
Install [VSCode](https://code.visualstudio.com/), [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker) and [ObjectScript](https://marketplace.visualstudio.com/items?itemName=daimor.vscode-objectscript) plugin and open the folder in VSCode.
Open /src/dc/sample/ObjectScript.cls class and try to make changes - it will be compiled in running IRIS docker container.
![docker_compose](https://user-images.githubusercontent.com/2781759/76656929-0f2e5700-6547-11ea-9cc9-486a5641c51d.gif)

Feel free to delete PackageSample folder and place your ObjectScript classes in a form
/src/Package/Classname.cls
[Read more about folder setup for InterSystems ObjectScript](https://community.intersystems.com/post/simplified-objectscript-source-folder-structure-package-manager)

The script in Installer.cls will import everything you place under /src into IRIS.


## What's inside the repository

### Dockerfile

The simplest Dockerfile which starts IRIS and imports code from /src folder into it.
Use the related docker-compose.yml to easily setup additional parametes like port number and where you map keys and host folders.


### .vscode/settings.json

Settings file to let you immediately code in VSCode with [VSCode ObjectScript plugin](https://marketplace.visualstudio.com/items?itemName=daimor.vscode-objectscript))

### .vscode/launch.json
Config file if you want to debug with VSCode ObjectScript

[Read about all the files in this article](https://community.intersystems.com/post/dockerfile-and-friends-or-how-run-and-collaborate-objectscript-projects-intersystems-iris)
