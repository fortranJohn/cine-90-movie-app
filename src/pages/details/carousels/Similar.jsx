import React from 'react'
import useFetch from '../../../hooks/useFetch'
import Carousel from "../../../components/carousel/Carousel"

const Similar = ({mediaType, id}) => {
    const {loading, data, error} = useFetch(`/${mediaType}/${id}/similar`)
    const title = mediaType === "movie"? "Similar Movies":"Similar TV Shows"
  
    return (
    <Carousel
        loading={loading}
        data={data?.results}
        title={title}
        endpoint={mediaType}
    />
  )
}

export default Similar