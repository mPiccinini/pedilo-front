function ScrollDots({
    dotsAmount,
    selectedIndex,
    onDotClick,
}: {
    dotsAmount: number;
    selectedIndex: number;
    onDotClick: (index: number) => void;
}) {
    return (
        <div className="flex gap-2 bg-primary-50 p-2 inline-flex rounded-[16px]">
            {Array(dotsAmount).fill(null).map((_, index) => (
                <div
                    key={index}
                    onClick={() => onDotClick(index)}
                    className={`w-4 h-4 rounded-full cursor-pointer ${
                        index === selectedIndex ? 'bg-primary-950' : 'bg-primary-400'
                    }`}
                ></div>
            ))}
        </div>
    );
}

export default ScrollDots;
