import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts'
import OrderList from './orders/pages/OrderList'
import ProductList from './products/pages/ProductList'
import ShoppingCart from './shoppingCart/pages/ShoppingCart'

interface RouterBase {
  path: string
  element: React.ReactNode
}

const routerData: RouterBase[] = [
  {
    path: '/',
    element: <ProductList />,
  },
  {
    path: '/shopping-cart',
    element: <ShoppingCart />,
  },
  {
    path: '/order-list',
    element: <OrderList />,
  },
]

export const routers = createBrowserRouter(
  routerData.map((router) => {
    const route = {
      path: router.path,
      element: <Layout>{router.element}</Layout>,
    }
    return route
  })
)
