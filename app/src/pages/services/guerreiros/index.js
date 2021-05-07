import React, { useEffect, useState} from 'react'
import styles from './style.module.css'

import Image from 'next/image'
import { Form, Input, Select, Textarea } from '@rocketseat/unform';

import api from '../../../services/api'
import MyTimer from '../../../components/Cronometro.js/index'

export default function Finances( ) {

    
    const [jogo, setJogo] = useState()
    const [jogadores, setJogadores] = useState()
    const [estado, setEstado] = useState('livre')

    useEffect(() => {
        async function getDados(){
            const response = await api.get(`https://guerreiros.herokuapp.com/jogo/608ba203ac8ec100155a9a18`)
            const options = []
            response.data.escalacao.map((obj) => { options.push({id: obj._id, title: obj.name})} )
            options.push({id: null, title: ""}, {id: "Jogador adversário", title: "Jogador adversário"})
            setJogadores(options)
        }
        getDados()
    }, [])

    async function handleSubmit(data) {
        var time = await localStorage.getItem('@time-gamer')

        /*
        await api.post(`https://guerreiros.herokuapp.com/addevent/608baa4eac8ec100155a9a1c`, {
            description: data.descricao,
            event: data.evento,
            player: data.jogador,
            assistance: data.assistencia,
            club: data.club,
            time: `${parse(time).minutos}'`,
            cardColor: data.color
        })
        */
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


                    <Form onSubmit={handleSubmit}>
                        
                        <Select className={styles.input} name="evento" 
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
                    <Form onSubmit={handleSubmit}>
                        <div className={styles.div}>
                            <Input label="Evento" className={styles.input} name="evento" placeholder="Informe o evento" />
                            <Textarea className={styles.textarea} name="descricao" placeholder="Descreva o lance"/>
                        </div>
                        <button className={styles.button} type="submit">Salvar</button>
                    </Form>

                    : estado === "gol" ?
                    <Form onSubmit={handleSubmit}>
                        <div className={styles.div}>
                            <div style={{width: '100%', margin: '0 1rem 0 0'}}>
                                <Input className={styles.input} name="evento" value="GOOOL" disabled/>
                                <Select label="Clube:" className={styles.input} name="club" placeholder="club" options={[{id: "Guerreiros", title: "Guerreiros"}, {id: "PSG", title: "PSG"}]} required />
                            </div>
                            <Textarea className={styles.textarea} name="descricao" placeholder="Descreva o lance" required/>
                        </div>
                        <div className={styles.div}>
                            <Select label="Jogador:" className={styles.input} name="jogador" placeholder="gol" options={jogadores} required/>
                            <Select label="Assistência:" className={styles.input} name="assistência" placeholder="Assistência" options={jogadores} />
                        </div>
                        <button className={styles.button} type="submit">Salvar</button>
                    </Form>
                    :
                    <Form onSubmit={handleSubmit}>
                        <div className={styles.div}>
                            <div style={{width: '100%', margin: '0 1rem 0 0'}}>
                                <Input className={styles.input} name="evento" value="Cartão" disabled/>
                                <Select label="Clube:" className={styles.input} name="club" placeholder="gol" options={[{id: "Guerreiros", title: "Guerreiros"}, {id: "PSG", title: "PSG"}]} required />
                            </div>
                            <Textarea className={styles.textarea} name="descricao" placeholder="Descreva o lance" required/>
                        </div>
                        <div className={styles.div}>
                            <Select label="Cor:" className={styles.input} name="jogador" placeholder="gol" options={[{id: "Amarelo", title: "Amarelo"}, {id: "Vermelho", title: "Vermelho"}]} required />
                            <Select label="Jogador:" className={styles.input} name="color" placeholder="Cor do cartão" options={jogadores} required/>
                        </div>
                        <button className={styles.button} type="submit">Salvar</button>
                    </Form>
                }
                </section>
            </main>
        </>
    )
}
