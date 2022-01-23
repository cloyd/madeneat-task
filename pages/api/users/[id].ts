import type { NextApiHandler } from "next";

import dummyData from "@utils/dummy-data.json";

const user: NextApiHandler = async (req, res) => {
  const { id } = req.query;

  const user = dummyData.users.find((item) => item.id === Number(id));

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
