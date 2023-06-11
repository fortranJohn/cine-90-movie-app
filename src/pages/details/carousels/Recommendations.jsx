import React from 'react'
import useFetch from '../../../hooks/useFetch'
import Carousel from "../../../components/carousel/Carousel"

const Recommedations = ({mediaType, id}) => {
    const {loading, data, error} = useFetch(`/${mediaType}/${id}/recommendations`)
    // const title = mediaType === "movie"? "Similar Movies":"Similar TV Shows"
  
    return (
    <Carousel
        loading={loading}
        data={data?.results}
        title="Recommendations"
        endpoint={mediaType}
    />
  )
}

export default Recommedations