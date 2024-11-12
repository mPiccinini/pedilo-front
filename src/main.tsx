import { createRoot } from 'react-dom/client'
import './index.css'
import Button from "./components/button/Button.tsx";


createRoot(document.getElementById('root')!).render(
    <Button variant={"pressed"}>
        Texto
    </Button>,
)
