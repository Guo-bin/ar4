import dynamic from 'next/dynamic'

const DynamicArjs = dynamic(() => import('../../components/Arjs'), {
  ssr: false,
})

function TestAr({ scene }) {
  return (
    <div>
      <DynamicArjs
        nftUrl={`/nfts/${scene}`}
        model="/gltf/women.gltf"
      />
    </div>
  );
}

export const getServerSideProps = async ({ query }) => {
  return { props: { scene: query.s || 'test-no1' } };
};

export default TestAr;
