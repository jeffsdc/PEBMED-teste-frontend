import React, { useEffect, useState } from "react";
import FlagCards from "./FlagCards";
import ListOffer from "./ListOffer";
import { fetchOffers } from "../api/Api";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";

const CheckoutForm = () => {
  const [offers, setOffers] = useState([]);
  const [selectedOffer, setSelectedOffer] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchOffers();
      setOffers(data);
    };

    fetchData();
  }, []);

  const handleOfferSelected = (offer) => {
    setSelectedOffer(offer);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const dadosFormulario = Object.fromEntries(formData.entries());
    dadosFormulario.offer = selectedOffer;

    fetch(
      "https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/subscription",
      {
        method: "POST",
        body: JSON.stringify(dadosFormulario),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        navigate("/sucesso", {
          state: dadosFormulario,
        });
        sessionStorage.setItem(
          "email",
          document.getElementById("email_user").textContent
        );
      })
      .catch((error) => console.log(error));
  };

  return (
    <form className="form-card-payment" onSubmit={handleSubmit}>
      <div className="info-card">
        <h4>Estamos quase lá!</h4>
        <p>Insira seus dados de pagamento abaixo:</p>
        <FlagCards />

        <div className="checkout-information">
          <div className="input-group">
            <label htmlFor="numberCard">Número do cartão</label>
            <InputMask
              id="numberCard"
              mask="9999 9999 9999 9999"
              name="creditCardNumber"
              placeholder="0000 0000 0000 0000"
              required
            />
          </div>
          <div className="horizontal-grid">
            <div className="input-group">
              <label htmlFor="date">Validade</label>
              <InputMask
                mask="99/99"
                name="creditCardExpirationDate"
                placeholder="MM/AA"
                required
                id="date"
              />
            </div>
            <div className="input-group">
              <label htmlFor="cvv">CVV</label>
              <InputMask
                mask="999"
                name="creditCardCVV"
                id="cvv"
                placeholder="000"
                required
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="name">Nome impresso no cartão</label>
            <input
              type="text"
              id="name"
              name="creditCardHolder"
              placeholder="Seu nome"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="cpf">CPF</label>
            <InputMask
              mask="999.999.999-99"
              id="cpf"
              name="creditCardCPF"
              placeholder="000.000.000-00"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="coupon">Cupom</label>
            <input
              type="text"
              id="coupon"
              name="couponCode"
              placeholder="Insira aqui"
            />
          </div>
          <div className="input-group">
            <label htmlFor="installments">Número de parcelas</label>
            <select name="installments" id="installmentsPayment">
              <option value>Selecionar</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
        </div>
        <button type="submit" className="button button-checkout">
          Finalizar pagamento
        </button>
      </div>
      <div className="info-your-plan">
        <h4>Confira o seu plano:</h4>
        <p id="email_user">fulano@cicrano.com.br</p>
        {offers.map((offer) => (
          <ListOffer
            key={offer.id}
            offer={offer}
            selectedOffer={handleOfferSelected}
          />
        ))}
      </div>
    </form>
  );
};

export default CheckoutForm;
