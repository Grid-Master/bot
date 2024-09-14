import { EmptyPage } from "../../common/components/emptyPage/emptyPage";

export const History = () => {
const orders = []

  return <>{orders.length ? <></> : <EmptyPage />}</>;
};
