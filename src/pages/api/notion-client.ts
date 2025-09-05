import type { NextApiRequest, NextApiResponse } from "next";
import { NotionAPI } from "notion-client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const notion = new NotionAPI();

  await notion.getPage(req.query.pageId as string).then((recordMap) => {
    res.status(200).json(recordMap);
  });
}
