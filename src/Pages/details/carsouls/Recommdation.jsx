import React from 'react'
import Carsoul from "../../../Components/carsoul/Carsoul"
import useFetch from "../../../hooks/useFetch"
const Recommdation = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(
    `/${mediaType}/${id}/recommendations`
);
  return (
    <Carsoul
    title="Recommendations"
    data={data?.results}
    loading={loading}
    endpoint={mediaType}
/>
  )
}

export default Recommdation