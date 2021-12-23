const axios = require("axios").default;

async function main() {
  const res = await axios.get(
    "https://reader3.isu.pub/echowochenzeitung/sammelmappe1_kw51/reader3_4.json"
  );

  console.log(res.data.document.publicationId)
}

main();
