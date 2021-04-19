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

        <div className={modal === true ? styles.modaloverlayaction : styles.modaloverlay}>
            <div className={styles.modal}>
                <div id="form">
                    <h2>Nova Transação</h2>
                    <form action="">
                        <div class="input-group">
                            <label 
                                class="sr-only" 
                                for="description">Descrição</label>
                            <input 
                                type="text" 
                                id="description" 
                                name="description"
                                placeholder="Descrição"
                            />
                        </div>

                        <div class="input-group">
                            <label 
                                class="sr-only" 
                                for="amount">Valor</label>
                            <input 
                                type="number"
                                step="0.01"
                                id="amount" 
                                name="amount"
                                placeholder="0,00"
                            />
                            <small class="help">Use o sinal - (negativo) para despesas e , (vírgula) para casas decimais</small>
                        </div>

                        <div class="input-group">
                            <label 
                                class="sr-only" 
                                for="date">Data</label>
                            <input 
                                type="date" 
                                id="date" 
                                name="date"
                            />
                        </div>

                        <div class="input-group actions">
                            <a 
                            href="#" 
                            class="button cancel">Cancelar</a>
                            <button>Salvar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}
