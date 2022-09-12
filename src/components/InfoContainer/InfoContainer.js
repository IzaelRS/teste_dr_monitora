import React from 'react';
import './InfoContainer.css';



const InfoContainer = () => {
     return (
          <div className='container_info' >
               <nav className='info_monitora'>

                    <p className='titulo'> Telefones para contato </p>
                    <p className='sub_tituloSac'> SAC</p>
                    <p className='sub_titulon'> 4197 4400 </p>
                    <p className='sub_tituloRf'> ROUBO E FURTO </p>
                    <p className='sub_titulon'> 0800 7713 416 </p>
               </nav>
               <div className='logo_drmonitora'>
                    <p className='corp'> © 2022 Dr Monitora corp. </p>
               </div>

          </div >
     )
}

export default InfoContainer