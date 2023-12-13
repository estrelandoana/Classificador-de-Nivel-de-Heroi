const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function dadosHeroi() {
    const nomeDoHeroi = await new Promise((resolve) => {
        r1.question("Digite o nome do seu herói: ", resolve);
    });
    const xpHeroi = await new Promise((resolve) => {
    r1.question("Digite a quantidade de XP do seu herói: ", resolve);
    });
    return { nomeDoHeroi, xpHeroi };
}
dadosHeroi().then(({ nomeDoHeroi, xpHeroi}) => {
    let nivelDoHeroi;

if (xpHeroi <= 1000) {
  nivelDoHeroi = "Ferro";
    }
else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivelDoHeroi = "Bronze";
    }
else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivelDoHeroi = "Prata";
    }
else if (xpHeroi >= 6001 && xpHeroi <= 7000) {
    nivelDoHeroi = "Ouro";
    }
else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivelDoHeroi = "Platina";
    }
else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivelDoHeroi = "Ascendente";
    }
else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivelDoHeroi = "Imortal";
    }
else {
    nivelDoHeroi = "Radiante";
    } 

    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi);

    r1.close();
});