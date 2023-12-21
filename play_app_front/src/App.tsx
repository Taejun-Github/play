import "./App.css";
import BigButton from "./components/BigButton";
import FormField from "./components/FormField";

function App() {
  // const [count, setCount] = useState(0);

  //   useEffect(() => {
  //       const fetchData = async () => {
  //           try {
  //               const backendUrl = import.meta.env.VITE_BACKEND_URL;
  //               console.log(backendUrl);
  //               const response = await axios.get(`${backendUrl}/`);
  //               console.log(response);
  //           } catch (error) {
  //               console.error('Error fetching data:', error);
  //           }
  //       };

  //       fetchData();
  //   }, []);

  return (
    <>
      <BigButton text="Sign in" />
      {/* <FormField title="emEmail" placeholder="Email"></FormField> */}
    </>
  );
}

export default App;
