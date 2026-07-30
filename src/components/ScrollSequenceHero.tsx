import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const FRAME_COUNT = 300;

export default function ScrollSequenceHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  // Create framer-motion scroll listener on the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Preload images on mount
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      // Format number to 3 digits (e.g., 001, 045, 300)
      const frameNumber = i.toString().padStart(3, '0');
      img.src = `/images/herosection/ezgif-frame-${frameNumber}.png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          renderFrame(1, loadedImages);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  // Function to render a specific frame to the canvas
  const renderFrame = (frameIndex: number, imgArray: HTMLImageElement[]) => {
    if (!canvasRef.current || imgArray.length === 0) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imgArray[frameIndex - 1];
    if (!img || !img.complete) return;

    // Set canvas dimensions to match window or image aspect ratio
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Calculate aspect ratio to cover the screen
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
    );
  };

  // Map scroll progress (0 to 1) to frame index (1 to 300)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === FRAME_COUNT) {
      const frameIndex = Math.max(1, Math.min(FRAME_COUNT, Math.ceil(latest * FRAME_COUNT)));
      requestAnimationFrame(() => renderFrame(frameIndex, images));
    }
  });

  // Typography animation triggers based on scroll percentage
  const scrollLabelOpacity = useTransform(scrollYProgress, [0, 0.02, 0.05], [1, 1, 0]);

  const text1Opacity = useTransform(scrollYProgress, [0.05, 0.10, 0.25, 0.30], [0, 1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0.05, 0.10, 0.25, 0.30], [30, 0, 0, -30]);

  const text2Opacity = useTransform(scrollYProgress, [0.35, 0.40, 0.55, 0.60], [0, 1, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.35, 0.40, 0.55, 0.60], [30, 0, 0, -30]);

  const text3Opacity = useTransform(scrollYProgress, [0.65, 0.70, 0.80, 0.85], [0, 1, 1, 0]);
  const text3Y = useTransform(scrollYProgress, [0.65, 0.70, 0.80, 0.85], [30, 0, 0, -30]);

  const finalOpacity = useTransform(scrollYProgress, [0.85, 0.90, 1], [0, 1, 1]);

  return (
    <section ref={containerRef} className="h-[600vh] relative bg-luxury-black">
      {/* Sticky container holds the canvas and overlays */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* The Image Sequence Canvas */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-luxury-black/40 z-10" />

        {/* Text Overlays */}
        <div className="relative z-20 w-full max-w-7xl mx-auto h-full pointer-events-none">
          
          {/* Scroll Label */}
          <motion.div 
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
            style={{ opacity: scrollLabelOpacity }}
          >
            <span className="text-platinum-500 text-xs font-mono tracking-widest uppercase mb-4">Scroll Down</span>
            <motion.div 
              className="w-[1px] h-16 bg-gradient-to-b from-platinum-500 to-transparent"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Text 1: The Movement */}
          <motion.div 
            className="absolute top-24 md:top-48 left-6 md:left-12 max-w-sm text-left"
            style={{ opacity: text1Opacity, y: text1Y }}
          >
            <div className="inline-block text-xs font-mono tracking-widest text-platinum-500 uppercase border-b border-platinum-500 pb-2 mb-4">01. The Movement</div>
            <h2 className="text-2xl md:text-4xl font-serif text-platinum-100 mb-4">High Precision Automatic.</h2>
            <p className="text-platinum-400 text-base font-light">Reliable accuracy with a 36-hour power reserve. Zero batteries required.</p>
          </motion.div>

          {/* Text 2: The Design */}
          <motion.div 
            className="absolute bottom-24 md:bottom-32 right-6 md:right-12 max-w-sm text-right flex flex-col items-end"
            style={{ opacity: text2Opacity, y: text2Y }}
          >
            <div className="inline-block text-xs font-mono tracking-widest text-platinum-500 uppercase border-b border-platinum-500 pb-2 mb-4">02. The Design</div>
            <h2 className="text-2xl md:text-4xl font-serif text-platinum-100 mb-4">Exhibition Skeletal Core.</h2>
            <p className="text-platinum-400 text-base font-light text-right">Protected by Mineral Glass. Openworked dial revealing intricate mechanics within.</p>
          </motion.div>

          {/* Text 3: The Material */}
          <motion.div 
            className="absolute bottom-24 md:bottom-32 left-6 md:left-12 max-w-sm text-left"
            style={{ opacity: text3Opacity, y: text3Y }}
          >
            <div className="inline-block text-xs font-mono tracking-widest text-platinum-500 uppercase border-b border-platinum-500 pb-2 mb-4">03. The Strap</div>
            <h2 className="text-2xl md:text-4xl font-serif text-platinum-100 mb-4">Fashionable Mesh Strap.</h2>
            <p className="text-platinum-400 text-base font-light">Sleek stainless steel with a secure push button clasp. Built for everyday durability.</p>
          </motion.div>

          {/* Final Resolve */}
          <motion.div 
            className="absolute top-24 md:top-48 left-6 md:left-12 max-w-xl text-left flex flex-col items-start"
            style={{ opacity: finalOpacity }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-normal leading-tight text-platinum-100">
              Timeless Elegance.<br />
              <span className="italic text-platinum-400 font-light">Mechanical Perfection.</span>
            </h1>
            <p className="mt-8 text-platinum-400 text-xl font-sans tracking-widest uppercase">The Titan Skeleton</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
