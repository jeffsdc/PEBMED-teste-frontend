import React from "react";
import americanExpress from "../assets/americanExpress-card-flag.svg";
import dinersClub from "../assets/dinersClub-card-flag.svg";
import eloCard from "../assets/elo-card-flag.svg";
import masterCard from "../assets/master-card-flag.svg";
import visaCard from "../assets/visa-card-flag.svg";
import logoIugu from "../assets/logoIugu.svg";

const FlagCards = () => {
  return (
    <div className="card-flags-content">
      <img className="card-flag" src={masterCard} alt="Master Card logo" />
      <img className="card-flag" src={dinersClub} alt="Dinners Club logo" />
      <img
        className="card-flag"
        src={americanExpress}
        alt="American Express logo"
      />
      <img className="card-flag" src={visaCard} alt="Visa logo" />
      <img className="card-flag" src={eloCard} alt="Elo logo" />
      <p>
        Pagamentos por
        <img src={logoIugu} alt="Iugu logo" />
      </p>
    </div>
  );
};

export default FlagCards;
