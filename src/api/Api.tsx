async function fetchOffers() {
  const response = await fetch(
    "https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/offer"
  );
  const data = await response.json();
  return data;
}

export { fetchOffers };
