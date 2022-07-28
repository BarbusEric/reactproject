import { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import { FavoritesContext } from "../store/Favorites/context";
import NewsCardList from "../components/NewsCardList";
import { useLocalStorage } from "../utils/hooks/useLocalStorage";

function Favorites() {
  const { favoritesState } = useContext(FavoritesContext);
  const { products } = favoritesState;
  //eslint-disable-next-line
  const [_, setLocalStorageState] = useLocalStorage(
    "favorites",
    favoritesState
  );

  useEffect(() => {
    setLocalStorageState(favoritesState);
  }, [favoritesState, setLocalStorageState]);
  return (
    <Layout>
      <Container className="my-5">
        <h1 className="mb-5 pt-3">Știrile tale favorite</h1>
        {products.length === 0 ? (
          <p>Momentan nu ai nicio știre favorită.</p>
        ) : (
          <NewsCardList newsList={products} />
        )}
      </Container>
    </Layout>
  );
}

export default Favorites;
