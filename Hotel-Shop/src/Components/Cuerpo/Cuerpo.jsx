import React, { useContext} from 'react'

import HomeLayout from '../HomeLayout/HomeLayout'
import './Cuerpo.css'
import { GlobalContext } from './../../Contexts/GlobalContext/GlobalContext'
import TestimonialsLayout from '../TestimonialsLayout/TestimonialsLayout'





const Cuerpo = () => {
    let componente

    // desestructurar el objeto---------------------------------------
    const { viewportLayout } = useContext(GlobalContext)
    
   
    switch (viewportLayout) {
        case 0:
           componente =  <HomeLayout />
            break;
    
        case 1:
            componente = <TestimonialsLayout />
            break;
        
        default:
            console.log(viewportLayout)
            console.log('n hay nada k mostrar')
           break;
     }

    

    return <div className='Cuerpo' >
    {componente}
    
    </div>
}

export default Cuerpo