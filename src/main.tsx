import { createRoot } from 'react-dom/client'
// 导入 provider
import {RouterProvider} from 'react-router-dom'
import { router } from './router/index.tsx'

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
