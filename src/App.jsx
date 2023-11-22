import Loading from "./components/Loading";
import useAuth from "./hooks/use-auth";
import Route from "./router/Route";

function App() {
  const { isLoading } = useAuth();
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Route />
        </>
      )}
    </>
  );
}

export default App;
