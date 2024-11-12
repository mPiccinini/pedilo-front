import React, { useState } from 'react';
import PhoneScreen from '@/components/screens/PhoneScreen';
import ArrowBackIcon from "@/icons/ArrowBackIcon.tsx";
import SearchBar from "@/components/search-&-filter/SearchBar";
import ImageComponent from "@/components/imageComponent/ImageComponent.tsx";
import StarIcon from "@/icons/StarIcon.tsx";
import { ClockIcon } from "@/icons/ClockIcon.tsx";
import Button from "@/components/button/Button";
import Tag from "@/components/search-&-filter/Tag";
import RecipeIngredientsList from "@/components/cart-related/RecipeIngredientsList";
import RecipeInfo from "@/components/recipe-ingredient-cards/RecipeInfo";

const HomePage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <PhoneScreen>
            <div className="relative flex flex-col gap-4">
                {/* Header with Back Icon and Search Bar */}
                <div className="flex flex-row justify-center items-center gap-4 pt-6 px-8">
                    <ArrowBackIcon iconColor="black" size="22px"/>
                    <SearchBar variant="rounded"/>
                </div>

                {/* Image Component */}
                <ImageComponent src="images/noquisromana.png" alt="foto" variant="shadow" size="large"/>

                {/* Recipe Details */}
                <div className="flex flex-col justify-center items-center gap-6">
                    <p className="text-headline3 font-poppins">Ñoquis a la romana</p>
                    <div className="flex flex-row items-center justify-center gap-3">
                        {[...Array(3)].map((_, i) => (
                            <StarIcon key={i} variant="variant1" iconColor="black" size="24"/>
                        ))}
                        {[...Array(2)].map((_, i) => (
                            <StarIcon key={i+3} variant="variant2" iconColor="black" size="24"/>
                        ))}
                    </div>
                    <div className="flex flex-row justify-center items-center gap-3">
                        <ClockIcon iconColor="black" size="32px"/>
                        <p className="font-poppins text-title1">45:00</p>
                    </div>

                    {/* "Ver Receta" Button */}
                    <Button variant="secondary" onClick={openModal}>Ver Receta</Button>

                    {/* Tags */}
                    <div className="flex flex-row justify-center items-center gap-9">
                        <Tag variant="variant2" text="Italiana"/>
                        <Tag variant="variant2" text="Pasta"/>
                        <Tag variant="variant2" text="Facil"/>
                    </div>

                    {/* Ingredients and Add to Cart */}
                    <div className="flex flex-col justify-center items-center gap-10">
                        <RecipeIngredientsList
                            ingredients={['Sémola de trigo', 'leche', 'Huevo', 'Manteca', 'Sal', 'Nuez moscada']}
                            prices={[1000, 200, 2200, 300, 156, 600]}
                        />
                        <Button>Añadir al carrito</Button>
                    </div>
                </div>
            </div>

                {/* Modal Overlay */}
                {isModalOpen && (
                    <div 
                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-hidden"
                        onClick={closeModal}
                    >
                        {/* Modal Content */}
                        <div
                            className="p-6 rounded-lg max-w-md w-full"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                        >
                            <RecipeInfo
                                steps={['Paso 1: Preparar la masa', 'Paso 2: Formar los ñoquis', 'Paso 3: Cocinar']}
                                stepsDescription={[
                                    'Cocina 500 g de papas hasta que estén suaves. Pélalas y hazlas puré. Agrega 1 huevo, sal al gusto, y mezcla bien. Incorpora 150 g de harina poco a poco hasta formar una masa suave (no amases demasiado para evitar que los ñoquis queden duros)',
                                    'Divide la masa en partes, haz rollos de aproximadamente 1 cm de grosor y corta en trozos pequeños (de 2 cm). Opcionalmente, puedes hacerles una marca presionando suavemente con un tenedor para darles la clásica forma de ñoqui.',
                                    'Hierve agua con sal en una olla grande. Agrega los ñoquis en tandas y cocina hasta que floten en la superficie (alrededor de 1-2 minutos). Retíralos con una espumadera y sírvelos con tu salsa favorita. Ahora disfruta que está muy rico!'
                                ]}
                                stepsImages={['images/recetapaso1.png', 'images/recetapaso2.png', 'images/paso3.jpg']}
                            />
                        </div>
                    </div>
                )}
        </PhoneScreen>
    );
};

export default HomePage;
