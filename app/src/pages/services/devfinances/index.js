import { useState } from 'react'
import Image from 'next/image'

import styles from './style.module.css'

export default function Finances( ) {

  const [ modal, setModal] = useState(false)

  const toogleModal = async => {
    setModal( modal === false)
  }

  return (
    <>
      <header className={styles.header}>
        <Image
          src="/assets/devfinances/logo.svg"
          alt="Loga da página"
          width={250}
          height={250}
        />
      </header>

      <main className={styles.container}>
          <section className={styles.balance}>
            <h2 className={styles.sronly}>Balanço</h2>

            <div className={styles.card}>
              <h3>
                  <span>
                      Entradas
                  </span>
                  <Image
                    src="/assets/devfinances/income.svg"
                    alt="Image de entradas"
                    width={50}
                    height={50}
                  />
              </h3>
              <p id="incomeDisplay">R$ 0,00</p>
            </div>

            <div className={styles.card}>
              <h3>
                  <span>
                      Saídas
                  </span>
                  <Image
                    src="/assets/devfinances/expense.svg"
                    alt="Image de saídas"
                    width={50}
                    height={50}
                  />
              </h3>
              <p id="expenseDisplay">R$ 0,00</p>
            </div>

            <div className={styles.cardtotal}>
                <h3>
                    <span>
                        Total
                    </span>
                    <Image
                      src="/assets/devfinances/total.svg"
                      alt="Image de total"
                      width={50}
                      height={50}
                    />

                </h3>
                <p id="totalDisplay">R$ 0,00</p>
            </div>
          </section>

            <section className={styles.transaction}>
                <h2 className={styles.sronly}>Transações</h2>

                <button type="button" className={styles.buttonnew} onClick={toogleModal}>+ Nova transação</button>
                
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            <th>Valor</th>
                            <th>Data</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </section>
        </main>
        {
            modal === true ?
            <div className={styles.modaloverlayactive}>
                <div className={styles.modal}>
                    <h2 className={styles.headermodal}>Nova Transação</h2>
                    <div id="form">
                        <form action="">
                            <div className={styles.inputgroup}>
                                <label 
                                    className={styles.sronly} 
                                    for="description">Descrição</label>
                                <input 
                                    type="text" 
                                    id="description" 
                                    name="description"
                                    className={styles.input}
                                    placeholder="Descrição"
                                />
                            </div>

                            <div className={styles.inputgroup}>
                                <label 
                                    className={styles.sronly} 
                                    for="amount">Valor</label>
                                <input 
                                    type="number"
                                    step="0.01"
                                    id="amount" 
                                    name="amount"
                                    className={styles.input}
                                    placeholder="0,00"
                                />
                                <small className={styles.help}>Use o sinal - (negativo) para despesas e , (vírgula) para casas decimais</small>
                            </div>

                            <div c>
                                <label 
                                    className={styles.sronly} 
                                    for="date">Data</label>
                                <input 
                                    type="date" 
                                    id="date" 
                                    name="date"
                                    className={styles.input}
                                />
                            </div>

                            <div className={styles.modalFooter}>
                                <a 
                                href="#" 
                                className={styles.buttoncancel}
                                onClick={toogleModal}>Cancelar</a>
                                <button
                                className={styles.buttonsalvar}
                                >Salvar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        :

        undefined

        }
    </>
  )
}
