# Blackjack Game

## Descrição

O **Blackjack Game** é um jogo de Blackjack simples desenvolvido com **JavaScript**, **HTML** e **CSS**. Neste jogo, você joga contra a "casa" (um adversário virtual) e deve tentar alcançar uma soma de cartas o mais próximo possível de 21 sem ultrapassar. O jogador começa com fichas e pode ganhar ou perder fichas dependendo de sua performance no jogo.

## Como Jogar

1. **Iniciar o jogo**:
   - Ao iniciar o jogo, o jogador receberá duas cartas. O objetivo é alcançar uma soma de 21 pontos ou o mais próximo possível disso.
   
2. **Regras do jogo**:
   - As cartas numeradas de 2 a 10 valem seu valor de face.
   - As cartas com figuras (J, Q, K) valem 10 pontos.
   - O Ás pode valer 11 pontos ou 1 ponto, dependendo da situação.
   - O jogador pode pedir mais cartas (clicando em "Nova Carta") ou parar a qualquer momento.
   - Se a soma das suas cartas for maior que 21, você perde a rodada.
   - Se a soma for exatamente 21, você ganha.
   - Se o jogo terminar, as fichas do jogador serão ajustadas, com o jogador ganhando ou perdendo 20 fichas por rodada.

3. **Botões do jogo**:
   - **Nova Carta**: Adiciona uma carta à mão do jogador.
   - **Parar**: A casa (adversário) revela sua carta e o vencedor é determinado.
   - **Novo Jogo**: Reinicia o jogo após o término de uma rodada.

4. **Fichas**:
   - O jogador começa com 145 fichas.
   - A cada rodada, o jogador aposta 20 fichas.
   - Ao ganhar, o jogador recebe 20 fichas de volta. Se perder, perde as fichas apostadas.
   - Se o jogador ficar sem fichas, o jogo será reiniciado automaticamente.

## Tecnologias

- **HTML**: Estrutura básica da página, onde o jogo é exibido.
- **CSS**: Estilo visual da interface do jogo.
- **JavaScript**: Lógica do jogo, controle das cartas, interação com o jogador e cálculo das pontuações.

## Como Jogar Localmente

1. **Clone o repositório**:
   - Abra o terminal e execute o comando:
   ```bash
   git clone https://github.com/seu-usuario/blackjack-game.git
   ```
   
2. **Abra o arquivo HTML**:
   - Navegue até o diretório do projeto e abra o arquivo `index.html` em seu navegador.

3. **Inicie o jogo**:
   - O jogo estará pronto para jogar assim que você abrir o arquivo HTML em seu navegador.

## Funcionalidades

- **Cartas Aleatórias**: O jogo gera cartas aleatórias para o jogador e para a casa.
- **Controle de Fichas**: O jogador pode ganhar ou perder fichas durante o jogo.
- **Exibição de Cartas e Soma**: O jogo exibe as cartas do jogador e a soma de suas cartas.
- **Regras de Blackjack**: O jogador deve tentar chegar o mais próximo possível de 21 pontos sem ultrapassá-los.
- **Botões de Ação**: O jogador pode escolher "Nova Carta", "Parar" ou "Novo Jogo".

## Contribuindo

1. Faça um fork deste repositório.
2. Crie uma branch para a sua feature (`git checkout -b feature/feature-name`).
3. Faça o commit das suas mudanças (`git commit -am 'Adiciona uma nova funcionalidade'`).
4. Envie para o repositório remoto (`git push origin feature/feature-name`).
5. Abra um Pull Request.

## Licença

Distribuído sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
