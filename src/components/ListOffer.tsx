import React, { useEffect, useState } from "react";
import { fetchOffers } from "../api/Api";

const ListOffer = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchOffers();
      setOffers(data);
    };

    fetchData();
  }, []);

  function CurrencyConverter({ value }) {
    const formattedValue = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return <span>{formattedValue}</span>;
  }

  return (
    <div className="content-plan">
      {offers.map((offer) => (
        <div className="plan-offer" key={offer.id}>
          <label htmlFor="inCashPlan" className="box-option-plan">
            <div className="info-plan">
              <strong>Anual | {offer.description}</strong>
              <p>
                De <CurrencyConverter value={offer.fullPrice} /> | Por{" "}
                <CurrencyConverter
                  value={offer.fullPrice - offer.discountAmmount}
                />
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
              value="43690"
              className="fakeInput"
            />
          </label>
        </div>
      ))}
    </div>
  );
};

export default ListOffer;
