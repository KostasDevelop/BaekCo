import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

export default function CustomPlansHero() {
  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ 
          scale: 1,
        }}
        className="absolute inset-0">
        <img
          src="https://baekyco.com/img/home_slide_3.webp"
          alt="Construction background"
          className="object-cover w-full h-full"
          priority />
      </motion.div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-600/60" />
      {/* Content */}
      <div className="relative flex-col h-full w-fit mx-auto sm:px-6 lg:px-8 flex md:flex-row justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex flex-col md:flex-row md:max-w-[1200px] max-w-[450px] items-center gap-20 md:gap-40 px-4">
          <h2 className="text-2xl md:text-2xl lg:text-3xl font-medium text-white leading-tight mb-0">
            También realizamos planes a medida, que se adaptan a cada cliente según su necesidad.
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-slate-800 w-full max-w-[300px] text-white px-8 py-3 rounded-lg text-lg font-medium 
            hover:bg-slate-700 transition-colors duration-200 shadow-lg">
              <Link target='_blank' to={'https://api.whatsapp.com/send/?phone=5491134608762&text=Hola%21+Me+gustar%C3%ADa+recibir+m%C3%A1s+informaci%C3%B3n+sobre+inversi%C3%B3n.&type=phone_number&app_absent=0'}>
            Más información
                       </Link>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
