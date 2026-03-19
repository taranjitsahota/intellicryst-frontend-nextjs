"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Props {
  images: StaticImageData[];
}

export default function ImageLightbox({ images }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {images.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-lg cursor-pointer group w-[220px]"
            onClick={() => setActiveIndex(i)}
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition z-10" />

            <div className="relative w-full h-[420px]">
              <Image
                src={img}
                alt=""
                fill
                className="object-contain bg-white"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* CLOSE */}
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setActiveIndex(null)}
            >
              <X size={28} />
            </button>

            {/* IMAGE */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl w-full"
            >
              <Image
                src={images[activeIndex]}
                alt=""
                className="w-[300px] h-auto rounded-xl mx-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
