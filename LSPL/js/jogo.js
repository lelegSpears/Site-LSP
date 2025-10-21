 let clicou = false;
 let i_Letra = 0;
 let i_Frase = ["Você pegou a pistola mas ela estava descarregada, você morreu.", "Você da um golpe e mata o zumbi, assim sobrevivendo. Parabêns!"]

 function pistola(){
    if (clicou) return;
    document.getElementById("moment").innerText = ""
    A_Pistola();
    clicou = true;
 }

 function bastao(){
    if (clicou) return;
    document.getElementById("moment").innerText = ""
    A_Bastao();
    clicou = true;
 }

 function A_Pistola(){
    if (i_Letra < i_Frase[0].length){
        document.getElementById("moment").textContent += i_Frase[0].charAt(i_Letra);
        i_Letra++;
        setTimeout(A_Pistola, 50);
    }
 }

 function A_Bastao(){
    if (i_Letra < i_Frase[1].length){
        document.getElementById("moment").textContent += i_Frase[1].charAt(i_Letra);
        i_Letra++;
        setTimeout(A_Bastao, 50);
    }
 }