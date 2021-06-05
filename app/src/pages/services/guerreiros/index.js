import React, { useEffect, useState} from 'react'
import styles from './style.module.css'

import { Form, Input, Select, Textarea } from '@rocketseat/unform';

import api from '../../../services/api'
import MyTimer from '../../../components/Cronometro.js/index'

export default function Guerreiros() {

    const [escalacao, setEscalacao] = useState()
    const [estado, setEstado] = useState('livre')
    const [jogadoresSelect, setJogadoresSelect] = useState()
    const [minutos, setMinutos] = useState()

    useEffect(() => {
        localStorage.setItem('@time-gamer', JSON.stringify({ dias: 0, horas: 0, minutos: 0, segundos: 0 }));

        try {
            async function getDadosJogo() {
                let response = await api.get(`jogo/60bb996338a986017c428999`)
                console.log(response.data)
                let options = []
                options.push({ id: null, title: "" }, { id: "Jogador adversário", title: "Jogador adversário" })
                response.data.escalacao.map((obj) => { options.push({ id: obj.idJogador, title: obj.name }) })
                setEscalacao(options)
            }
            async function getDadosescalacao() {
                let response = await api.get(`jogadores/jogadores`)
                let options = []
                response.data.map((obj) => { options.push({ id: obj._id, title: obj.nome }) })
                setJogadoresSelect(options)
            }
            getDadosJogo()
            getDadosescalacao()
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        try {
            async function addTime() {
                await api.put(`edit/60bb996338a986017c428999`, {
                    time: minutos
                })
            }

            addTime()
        } catch (error) {
            console.log(error)
        }
    }, [minutos])

    setInterval(async function () {
        if (typeof window !== 'undefined') {
            const time = localStorage.getItem('@time-gamer')
            setMinutos(`${JSON.parse(time).minutos}'`)
        }
    }, 3000);

    async function handleSubmitEvento(data) {
        console.log(data)
        console.log(minutos)
        try {
            await api.put(`addevent/60bb996338a986017c428999`, {
                description: data.description,
                event: data.evento,
                player: data.jogador,
                assistance: data.assistencia,
                club: data.club,
                time: minutos,
                cardColor: data.color
            })
        } catch (error) {
            console.log(error)
        }
    }

    async function handleSubmitEscalacao(data) {
        try {
            await api.put(`addescalacao/60bb996338a986017c428999`, {
                idJogador: data.player,
            })
        } catch (error) {
            console.log(error)
        }
    }

    async function handleSubmitStatus(data) {
        try {
            await api.put(`edit/60bb996338a986017c428999`, {
                status: data.status,
            })
        } catch (error) {
            console.log(error)
        }
    }

    function onChangeEstado(data) {
        setEstado(data.target.value)
    }

    return (
        <>
            <header className={styles.header}>
                <h1>GUERREIROS</h1>
            </header>

            <main className={styles.main}>
                <MyTimer autoStart={false} dias={false} horas={false} minutos={true} segundos={true}/>

                <section className={styles.section}>
                    <div className={styles.div}>
                        <Select className={styles.input} name="evento" 
                        options={
                        [
                            {id: 'livre', title: 'Livre'},
                            {id: 'gol', title: 'Gol'},
                            {id: 'cartao', title: 'cartao'},
                        ]
                        }
                        onChange={onChangeEstado}
                        />
                    </div>


                    <Form onSubmit={handleSubmitStatus}>
                        
                        <Select className={styles.input} name="status"
                        options={
                        [   {id: 'Primeiro tempo', title: 'Primeiro tempo'},
                            {id: 'Intervalo', title: 'Intervalo'},
                            {id: 'Segundo tempo', title: 'Segundo tempo'},
                            {id: 'Jogo finalizado', title: 'Jogo finalizado'},
                        ]}
                        />
                        <button className={styles.button} type="submit">Salvar</button>
                    </Form>
                </section>

                <section className={styles.section}>
                {
                    estado === "livre" ?
                            <Form onSubmit={handleSubmitEvento}>
                        <div className={styles.div}>
                            <Input label="Evento" className={styles.input} name="evento" placeholder="Informe o evento" />
                                    <Textarea className={styles.textarea} name="description" placeholder="Descreva o lance" />
                        </div>
                        <button className={styles.button} type="submit">Salvar</button>
                    </Form>

                    : estado === "gol" ?
                                <Form onSubmit={handleSubmitEvento}>
                        <div className={styles.div}>
                            <div style={{width: '100%', margin: '0 1rem 0 0'}}>
                                <Input className={styles.input} name="evento" value="GOOOL" disabled/>
                                            <Select label="Clube:" className={styles.input} name="club" placeholder="club" options={[{ id: "Guerreiros", title: "Guerreiros" }, { id: "14 BIS", title: "14 BIS" }]} required />
                            </div>
                                        <Textarea className={styles.textarea} name="description" placeholder="Descreva o lance" required />
                        </div>
                        <div className={styles.div}>
                                        <Select label="Jogador:" className={styles.input} name="jogador" placeholder="gol" options={escalacao} required />
                                        <Select label="Assistência:" className={styles.input} name="assistance" placeholder="Assistência" options={escalacao} />
                        </div>
                        <button className={styles.button} type="submit">Salvar</button>
                    </Form>
                    :
                                <Form onSubmit={handleSubmitEvento}>
                        <div className={styles.div}>
                            <div style={{width: '100%', margin: '0 1rem 0 0'}}>
                                <Input className={styles.input} name="evento" value="Cartão" disabled/>
                                            <Select label="Clube:" className={styles.input} name="club" placeholder="gol" options={[{ id: "Guerreiros", title: "Guerreiros" }, { id: "14 BIS", title: "14 BIS" }]} required />
                            </div>
                                        <Textarea className={styles.textarea} name="description" placeholder="Descreva o lance" required />
                        </div>
                        <div className={styles.div}>
                                        <Select label="Cor:" className={styles.input} name="color" placeholder="gol" options={[{ id: "Amarelo", title: "Amarelo" }, { id: "Vermelho", title: "Vermelho" }]} required />
                                        <Select label="Jogador:" className={styles.input} name="jogador" placeholder="Cor do cartão" options={escalacao} required />
                        </div>
                        <button className={styles.button} type="submit">Salvar</button>
                    </Form>
                }
                </section>

                <section className={styles.section}>
                    <Form onSubmit={handleSubmitEscalacao}>
                        {
                            jogadoresSelect ?
                                <Select label="Jogador:" className={styles.input} name="player" placeholder="Seleciona o jogador" options={jogadoresSelect} required />
                                :
                                undefined
                        }
                        <button className={styles.button} type="submit">Salvar</button>
                    </Form>
                </section>
            </main>
        </>
    )
}
