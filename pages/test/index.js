import dynamic from "next/dynamic";
import Home from "components/home";
const DynamicArjs = dynamic(() => import("../../components/Arjs"), {
  ssr: false,
});

function TestAr({ scene }) {
  return (
    <div style={{ width: "auto", height: "auto" }}>
      <DynamicArjs nftUrl={`/nfts/${scene}`} model='/glb/women.glb' />
      <Home />
    </div>
  );
}

export const getServerSideProps = async ({ query }) => {
  return { props: { scene: query.s || "test-no1" } };
};

export default TestAr;
