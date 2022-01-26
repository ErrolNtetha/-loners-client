import useGetName from './useGetName'; 

function App() {
  const name = useGetName(1);

  return (
    <div>
        <h2> My Name </h2>
        <p> {name} </p>
    </div>
  );
}

export default App;
