import React from 'react'
import Carsoul from "../../../Components/carsoul/Carsoul"
import useFetch from "../../../hooks/useFetch"
const Similar = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);

  const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";
  return (
    <Carsoul
    title={title}
    data={data?.results}
    loading={loading}
    endpoint={mediaType}
/>
  )
}

export default Similar
