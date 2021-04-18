import Image from 'next/image'

import { Header, Footer, Balance, Card } from './styles.js'

export default function Home( {org} ) {
  return (
    <>
      <Header>
        <Image
          src="/assets/devfinances/logo.svg"
          alt="Image de entradas"
          width={500}
          height={500}
        />
      </Header>

      <main class="container">
          <Balance>
              <h2 class="sr-only">Balanço</h2>

              <Card>
                  <h3>
                    <span>
                        Entradas
                    </span>
                    <Image
                      src="/assets/devfinances/income.svg"
                      alt="Imagem de entradas"
                      width={50}
                      height={50}
                    />
                  </h3>
              </Card>

              <Card>
                  <h3>
                      <span>
                          Saídas
                      </span>
                      <Image
                      src="/assets/devfinances/expense.svg"
                      alt="Imagem de saídas"
                      width={50}
                      height={50}
                      />
                  </h3>
              </Card>

              <Card total>
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
              </Card>
          </Balance>

          <section id="transaction">
              <h2 class="sr-only">Transações</h2>

              <a href="#" 
              onclick="Modal.open()"
              class="button new">+ Nova Transação</a>
              
              <table id="data-table">
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

      <div class="modal-overlay">
          <div class="modal">
              <div id="form">
                  <h2>Nova Transação</h2>
                  <form action="" onsubmit="Form.submit(event)">
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
                          onclick="Modal.close()"
                          href="#" 
                          class="button cancel">Cancelar</a>
                          <button>Salvar</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>


      <Footer>
          Powered by{' '}Dev Orion || juniorteixeira1805@gmail.com
      </Footer>
    </>
  )
}
