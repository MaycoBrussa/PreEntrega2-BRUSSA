import { ItemList } from "../../components/item-list/item-list.component";

export const Home = (props) => {
  const { children, greeting } = props;

  return (
    <div className="home">
      <ItemList />
    </div>
  );
};
