
ÍNDICE:
- [FLUXO BÁSICO](#1-INICIO)
- [TRABALHANDO COM GIT](#2-GIT)
- Fazendo uma [Nova Task](#11-Task)
- [Revisando Task](#11-Task) a TASK 
- [Pull Request](#3-Pull) a TASK 


# 1. INICIO
### 1.1 Cartão
- Deve ter a descrição 
- 'Passo resumidos' do que fazer
- Objetivos(entregáveis) para continuar o projeto

![dando fork no projeto](img/1.png)

### 1.2 Após o cumprimento da Task, avisar a equipe de testes para verificar (Back end ou Front end)

### 1.3 Após a validação de 1 pessoa dos testes, fazer o [Pull Request](#3-Pull) a TASK 

# 2. GIT
## 1.1 Task

### 1. Inicialmente você deverá com sua conta logada, fazer um FORK neste projeto principal, com isso você estará copiando para seu repositório.

![dando fork no projeto](img/01.png)


### 2. Estando em seu repositório, utilize o botão para copiar a url e poder clonar pelo terminal:

![clonando](img/02.png)

### 3. No terminal, utilize os comandos:
- git init
- git clone (cole o caminho)
- cd (nome da pasta - no caso o nome da minha pasta é cuidaDOso)

![pegando pelo git](img/03.png)

### 4. Como boa prática, sempre inicie uma nova branch(ramificação):
- git checkout -b (nome da Branch)
**- o nome da branch por padrão vamos colocar f_01 (para task front 01) e b_01(para task back 01)**
- assim,foi criado uma nova ramificação (branch), porém verifique se você está na branch correta(que acabou de ser criada) com git branch:
<br>
![branch](img/04.png)
### Após o processo, é possível trabalhar na TASK

### 5. Após todas as modificações e finalização na TASK, conforme as boas práticas faça:
- git add (nome do arquivo)
- git commit -m"Comentário sobre a modificação"
- **Repita o processo até que todos os arquivos sejam 'pré upados'** 
- Após upar todos os arquivos, veja com git status quais arquivos irão subir
- Para subir de fato, utilize o git push origin (nome da branch utilizada)


# 3. Pull
## 1.1 Fazendo Pull Request
- Vá no repositório originário e busque a opção Pull request:
![pull request](img/2.png)

## 1.2 
- Vá no repositório originário e busque a opção Pull request:
![pull request](img/2.png)

- Escolha a branch que foi alterada:
![pull request](img/4.png)

- Escreva o comentário e observações pertinentes e clique no botão 'create new pull request'
![pull request](img/5.png)


