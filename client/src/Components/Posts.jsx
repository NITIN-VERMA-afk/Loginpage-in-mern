import React, { useState, useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import httpCommon from "../Api/http-common";

const Posts = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await httpCommon.get(Posts/userData);

      const data = await response.json();

      setItems((prevItems) => [...prevItems, ...data]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchData}
        hasMore={true}
        loader={<p>Loading...</p>}
        endMessage={<p>No more data to load.</p>}
      >
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </InfiniteScroll>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default Posts;
