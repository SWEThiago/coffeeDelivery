import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { CoffeeDelivery } from './pages/coffeeDelivery'
import { Home } from './pages/home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/delivery" element={<CoffeeDelivery />} />
      </Route>
    </Routes>
  )
}
