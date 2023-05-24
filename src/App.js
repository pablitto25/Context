import MyPage from './component/MyPage';
import MyPageContext from './component/MyPageContext';

function App() {
  return (
    <div>
      <h1>React context API</h1>
      <a href='https://es.reactjs.org/docs/context.html'
      target='_blank'
      rel='noreferrer'
      >
        Documentacion
        </a>
        <hr/>
        <MyPageContext/>
        <hr/>
        <MyPage/>
    </div>
  );
}

export default App;
