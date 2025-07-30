import { store } from '../../app/store'
import { productsApiSlice } from '../products/productsApiSlice'
import { categoriesApiSlice } from '../categories/categoriesApiSlice'
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Prefetch = () => {

    useEffect(() => {
        store.dispatch(productsApiSlice.util.prefetch('getProducts', 'productsList', { force: true }))
        store.dispatch(categoriesApiSlice.util.prefetch('getCategories', 'categoriesList', { force: true }))
    }, [])

    return <Outlet />
}
export default Prefetch