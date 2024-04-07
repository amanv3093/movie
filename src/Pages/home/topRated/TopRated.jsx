import React, { useState } from "react";
import ContentWrapper from "../../../Components/contentWrapper/ContentWrapper";
import SwitchTab from "../../../Components/switchTab/SwitchTab";
import useFetch from "../../../hooks/useFetch";
import Carsoul from "../../../Components/carsoul/Carsoul";

const TopRated = () => {
  const [endpoint, setEndPoint] = useState("movie");
  const { data, loading } = useFetch(`/${endpoint}/top_rated`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="carsoulSection">
      <ContentWrapper>
        <div className="val">
          <span className="carouselTitle">Top Rated</span>
          <SwitchTab
            data={["Movies", "TV Shows"]}
            onTabChange={onTabChange}
          />
        </div>
      </ContentWrapper>
      <Carsoul data = {data?.results} loading = {loading}
      endpoint={endpoint} />
    </div>
  );
};

export default TopRated;
