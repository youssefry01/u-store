import Loading from '../components/General/Loading.js'
import Missing from '../components/General/Missing.js';
import DashFeed from '../components/Dashboard/DashFeed.js';
import useAuth from '../hooks/useAuth'
import { useGetCategoriesQuery } from '../features/categories/categoriesApiSlice.js';
import { useGetProductsQuery } from '../features/products/productsApiSlice.js';
import { useGetUsersQuery } from '../features/users/usersApiSlice.js';

const Dashboard = () => {
    const { isAdmin } = useAuth()

    // const onNewCategoryClicked = () => navigate('/dash/categories/new')
    // const onNewProductClicked = () => navigate('/dash/products/new')
    // const onNewUserClicked = () => navigate('/dash/users/new')
    // const onCategoriesClicked = () => navigate('/dash/categories')
    // const onProductsClicked = () => navigate('/dash/products')
    // const onUsersClicked = () => navigate('/dash/users')

    const { data: categories, isLoading: isCategoriesLoading, isSuccess: isCategoriesSuccess, isError: isCategoriesError, error: categoriesError } = useGetCategoriesQuery('categoriesList', { pollingInterval: 15000, refetchOnFocus: true, refetchOnMountOrArgChange: true });
    const { data: products, isLoading: isProductsLoading, isSuccess: isProductsSuccess, isError: isProductsError, error: productsError } = useGetProductsQuery('productsList', { pollingInterval: 15000, refetchOnFocus: true, refetchOnMountOrArgChange: true });
    const { data: users, isLoading: isUsersLoading, isSuccess: isUsersSuccess, isError: isUsersError, error: usersError } = useGetUsersQuery('usersList', { pollingInterval: 15000, refetchOnFocus: true, refetchOnMountOrArgChange: true });

    if (!isAdmin) return <Missing msg={'NO ACCESS'} msg2={'YOU DO NOT HAVE ACCESS TO THIS PAGE!'} />;

    if (isCategoriesLoading || isProductsLoading || isUsersLoading) return <Loading />;

    if (isCategoriesError || isProductsError || isUsersError) {
      const errorMessage = categoriesError?.data?.message || productsError?.data?.message || usersError?.data?.message;
      return <Missing msg={'Error'} msg2={errorMessage}/>
    }

    const categoriesArray = Object.values(categories.entities);
    const productsArray = Object.values(products.entities);
    const usersArray = Object.values(users.entities);

  return (
    <main className='flex bg-[#f7f7f8] grow dark:bg-[#0e0e10]'>
      
      {isCategoriesSuccess && isProductsSuccess && isUsersSuccess &&
        <DashFeed categories={categoriesArray} products={productsArray} users={usersArray}/>
      }

    </main>
  )
}

export default Dashboard;