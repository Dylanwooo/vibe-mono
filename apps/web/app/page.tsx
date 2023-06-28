import PageDetail from "./PageDetail";
import axios from "axios";
import { TOKEN_LIST } from "../libs/helpers";

async function Page() {
  const { data } = await axios.get(TOKEN_LIST);

  return <PageDetail dataList={data} />;
}

export default Page;
