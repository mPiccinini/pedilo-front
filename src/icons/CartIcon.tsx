import {useState} from "react";

export default function CartIcon({ color = "black" }) {
    const [isClicked, setIsClicked] = useState(false);

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    return (
        <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform transform ${isClicked ? "scale-110" : ""} cursor-pointer`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp} // Reset when mouse leaves
        >
            <path
                d="M1 1H5.36364L8.28727 16.3029C8.38703 16.829 8.66026 17.3017 9.05914 17.6381C9.45802 17.9744 9.95713 18.1531 10.4691 18.1429H21.0727C21.5847 18.1531 22.0838 17.9744 22.4827 17.6381C22.8816 17.3017 23.1548 16.829 23.2545 16.3029L25 6.71429H6.45455M10.8182 23.8571C10.8182 24.4883 10.3298 25 9.72727 25C9.12478 25 8.63636 24.4883 8.63636 23.8571C8.63636 23.226 9.12478 22.7143 9.72727 22.7143C10.3298 22.7143 10.8182 23.226 10.8182 23.8571ZM22.8182 23.8571C22.8182 24.4883 22.3298 25 21.7273 25C21.1248 25 20.6364 24.4883 20.6364 23.8571C20.6364 23.226 21.1248 22.7143 21.7273 22.7143C22.3298 22.7143 22.8182 23.226 22.8182 23.8571Z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

