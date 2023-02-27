/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from './app.module.scss';
import Header from './layouts/components/header/header';
import Navbar from './layouts/components/navbar/navbar';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      {/* <NxWelcome title="pokemon-card" /> */}
      <div title="pokemon-card"></div>
      <Navbar />
      <Header />
      {/* <div /> */}
    </>
  );
}

export default App;
