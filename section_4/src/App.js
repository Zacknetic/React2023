import Concepts from './components/Concepts';
import Header from './components/Header';
import keyConceptsImage from './assets/images/key-concepts.png';

const header = {
  image: keyConceptsImage,
  alt: "Medal badge with a star",
  title: 'Key React Concepts',
  description: 'Selected key React concepts you should know about'
};

function App() {
  return (
    <div>
      <Header item={header} />
      <Concepts />
    </div>
  );
}

export default App;
