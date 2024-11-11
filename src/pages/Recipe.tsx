import React from 'react';
import PhoneScreen from '@/components/screens/PhoneScreen';
import ArrowBackIcon from "@/icons/ArrowBackIcon.tsx";
import SearchBar from "@/components/SearchBar.tsx";
import ImageComponent from "@/components/imageComponent/ImageComponent.tsx";
import StarIcon from "@/icons/StarIcon.tsx";
import { ClockIcon } from "@/icons/ClockIcon.tsx";
import Button from "@/components/Button.tsx";
import Tag from "@/components/Tag.tsx";
import RecipeIngredientsList from "@/components/RecipeIngredientsList.tsx";
import RecipeInfo from "@/components/RecipeInfo.tsx";

const HomePage: React.FC = () => {
    return (
        <PhoneScreen>
            <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-center items-center gap-4 pt-6 px-8">
                    <ArrowBackIcon iconColor="black" size="22px"/>
                    <SearchBar variant="rounded"/>
                </div>
                <ImageComponent src="images/noquisromana.png" alt="foto" variant="shadow" size="large"/>
                <div className="flex flex-col justify-center items-center gap-6">
                    <div className="flex justify-center items-center">
                        <p className="text-headline3 font-poppins">Ñoquis a la romana</p>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-3">
                        <StarIcon variant="variant1" iconColor="black" size="24"/>
                        <StarIcon variant="variant1" iconColor="black" size="24"/>
                        <StarIcon variant="variant1" iconColor="black" size="24"/>
                        <StarIcon variant="variant2" iconColor="black" size="24"/>
                        <StarIcon variant="variant2" iconColor="black" size="24"/>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-3">
                        <ClockIcon iconColor="black" size="32px"/>
                        <p className="font-poppins text-title1">45:00</p>
                    </div>
                    <Button variant="secondary">Ver Receta</Button>
                    <div className="flex flex-row justify-center items-center gap-9">
                        <Tag variant="variant2" text="Italiana"/>
                        <Tag variant="variant2" text="Pasta"/>
                        <Tag variant="variant2" text="Facil"/>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-10">
                        <RecipeIngredientsList
                            ingredients={['Sémola de trigo', 'leche', 'Huevo', 'Manteca', 'Sal', 'Nuez moscada']}
                            prices={[1000, 200, 2200, 300, 156, 600]}/>
                        <Button>Añadir al carrito</Button>
                    </div>
                </div>
            </div>
            <RecipeInfo
                steps={['Paso 1: Preparar la masa', 'Paso 2: Formar los ñoquis', 'Paso 3: Cocinar']}
                stepsDescription={[
                    'Cocina 500 g de papas hasta que estén suaves. Pélalas y hazlas puré. Agrega 1 huevo, sal al gusto, y mezcla bien. Incorpora 150 g de harina poco a poco hasta formar una masa suave (no amases demasiado para evitar que los ñoquis queden duros)',
                    'Divide la masa en partes, haz rollos de aproximadamente 1 cm de grosor y corta en trozos pequeños (de 2 cm). Opcionalmente, puedes hacerles una marca presionando suavemente con un tenedor para darles la clásica forma de ñoqui.',
                    'Hierve agua con sal en una olla grande. Agrega los ñoquis en tandas y cocina hasta que floten en la superficie (alrededor de 1-2 minutos). Retíralos con una espumadera y sírvelos con tu salsa favorita. Ahora disfruta que está muy rico!'
                ]}
                stepsImages={['images/recetapaso1.png', 'images/recetapaso2.png', 'images/paso3.jpg']}
            />
        </PhoneScreen>
    );
};

export default HomePage;