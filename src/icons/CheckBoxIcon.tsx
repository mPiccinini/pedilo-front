function CheckBoxIcon({ checked, onChange }: { checked: boolean; onChange: () => void }) {
    return (
      <div
        onClick={onChange}
        className={`w-6 h-6 flex items-center justify-center cursor-pointer ${
          checked ? 'bg-[#5F5F5F]' : ''
        }`}
        style={{
          border: checked ? 'none' : '3.2px solid #5F5F5F',
          borderRadius: '2px',
        }}
      >
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth="4" 
            className="w-4 h-4"
          >
            <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
    );
  }
  
  export default CheckBoxIcon;
  