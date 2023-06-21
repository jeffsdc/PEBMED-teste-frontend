import React from "react";
import FlagCards from "../components/FlagCards";
import ListOffer from "../components/ListOffer";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="info-card">
          <h4>Estamos quase lá!</h4>
          <p>Insira seus dados de pagamento abaixo:</p>
          <FlagCards />
          <form className="form-card-payment">
            <div className="checkout-information">
              <div className="input-group">
                <label htmlFor="numberCard">Número do cartão</label>
                <input
                  type="text"
                  id="numberCard"
                  placeholder="0000 0000 0000 0000"
                  required
                />
              </div>
              <div className="horizontal-grid">
                <div className="input-group">
                  <label htmlFor="date">Validade</label>
                  <input type="text" id="date" placeholder="MM/AA" required />
                </div>
                <div className="input-group">
                  <label htmlFor="cvv">CVV</label>
                  <input type="number" id="cvv" placeholder="000" required />
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="name">Nome impresso no cartão</label>
                <input type="text" id="name" placeholder="Seu nome" required />
              </div>
              <div className="input-group">
                <label htmlFor="cpf">CPF</label>
                <input
                  type="text"
                  id="cpf"
                  placeholder="000.000.000-00"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="coupon">Cupom</label>
                <input type="text" id="coupon" placeholder="Insira aqui" />
              </div>
              <div className="input-group">
                <label htmlFor="installments">Número de parcelas</label>
                <select name="installments" id="">
                  <option value>Selecionar</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">5</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>
            </div>
            <button className="button button-checkout">
              Finalizar pagamento
            </button>
          </form>
        </div>
        <div className="info-your-plan">
          <h4>Confira o seu plano:</h4>
          <p>fulano@cicrano.com.br</p>
          <ListOffer />
        </div>
      </div>
    </div>
  );
};

export default Home;
