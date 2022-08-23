import dynamic from "next/dynamic";
import Home from "components/home";
const DynamicArjs = dynamic(() => import("../../../components/Arjs"), {
  ssr: false,
});

function TestAr({ scene, light, position }) {
  return (
    <div style={{ width: "auto", height: "auto" }}>
      <DynamicArjs
        nftUrl={`/nfts/${scene}`}
        model='/glb/women.glb'
        light={light}
        position={position}
      />
      <Home />
    </div>
  );
}

export const getServerSideProps = async ({ query }) => {
  console.log(query);
  return {
    props: {
      scene: query.s || "test-no1",
      light: query.id,
      position: query.pid,
    },
  };
};

export default TestAr;
