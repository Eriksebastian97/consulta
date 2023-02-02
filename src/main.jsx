import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Layout from "./components/Layout";
import NuevoCliente,{action as nuevoClienteAction} from "./pages/NuevoCliente"; // le cambiamos el nombre por ejemplo podemos tener multiple actions
import Index,{loader as clientesLoader} from "./pages/Index"; //lo importamos podemos tener muchos loader y en este caso lo renombramos 
//importamos createBrowserRouter es una funcion que nos permite definir un routing por medios de objetos
// RouterProvider es el centro de la aplicacion enpiezan a fluir los datos a los demas componentes


const router = createBrowserRouter([
  {
    path: "/", //path es la forma que definimos las diferentes URL
    element: <Layout />, //element lo que se muestra en pantalla puede ser codigo html o puede ser un componente 
    children:[ 
      {
        index:true, //se va a cargar cuando visitemos la pagina principal
        element:<Index />, //se inyecta inicio en el componente principal
        loader: clientesLoader
      },  //lo que tengas en el layout se va a reflejar en todos los hijos que tengas definido para este layout
      {
        path: "/clientes/nuevo", //hereda el diseño y despues inyecta el element
        element: <NuevoCliente />,
        action: nuevoClienteAction //conoce nuestro formulario al action al cual tiene que enviarle informacion  
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
