import Planet from "../components/Planet";
import PlanetFacts from "../components/PlanetFacts";

const PlanetPage = ({ data }) => {
  return (
    <>
      <main>
        <Planet data={data} />
      </main>
      <footer>
        <PlanetFacts
          revolution={data.revolution}
          rotation={data.rotation}
          radius={data.radius}
          temperature={data.temperature}
        />
      </footer>
    </>
  );
};

export default PlanetPage;
