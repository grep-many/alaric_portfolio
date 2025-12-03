import { Html } from "@react-three/drei";

const Spinner = () => (
  <div className="flex justify-center items-center size-full">
    <div className="size-20 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
  </div>
);

const Loader = ({ R3F = true }) => {
  if (!R3F) return <Spinner />;
  return (
    <Html>
      <Spinner />
    </Html>
  );
};

export default Loader;
