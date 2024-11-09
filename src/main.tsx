import { createRoot } from 'react-dom/client'
import './index.css'
import ExampleButton from "./components/ExampleButton.tsx";

createRoot(document.getElementById('root')!).render(
    <ExampleButton variant={"default"}>
        Texto
    </ExampleButton>,
)
