import React from 'react';
import PhoneScreen from '@/components/screens/PhoneScreen';
import ArrowBackIcon from "@/icons/ArrowBackIcon.tsx";
import SearchBar from "@/components/SearchBar.tsx";
import ImageComponent from "@/components/imageComponent/ImageComponent.tsx";
import StarIcon from "@/icons/StarIcon.tsx";

const HomePage: React.FC = () => {
    return (
        <PhoneScreen>
            <div className={'flex flex-col gap-4'}>
                <div className={'flex flex-row justify-center items-center gap-4 pt-6 px-8 w-'}>
                    <ArrowBackIcon iconColor={'black'} size={'22px'} />
                    <SearchBar variant={'rounded'}></SearchBar>
                </div>
                <ImageComponent src={'images/noquisromana.png'} alt={'foto'} variant={'shadow'} size={'large'}></ImageComponent>
                <div className={'flex justify-center items-center'}>
                    <p className={'text-headline3 font-poppins'}>Ñoquis a la romana</p>
                </div>
                <div className={'flex flex-row items-center justify-center'}>
                    <StarIcon variant={'variant1'} iconColor={'black'} size={'24'}></StarIcon>
                    <StarIcon variant={'variant1'} iconColor={'black'} size={'24'}></StarIcon>
                    <StarIcon variant={'variant1'} iconColor={'black'} size={'24'}></StarIcon>
                    <StarIcon variant={'variant2'} iconColor={'black'} size={'24'}></StarIcon>
                    <StarIcon variant={'variant2'} iconColor={'black'} size={'24'}></StarIcon>
                </div>
            </div>
        </PhoneScreen>
    );
};

export default HomePage;