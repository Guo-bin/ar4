import Homepage from "components/home";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Homepage />
    </div>
  );
}
