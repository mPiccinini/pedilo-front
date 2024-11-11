import React from 'react';
import PhoneScreen from '@/components/screens/PhoneScreen';
import TopBarComponent from "@/components/topBars/TopBarComponent";
import SearchBar from "@/components/SearchBar";
import BranchButton from "@/components/BranchButton";
import BasketIcon from "@/icons/BasketIcon";
import RecipeIcon from "@/icons/RecipeIcon";
import NavBar from "@/components/navBar/NavBarComponent";
import ImageComponent from "@/components/imageComponent/ImageComponent.tsx";
import Carousel from "@/components/carousel/Carousel.tsx";
import GenericRecipeCard from "@/components/GenericRecipeCard.tsx";
import CardIngredients from "@/components/CardIngredients.tsx";

const HomePage: React.FC = () => {
    return (
        <PhoneScreen>
            <div className="flex flex-col h-full justify-between w-full">
                <TopBarComponent title="Home" variant="variant1" />
                <div className="flex flex-col gap-10 flex-grow w-full">
                    <div className="relative flex flex-col items-center justify-center w-full">
                        <ImageComponent
                            src={'./public/images/sushi.png'}
                            alt={'image'}
                            variant={'default'}
                            size={'large'}
                        />
                        <div className="absolute top-4">
                            <SearchBar variant={'rounded'}/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center w-full gap-4">
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
                    <div className="flex flex-col w-full gap-8 pr-2 pl-2">
                        <div className={'flex flex-col gap-4'}>
                            <p className="font-roboto w-full text-title1">Descubri estas opciones</p>
                            <Carousel>
                                <GenericRecipeCard imageSrc={'public/images/escalopedepescado.png'} heartVariant={'variant2'} starVariants={['variant1', 'variant1', 'variant1']} title={'Escalopes de pescado'} prepTime={'30m'} difficultyLevel={'Nivel de dificultad'} actionTexts={['De mar', 'Light']}></GenericRecipeCard>
                                <GenericRecipeCard imageSrc={'public/images/pejerreyalaplancha.png'} heartVariant={'variant1'} starVariants={['variant1', 'variant1', 'variant2', 'variant2', 'variant2']} title={'Pejerrey a la plancha'} prepTime={'30m'} difficultyLevel={'Nivel de dificultad'} actionTexts={['De mar', 'Pescado']}></GenericRecipeCard>
                                <GenericRecipeCard imageSrc={'public/images/ensaladadesalmon.png'} heartVariant={'variant1'} starVariants={['variant1', 'variant1', 'variant2', 'variant2', 'variant2']} title={'Pejerrey a la plancha'} prepTime={'30m'} difficultyLevel={'Nivel de dificultad'} actionTexts={['Saludable', 'Pescado']}></GenericRecipeCard>
                            </Carousel>
                        </div>
                        <div className={'flex flex-col gap-4'}>
                            <p className="font-roboto text-title1">Ingredientes especiales</p>
                            <Carousel>
                                <CardIngredients imageSrc={'public/images/hongoshiitake.png'} variant={'variant2'} title={"Hongo Shitake"} description={'Hongo'}></CardIngredients>
                                <CardIngredients imageSrc={'public/images/curcuma.png'} variant={'variant1'} title={"Cúrcuma"} description={'Especia'}></CardIngredients>
                                <CardIngredients imageSrc={'public/images/achiote.png'} variant={'variant1'} title={"Achiote"} description={'Especia'}></CardIngredients>
                                <CardIngredients imageSrc={'public/images/sesamonegro.png'} variant={'variant1'} title={"Sésamo negro"} description={'Semilla'}></CardIngredients>
                                <CardIngredients imageSrc={'public/images/miso.png'} variant={'variant2'} title={"Miso"} description={'Fermento'}></CardIngredients>
                            </Carousel>
                        </div>
                    </div>
                </div>
                <NavBar variant="variant1"/>
            </div>
        </PhoneScreen>
    );
};

export default HomePage;