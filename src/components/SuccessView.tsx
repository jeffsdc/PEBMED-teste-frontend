import React from "react";
import { useLocation, Link } from "react-router-dom";
import starIcon from "../assets/starIcon.svg";
import "./SuccessView.css";
import { CheckCircle } from "@phosphor-icons/react";

const SuccessView = () => {
  const location = useLocation();
  const dadosFormulario = location.state;
  const email = sessionStorage.getItem("email");

  console.log(dadosFormulario);

  function CurrencyConverter({ value }) {
    const formattedValue = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return <span>{formattedValue}</span>;
  }

  return (
    <div className="container">
      <div className="content-sucess">
        <CheckCircle weight="thin" />
        <h4>Parabéns</h4>
        <p>
          Sua assinatura foi realizada <br />
          com sucesso.
        </p>
        <div className="content-info-offer">
          <div className="offer-contracted">
            <img src={starIcon} alt="" />
            <div className="offerInfo">
              <p>Anual | {dadosFormulario.offer.description}</p>
              <p className="installment-price">
                <CurrencyConverter
                  value={
                    dadosFormulario.offer.fullPrice -
                    dadosFormulario.offer.discountAmmount
                  }
                />{" "}
                | {dadosFormulario.installments}x{" "}
                <CurrencyConverter
                  value={
                    (dadosFormulario.offer.fullPrice -
                      dadosFormulario.offer.discountAmmount) /
                    dadosFormulario.installments
                  }
                />
                /mês
              </p>
            </div>
          </div>
          <p>
            <span>Email:</span> {email}
          </p>
          <p>
            <span>CPF:</span> {dadosFormulario.creditCardCPF}
          </p>
        </div>

        <div className="content-buttons">
          <Link to="/" className="manage-subscription">
            Gerenciar assinatura
          </Link>
          <Link to="/" className="back-home">
            IR PARA A HOME
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessView;
