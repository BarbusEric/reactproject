import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import { getNewsList } from "../api/adaptors";
import NewsCardList from "../components/NewsCardList";
import Pagination from "../components/Pagination";

function NewsCategory() {
  const { categoryId } = useParams();
  let [queryParams] = useSearchParams();
  let currentPage = queryParams.get("page");
  if (!currentPage) {
    currentPage = 1;
  }
  const newsCategoryEndpoint = getNewsCategoriesEndpoint(
    categoryId,
    currentPage
  );
  const news = useFetch(newsCategoryEndpoint);
  const adaptedNewsList = getNewsList(news);

  let title = "";
  switch (categoryId) {
    case "sport":
      title = "Sport";
      break;
    case "world":
      title = "World";
      break;
    case "books":
      title = "Books";
      break;
    case "business":
      title = "Business";
      break;
    default:
      break;
  }

  return (
    <Layout>
      <Container className="my-5">
        <h1 className="mb-5 pt-3">{title}</h1>
        <NewsCardList newsList={adaptedNewsList} />
        <Pagination active={currentPage} baseUrl={`/category/${categoryId}`} />
      </Container>
    </Layout>
  );
}

export default NewsCategory;
