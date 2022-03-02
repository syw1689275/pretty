import logo from './logo.svg';
import './App.css';
import Pretty from '@/components/Pretty'

const enterData = [ 'foo', 'bar', { baz: 'baz', quz: { quz:'quz' } }, [ 'baz' ], [ 'qux' ] ]
function App() {
  return (
    <div className="App">
      <Pretty enterData={ enterData }/>
    </div>
  );
}

export default App;
