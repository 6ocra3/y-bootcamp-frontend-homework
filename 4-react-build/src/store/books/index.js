import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../../statuses";

export const booksSlice = createSlice({
    name: "books",
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
            state.entities = { ...state.entities, ...action.payload.entities }
            state.ids = Array.from(new Set(...state.ids, action.payload.ids))
        },
        failedLoading: (state, action) => {
            state.status = STATUSES.failed
            state.entities = []
            state.ids = []
        }

    }
})