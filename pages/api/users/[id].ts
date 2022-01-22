import type { NextApiHandler } from "next";

import { sampleUserData } from "../../../utils/sample-data";

const user: NextApiHandler = async (req, res) => {
  const { id } = req.query;

  const user = sampleUserData.find((item) => item.id === Number(id));

  if (user) {
    res.status(200).json({
      user,
    });
  } else {
    res.status(404).json({
      message: `User: ${id} not found.`,
    });
  }
};

export default user;
