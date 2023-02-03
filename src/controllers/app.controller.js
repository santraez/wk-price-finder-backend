import searchAmazon from "../helper/searchAmazon";

export const searchCodes = async (req, res) => {
  const { codes } = req.body;
  try {
    const listPrices = await searchAmazon(codes);
    res.status(200).json({ listPrices });
  } catch (err) {
    console.log(err);
  };
};
