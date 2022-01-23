import { NextApiRequest, NextApiResponse } from "next";

import dummyData from "@utils/dummy-data.json";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(dummyData.users)) {
      throw new Error("Cannot find user data");
    }

    res.status(200).json(dummyData);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
