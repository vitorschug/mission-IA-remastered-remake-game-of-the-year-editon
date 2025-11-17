const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual o principal objetivo do Minecraft",
        alternativas: [
            {
                texto: "Construir e sobreviver!",
                afirmacao: "acertou: O jogo é focado em sobrevivência, criação e exploração livre, "
            },
            {
                texto: "Matar o ender dragon!",
                afirmacao: "errou: matar o ender dragon é o objetivo final,"
            }
        ]
    },
    {
        enunciado: "Qual o mascote encanador da Big N(Nintendo)",
        alternativas: [
            {
                texto: "Mario",
                afirmacao: "acertou: Mario é o mascote da Nintendo desde 1981,"
            },
            {
                texto: "Sonic",
                afirmacao: "errou: Sonic é o da SEGA,"
            }
        ]
    },
    {
        enunciado: "O meme “The cake is a lie” vem de qual jogo",
        alternativas: [
            {
                texto: "Portal",
                afirmacao: "certo,"
            },
            {
                texto: "Doom",
                afirmacao: "errado,"
            }
        ]
    },
    {
        enunciado: "Em Halo, o protagonista ---- diz a frase (Todos nós falhamos. Todos nós cometemos erros. É o que nos torna humanos) para um piloto devastado após cometer um erro, qual o nome do protagonista?",
        alternativas: [
            {
                texto: "Master Chief",
                afirmacao: "acertou: em halo infinite ele é o protagonista,"
            },
            {
                texto: "Marcus Fenix",
                afirmacao: "errado: esse é o protagonista de Gears Of War",
            }
        ]
    },
    {
        enunciado: "qual jogo foi o mais vendido em seu lançamento",
        alternativas: [
            {
                texto: "GTA 5",
                afirmacao: "certo: gta 5 vendeu US$ 1 bilhão em vendas em três dias."
            },
            {
                texto: "Call of Duty: Modern Warfare II",
                afirmacao: "errado: cod mw 2: 800 milhoes de dolares, gta 5:US$ 1 bilhão em vendas em três dias."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Quantas acertou?...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
