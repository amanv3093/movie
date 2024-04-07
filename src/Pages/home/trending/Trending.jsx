import React, { useState } from "react";
import ContentWrapper from "../../../Components/contentWrapper/ContentWrapper";
import SwitchTab from "../../../Components/switchTab/SwitchTab";
import useFetch from "../../../hooks/useFetch";
import Carsoul from "../../../Components/carsoul/Carsoul";

const Trending = () => {
  const [endpoint, setEndPoint] = useState("day");
  const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Day" ? "day" : "week");
  };

  return (
    <div className="carsoulSection">
      <ContentWrapper>
        <div className="val">
          <span className="carouselTitle">Trending</span>
          <SwitchTab
            data={["Day", "Week", "month"]}
            onTabChange={onTabChange}
          />
        </div>
      </ContentWrapper>
      <Carsoul data = {data?.results} loading = {loading} />
    </div>
  );
};

export default Trending;
