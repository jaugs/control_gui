import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
//import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const controlApi = createApi({
  reducerPath: 'controlApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  endpoints: (builder) => ({

    getAnimalBySpecies: builder.query({
      query: (id) => `animals/${id}`,
    }),
    getSpeciesList: builder.query({
        query: () => `animals`,
    }),
    getAnimalInstance: builder.query({
        query: (id) => `animalinstances/species/${id}`,
    }),
    getAnimalInstanceList: builder.query({
      query: () => `animalinstances/`,
  }),
    addAnimal: builder.mutation({
      query: (body) => ({
        url: `animals`,
        method: 'POST',
        body,
      }),
    }),
    updateAnimal: builder.mutation({
      query: ({id, ...patch}) => ({
        url: `animalinstance/${id}/update`,
        method: 'POST',
        body: patch,
      })
    }),
    getVehicleList: builder.query<any,void>({
      query: () => `garage`,
    }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetAnimalBySpeciesQuery, useGetAnimalInstanceQuery, useGetAnimalInstanceListQuery, useGetSpeciesListQuery, useAddAnimalMutation, useUpdateAnimalMutation, useGetVehicleListQuery } = controlApi