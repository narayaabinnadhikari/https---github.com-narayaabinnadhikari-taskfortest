
import Firstpage from "./Firstpage/page";
import Secondpage from "./Secondpage/page";
import Footer from "./Footer/page";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <Firstpage />
      <Secondpage />
      <Footer />
    </div>
  );
}
