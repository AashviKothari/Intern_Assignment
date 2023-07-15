import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [isClicked, setIsClicked] = useState(true);

  useEffect(() => {
    document.body.addEventListener("click", () => {
      setIsClicked(false);
    });
  }, []);

  return (
    <main>
      <section className="fixed inset-0 grid h-screen grid-cols-2">
        <AnimatePresence>
          {isClicked && (
            <>
              <Rect1 />
              <Rect2 />
            </>
          )}
        </AnimatePresence>
      </section>
      <section className="text-4xl w-full max-w-[900px] mx-auto h-[200vh]">
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
          repudiandae doloribus voluptatibus enim earum eius est nihil ullam
          quasi possimus. Obcaecati omnis, iusto nam molestias sequi vel. Quasi,
          facilis laudantium.
        </p>
      </section>
    </main>
  );
}

const Rect1 = () => {
  return (
    <motion.div
      exit={{ x: "-100%" }}
      transition={{ type: "tween", duration: 2 }}
      className="w-full h-full bg-red-800"
    >
      <div className="flex justify-center items-center h-screen">
        <div className="text-right">
          <h1 className="text-white text-5xl font-bold bottom-5">Combating</h1>
          <h1 className="text-white text-5xl font-bold">Hunger and</h1>
          <h1 className="text-white text-5xl font-bold">ReducingWaste</h1>
        </div>
      </div>
    </motion.div>
  );
};

const Rect2 = () => {
  return (
    <motion.div
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 2 }}
      className="w-full h-full bg-green-800"
    >
      <div className="flex justify-center items-center h-screen">
        <div className="text-left">
          <h1 className="text-white text-5xl font-bold bottom-5">At Momeals our Aim is to Reduce Waste and combat hunger.</h1>
          
        </div>
      </div>
    </motion.div>
  );
};
