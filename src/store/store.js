import { configureStore } from '@reduxjs/toolkit'

import CartSlice from '../redux/slices/CartSlice'

export default configureStore({
  reducer: {
    cart : CartSlice
  },
})