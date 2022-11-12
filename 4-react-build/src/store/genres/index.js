import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../../statuses";

export const genresSlice = createSlice({
    name: "genres",
    initialState: {
        entities: {},
        ids: [],
        status: STATUSES.idle,
    },
    reducers: {
        startLoading: (state, action) => {
            state.status = STATUSES.inProgress
            state.entities = []
            state.ids = []
        },
        succesLoading: (state, action) => {
            state.status = STATUSES.success
            state.entities = action.payload.entities
            state.ids = action.payload.ids
        },
        failedLoading: (state, action) => {
            state.status = STATUSES.failed
            state.entities = []
            state.ids = []
        }

    }
})

export const genreBooksSlice = createSlice({
    name: "genreBooks",
    initialState: {
        entities: {},
        ids: [],
        status: STATUSES.idle,
    },
    reducers: {
        startLoading: (state, action) => {
            state.status = STATUSES.inProgress
            state.entities = []
            state.ids = []
        },
        succesLoading: (state, action) => {
            state.status = STATUSES.success
            state.entities = action.payload.entities
            state.ids = action.payload.ids
        },
        failedLoading: (state, action) => {
            state.status = STATUSES.failed
            state.entities = []
            state.ids = []
        }

    }
})