import DashSideBar from "./DashSideBar";
import DashView from "./DashViews";

const DashFeed = ({ categories, products, users}) => {

    return (
        <div className="flex w-full h-full">

            <DashSideBar />
                    
            <DashView categories={categories} products={products} users={users} />

        </div>
    );
};
export default DashFeed;
