const Moralis = require("moralis").default;

const express = require("express");
const cors = require("cors");

const { EvmChain } = require("@moralisweb3/common-evm-utils");

const app = express();
const port = 3000;

// allow access to Angular app domain
app.use(
  cors({
    origin: "http://localhost:4200",
    credentials: true,
  })
);

const MORALIS_API_KEY = "vyNW6I8EuUwGwOIwbPjkOF2w3JOPtq70fuXEV0NHkhHhgK8VXR8AJt1UUZ1sEgD7";
const address = "0x1d870f1210e66cba98093682b84d4491Ec04141b";

app.get("/balances", async (req, res) => {
  try {
    // Promise.all() for receiving data async from two endpoints
    const [nativeBalance, tokenBalances] = await Promise.all([
      Moralis.EvmApi.balance.getNativeBalance({
        chain: EvmChain.ETHEREUM,
        address,
      }),
      Moralis.EvmApi.token.getWalletTokenBalances({
        chain: EvmChain.ETHEREUM,
        address,
      }),
    ]);
    res.status(200).json({
      // formatting the output
      address,
      nativeBalance: nativeBalance.result.balance.ether,
      tokenBalances: tokenBalances.result.map((token) => token.display()),
    });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500);
    res.json({ error: error.message });
  }
});

const startServer = async () => {
  await Moralis.start({
    apiKey: MORALIS_API_KEY,
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

startServer();