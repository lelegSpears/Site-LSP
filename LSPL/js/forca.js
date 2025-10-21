let palavras = ["SCRUM", "Sniper", "Python", "Banana", "agulha"] // palavra a ser adivinhada
const dicas = ["Metodologias ágeis", "Arma de longo alcance", "linguagem com sintax simples", "fruta", "usada para costurar"]
let palavra = palavras[Math.floor(Math.random() * palavras.length)].toLowerCase();
let palavra_C = "*".repeat(palavra.length);
let erros = 0;
let jogoAtivo = true;
let chutadas = [];

const formas = [
` 
  +---+
  |   |
      |
      |
      |
      |
=========`,
` 
  +---+
  |   |
  O   |
      |
      |
      |
=========`,
` 
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
` 
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,
` 
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========`,
` 
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========`,
` 
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========`,
` 
  +---+
  |   |
 [O]  |
 /|\\  |
 / \\  |
      |
========= GAME OVER`
];

    document.getElementById("esc").innerText = palavra_C;

    function Res() {
        if (!jogoAtivo) return; // impede jogar depois do fim

        let chute = document.getElementById("adivinhe").value.toLowerCase();
        document.getElementById("adivinhe").value = ""; // limpa input

        document.getElementById("stat").innerText = "";

        if (chute === "") {
            document.getElementById("stat").innerText = "Digite uma letra!";
            return;
        }
        
        if (chutadas.includes(chute)) {
        document.getElementById("tent").innerText = "Você já tentou essa letra!";
        return;
        }

        let acertou = false;

        for (let i = 0; i < palavra.length; i++) {
            if (palavra[i] === chute) {
                palavra_C = palavra_C.slice(0, i) + chute + palavra_C.slice(i + 1);
                acertou = true;
            }
        }

        if (chutadas.includes(chute)) {
            document.getElementById("tent").innerText = "Você ja tentou essa letra";
        }
        else {
        chutadas.push(chute);
        document.getElementById("T").innerText = "Letras tentadas: " + chutadas.join(", ");
        }

        document.getElementById("esc").innerText = palavra_C;

        if (!acertou) {
            erros++;
            document.getElementById("stat").innerText = "Você errou (erros: " + erros + ")";
        }

        // Vitória
        if (palavra_C === palavra) {
            jogoAtivo = false; // trava o jogo
            document.getElementById("stat").innerText = "🎉 Você ganhou! 🎉";
            document.getElementById("adivinhe").disabled = true;
            document.getElementById("responda").disabled = true;
            return;
        }

        // Atualiza boneco
        if (erros > 0 && erros <= formas.length) {
            document.getElementById("im").innerText = formas[erros - 1];
        }

        // Derrota
        if (erros >= formas.length) {
            jogoAtivo = false; // trava o jogo
            document.getElementById("stat").innerText = " Você perdeu! A palavra era: " + palavra;
            document.getElementById("adivinhe").disabled = true;
            document.getElementById("responda").disabled = true;
        }
    }
