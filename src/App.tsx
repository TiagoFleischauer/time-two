import './styles/global.css';
import './styles/theme.css';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className='form'>
          <div className='formRow'>
            <DefaultInput
              id='meuInput'
              labelText='task:'
              placeholder='Ex.: limpar o quarto'
            />
          </div>
          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
        </form>
      </Container>
    </>
  );
}

export default App;
