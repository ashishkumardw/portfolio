import NotionPage from "@/components/NotionPage";
import { getRecordMapInProps } from "@/utils";
import { NextPageContext } from "next";

export default function Home(props: any) {
  return (
    <NotionPage
      recordMap={props.recordMap}
      pageId="2645e109-f9ca-80e8-85df-cfc11a33466b"
    />
  );
}

export const getServerSideProps = async (ctx: NextPageContext) =>
  await getRecordMapInProps(ctx, "2645e109-f9ca-80e8-85df-cfc11a33466b");
