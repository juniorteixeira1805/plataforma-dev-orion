import Image from 'next/image'

import styles from './style.module.css'

export default function Home( {org} ) {
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

                <a href="#" 
                className={styles.buttonnew}>+ Nova Transação</a>
                
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
    </>
  )
}
