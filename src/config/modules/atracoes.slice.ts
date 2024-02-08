import { createSlice } from "@reduxjs/toolkit";
import { Atracao } from "../../models/atracao.model";

const state: Atracao[] = [
    {
        id: "1",
        nome: "Fresno",
        descricao:
            "Nossa casa fica até menos assombrada quando a gente curte show de artistas que gostamos tanto, né? E estamos muito felizes em saber que Fresno estará com a gente nessa próxima edição.",
        curtidas: 0,
        descurtidas: 0,
        horario: "17:00",
        urlFoto:
            "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-fresno.png",
    },
    {
        id: "2",
        nome: "Armandinho",
        descricao:
            "Nessa e em todas as outras vidas queremos Armandinho no nosso lineup! A gente sabe que vocês esperavam ele aqui de novo com a gente, e por isso ele vai estar em mais um verão com toda sua vibe maravilhosa.",
        curtidas: 0,
        descurtidas: 0,
        horario: "18:00",
        urlFoto:
            "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-armandinho.png",
    },
    {
        id: "3",
        nome: "Nxzero",
        descricao:
            "Entre razões e emoções a saída é se jogar ao som de NX Zero. Estamos felizes demais em ter conosco uma banda que marcou gerações e que um dos lugares onde a Turnê Cedo ou Tarde vai se apresentar é no nosso! Já estamos arrumando nossa franja, nosso lápis de olhos preto e nossa munhequeira quadriculada.",
        curtidas: 0,
        descurtidas: 0,
        horario: "19:00",
        urlFoto:
            "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-nxzero.png",
    }, {
        id: "4",
        nome: "Reação em cadeia",
        descricao:
            "Formada em 99 em Novo Hamburgo, Reação em Cadeia é uma das bandas mais relevantes do rock gaúcho a nível nacional. Eles retomaram as atividades no Planeta de 2023, após seis anos de pausa, em um show que fez todo mundo se emocionar e cantar os clássicos mais nostálgicos.",
        curtidas: 0,
        descurtidas: 0,
        horario: "20:00",
        urlFoto:
            "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-reacao-em-cadeia.png",
    },
]

const atracoesSlice = createSlice({
    name: "atracoes",
    initialState: state,
    reducers: {}
})


export default atracoesSlice.reducer