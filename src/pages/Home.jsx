import React from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import NewsCardList from "../components/NewsCardList";
import { getNewsList } from "../api/adaptors";
import { Link } from "react-router-dom";

function Home() {
  const sportNewsEndpoint = getNewsCategoriesEndpoint("sport", 1, 6);
  const worldNewsEndpoint = getNewsCategoriesEndpoint("world", 1, 6);
  const booksNewsEndPoint = getNewsCategoriesEndpoint("books", 1, 6);
  const businessNewsEndPoint = getNewsCategoriesEndpoint("business", 1, 6);
  let sportData = useFetch(sportNewsEndpoint);
  let worldData = useFetch(worldNewsEndpoint);
  let booksData = useFetch(booksNewsEndPoint);
  let businessData = useFetch(businessNewsEndPoint);
  const adaptedSportData = getNewsList(sportData);
  const adaptedWorldData = getNewsList(worldData);
  const adaptedBooksData = getNewsList(booksData);
  const adaptedBusinessData = getNewsList(businessData);
  return (
    <Layout>
      <section className="sport my-5">
        <Container>
          <h1 className="mb-5 pt-3">Sport</h1>
          <NewsCardList newsList={adaptedSportData} />
          <p>
            Vezi toate știrile legate de sport în secțiunea{" "}
            <Link to="/category/sport" className="text-secondary">
              Sport
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="world my-5">
        <Container>
          <h1 className="mb-5 pt-3">World</h1>
          <NewsCardList newsList={adaptedWorldData} />
          <p>
            Vezi toate știrile legate despre lume în secțiunea{" "}
            <Link to="/category/world" className="text-secondary">
              World
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="books my-5">
        <Container>
          <h1 className="mb-5 pt-3">Books</h1>
          <NewsCardList newsList={adaptedBooksData} />
          <p>
            Vezi toate știrile legate de tehnologie în secțiunea{" "}
            <Link to="/category/books" className="text-secondary">
              Books
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="business my-5">
        <Container>
          <h1 className="mb-5 pt-3">Business</h1>
          <NewsCardList newsList={adaptedBusinessData} />
          <p>
            Vezi toate știrile legate de afaceri în secțiunea{" "}
            <Link to="/category/business" className="text-secondary">
              Business
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="favorites my-5">
        <Container>
          <h1 className="mb-5 pt-3">Favorite</h1>
          <p>
            Vrei să îți salvezi știrile favorite pentru a le reciti mai încolo?
          </p>
          <p>
            În cadrul fiecărei știri găsești un buton prin care poți adăuga
            știrea la favorite.
          </p>
          <p className="pb-3">
            Vizitează secțiunea{" "}
            <Link to="/favorites" className="text-secondary">
              Favorite
            </Link>{" "}
            pentru a vedea știrile adăugate.
          </p>
        </Container>
      </section>
    </Layout>
  );
}

export default Home;
