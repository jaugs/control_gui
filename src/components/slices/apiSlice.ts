import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
//import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const controlApi = createApi({
  reducerPath: 'controlApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  tagTypes: ['Garage', 'Rides', 'Inventory', 'Equipment', 'Lab', 'Feed', 'Resort'],
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
      providesTags: ['Garage'],
    }),
    updateVehicle: builder.mutation({
      query: ({id, ...patch}) => ({
        url: `garage/${id}/update`,
        method: 'POST',
        body: patch,
      })
    }),
    addVehicle: builder.mutation({
      query: ({...data}) => ({
        url: `garage/addVehicle`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Garage']
    }),
    getRideList: builder.query<any,void>({
      query: () => 'rides',
      providesTags: ['Rides'],
    }),
    updateRides: builder.mutation({
      query: ({id, ...patch}) => ({
        url: `rides/${id}/update`,
        method: 'POST',
        body: patch,
      }),
    }),
    addRides: builder.mutation({
      query: ({...data}) => ({
        url: `rides/addRide`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Rides']
    }),
    getResortData: builder.query<any,void>({
      query: () => 'resort'
    }),
    getInventoryList: builder.query({
      query: (category) => `inventory/category/${category}`,
      providesTags: ['Inventory'],
    }),
    findItem: builder.query({
      query: (search) => `inventory/find/${search}`,
    }),
    updateInventory: builder.mutation({
      query: ({id, ...patch}) => ({
        url: `inventory/${id}/update`,
        method: 'POST',
        body: patch,
      }),
      invalidatesTags: ['Inventory']
    }),
    addInventoryItem: builder.mutation({
      query: ({id, ...patch}) => ({
        url: `inventory/addItem`,
        method: 'POST',
        body: patch,
      }),
      invalidatesTags: ['Inventory']
    }),
    addInventoryOrder: builder.mutation({
      query: ({...patch}) => ({
        url: `inventory/orderItem`,
        method: 'POST',
        body: patch,
      }),
      
    }),
    getEquipmentList: builder.query<any,void>({
      query: () => 'inventory/equipment',
      providesTags: ['Equipment'],
    }),
    getFeedList: builder.query<any,void>({
      query: () => 'inventory/feed',
      providesTags: ['Feed'],
    }),
    getLabList: builder.query<any,void>({
      query: () => 'inventory/lab',
      providesTags: ['Lab'],
    }),
    getResortList: builder.query<any,void>({
      query: () => 'inventory/resort',
      providesTags: ['Resort'],
    }),
    getResortCleaningList: builder.query<any,void>({
      query: () => 'resort/rooms',
      providesTags: ['Resort'],
    }),
    addResortCleaning: builder.mutation({
      query: ({...patch}) => ({
        url: `resort/cleaning/update`,
        method: 'POST',
        body: patch,
      }),
      invalidatesTags: ['Resort']
    }),
    addResortBooking: builder.mutation({
      query: ({...patch}) => ({
        url: `resort/booking/update`,
        method: 'POST',
        body: patch,
      }),
      invalidatesTags: ['Resort']
    }),
    addResortCheckIn: builder.mutation({
      query: ({...patch}) => ({
        url: `resort/checkin/update`,
        method: 'POST',
        body: patch,
      }),
      invalidatesTags: ['Resort']
    }),
    addResortCheckOut: builder.mutation({
      query: ({...patch}) => ({
        url: `resort/checkout/update`,
        method: 'POST',
        body: patch,
      }),
      invalidatesTags: ['Resort']
    }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetAnimalBySpeciesQuery, useGetAnimalInstanceQuery, useGetAnimalInstanceListQuery, useGetSpeciesListQuery, 
              useAddAnimalMutation, useUpdateAnimalMutation, useUpdateVehicleMutation, useAddVehicleMutation, 
              useGetVehicleListQuery, useGetRideListQuery, useUpdateRidesMutation, useAddRidesMutation, useGetInventoryListQuery, 
              useUpdateInventoryMutation, useGetEquipmentListQuery, useAddInventoryItemMutation, useGetFeedListQuery, useGetLabListQuery, 
              useAddInventoryOrderMutation, useGetResortListQuery, useLazyFindItemQuery, useGetResortCleaningListQuery, 
              useGetResortDataQuery, useAddResortCleaningMutation, useAddResortBookingMutation, useAddResortCheckInMutation, useAddResortCheckOutMutation } = controlApi