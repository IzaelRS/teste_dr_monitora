import './App.css';
import './Styles.css';
import InCPF from './components/InCPF';
import ButtonF from './components/BotaoFlutuante/ButtonF';
import InfoContainer from './components/InfoContainer/InfoContainer';
import Header from './components/Header/Header';



function App() {
  return (
    <div>
      <Header />

      <div className='raiz_container'>
        <p className='info_boleto'> Para impressão do boleto favor digitar o número do CPF ou CNPJ</p>

        <div className='front_container'>
          <InCPF />
          <ButtonF />
        </div>
        <InfoContainer />
      </div>

      <div>

      </div>
    </div >

  );
}

//<img src={DrLogo} alt="logobackdrmonitora" className='logoDr' />
export default App;
