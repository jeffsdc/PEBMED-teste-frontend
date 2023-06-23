import React from "react";

const ListOffer = ({ offer, selectedOffer }) => {
  function CurrencyConverter({ value }) {
    const formattedValue = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return <span>{formattedValue}</span>;
  }

  return (
    <div className="content-plan">
      <div className="plan-offer">
        <label htmlFor="inCashPlan" className="box-option-plan">
          <div className="info-plan">
            <strong>Anual | {offer.description}</strong>
            <p>
              De <CurrencyConverter value={offer.fullPrice} /> | Por{" "}
              <CurrencyConverter
                value={offer.fullPrice - offer.discountAmmount}
              />
              <span className="discount-percentage">
                -{offer.discountPercentage * 100}%
              </span>
            </p>
            {offer.installments > 1 ? (
              <p className="installment-price">
                {offer.installments}x de{" "}
                <CurrencyConverter
                  value={
                    (offer.fullPrice - offer.discountAmmount) /
                    offer.installments
                  }
                />
                /mês
              </p>
            ) : null}
          </div>
          <input
            type="radio"
            name="selectPlan"
            id="inCashPlan"
            value={offer.id}
            className="fakeInput"
            onChange={() => selectedOffer(offer)}
            required
          />
        </label>
      </div>
    </div>
  );
};

export default ListOffer;
