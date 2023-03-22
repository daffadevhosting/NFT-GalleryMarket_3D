import { ConnectWallet } from "@thirdweb-dev/react";
import Header from './components/Header';
import PreloadScreen from './components/mainScreen';
import "./assets/custom.css";

export default function Home() {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Perform any async tasks necessary for the preload
    setTimeout(() => {
      setIsLoaded(true);
    }, 5000);
  }, []);

  return (
    <div>
      {isLoaded ? (
    <div className="container">
        <Header />
    </div>
      ) : (
        <PreloadScreen />
      )}
    </div>
  );
}
