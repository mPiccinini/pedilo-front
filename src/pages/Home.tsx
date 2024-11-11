import React from 'react';
import PhoneScreen from '@/components/screens/PhoneScreen';
import TopBarComponent from "@/components/topBars/TopBarComponent";
import SearchBar from "@/components/SearchBar";
import BranchButton from "@/components/BranchButton";
import BasketIcon from "@/icons/BasketIcon";
import RecipeIcon from "@/icons/RecipeIcon";
import NavBar from "@/components/navBar/NavBarComponent";
import CardRecipeCarrousel from "@/components/CardRecipeCarrousel.tsx";
import CardIngCarrousel from "@/components/CardIngCarrousel.tsx";

const HomePage: React.FC = () => {
    return (
        <PhoneScreen>
            <div className="flex flex-col h-full justify-between">
                <div className="flex flex-col gap-6 flex-grow">
                    <TopBarComponent title="Home" variant="variant1" />
                    <div className="flex flex-col justify-center items-center w-full gap-4">
                        <SearchBar />
                        <div className="flex flex-row justify-center items-center w-full gap-4">
                            <BranchButton>
                                <RecipeIcon iconColor="black" size="24px" />
                                Recetas
                            </BranchButton>
                            <BranchButton>
                                <BasketIcon iconColor="black" size="24px" />
                                Ingredientes
                            </BranchButton>
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-4 mx-5">
                        <p className="font-roboto text-title1">Descubri estas opciones</p>
                        <CardRecipeCarrousel></CardRecipeCarrousel>
                        <p className="font-roboto text-title1">Ingredientes especiales</p>
                        <CardIngCarrousel imageSrcs={['','','']} variants={['variant1','variant1']} titles={['']} descriptions={['']}></CardIngCarrousel>
                    </div>
                </div>
                <NavBar variant="variant1" />
            </div>
        </PhoneScreen>
    );
};

export default HomePage;