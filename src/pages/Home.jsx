import About from "../components/PageElements/About/About";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <motion.div className="container-about">
        <About />
      </motion.div>
    </>
  );
}
