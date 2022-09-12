import React from 'react'
import './InCPF.css';


const InCPF = () => {

     function mascara_cpf() {
          const cpf = document.getElementById('cpf')
          if (cpf.value.length == 3 || cpf.value.length == 7) {
               cpf.value += "."
          } else if (cpf.value.length == 11) {
               cpf.value += "-"
          }

     }

     function mascara_cnpj() {
          const cpf = document.getElementById('cpf')
          if (cpf.value.length == 2 || cpf.value.length == 6) {
               cpf.value += "."
          } else if (cpf.value.length == 10) {
               cpf.value += "/"
          } else if (cpf.value.length == 13) {
               cpf.value += "-"
          }
     }


     return (
          <div className='div_container'>

               <form>
                    <p> Por favor digite apenas os números do CPF ou CNPJ do contratante </p>
                    <label>
                         CPF ou CNPJ
                         <input type='text'
                              id='cpf'
                              placeholder='000000000/00'
                              autoComplete='on'
                              maxLength='16'
                              onKeyDown={(mascara_cnpj)}
                         />


                    </label>
               </form>

               <button type="submit"> Imprimir </button>
          </div>
     )
}


export default InCPF


