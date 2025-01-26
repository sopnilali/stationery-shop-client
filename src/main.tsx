import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes.tsx'
import { Provider } from 'react-redux'
import { Toaster } from 'sonner'
import { persistor, store } from './Redux/store.ts'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <RouterProvider router={routes} />
      </PersistGate>
    </Provider>
    <Toaster />
  </StrictMode>,
)
