import React from 'react'

export default function MovieIdPage({
    params,
}: {
    params: { movieId: string } // El nombre de la ruta es movieId y el parametro tiene que ser igual
}) {
    console.log(params)
    return (
        <div>
            MovieIdPage
            <p className="text-white text-4xl"></p>
            {params.movieId}
        </div>
    )
}
