import { csv } from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/mbdev3/6d961a5294622504ce5d2ffb9328e489/raw/4f99f974418ecb5bbf060ace733488be100ab97a/popular%2520programming%2520languages%25202022.csv";

export const getData = async () => {
  const data = await csv(csvUrl);

  // Have a look at the attributes available in the console!
  console.log(data[0]);

  return data;
};
