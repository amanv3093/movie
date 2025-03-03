import React from 'react'
import useFetch from "../../hooks/useFetch"
import { useParams } from "react-router-dom";
import Cast from './cast/Cast';
import DetailsBanner from './detailsBanner/DetailsBanner';
import VideoSection from './videoSection/VideoSection';
import Similar from './carsouls/Similar';
import Recommdation from './carsouls/Recommdation';
function Details() {
  const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
    const { data: credits, loading: creditsLoading } = useFetch(
        `/${mediaType}/${id}/credits`
    );
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew}/>
      <Cast data={credits?.cast} loading={creditsLoading}/>
      <VideoSection data={data} loading={loading}/>
      <Similar mediaType={mediaType} id={id}/>
      <Recommdation mediaType={mediaType} id={id}/>
    </div>
  )
}

export default Details
