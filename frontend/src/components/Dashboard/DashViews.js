import React from "react";
import CategoriesDashView from "./CategoriesDash/CatsDashView";
import UsersDashView from "./UsersDash/UsersDashView";
import { useLocation, useParams } from "react-router-dom";
import Missing from "../General/Missing";

const DashViews = ({ categories, products, users}) => {
    const { categoryName } = useParams();
    const { pathname } = useLocation()

    return (
        <div className="flex w-full mx-16 my-4 flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-100 dark:border-gray-700 dark:text-gray-400">

            {pathname === `/dash` || pathname===`/dash/${categoryName}` ? (

                <CategoriesDashView categories={categories} products={products} categoryName={categoryName} />

            ) : pathname === '/dash/users' ? (

                <UsersDashView users={users} />

            ) : (
                <Missing className='flex w-full' msg={'404'} msg2={`We can't find that page.`}/>
            )}

        </div>
    )
}

export default DashViews;