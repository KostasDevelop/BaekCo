import { motion } from 'framer-motion'
import { Building2, Construction, BarChart3, RefreshCcw, Home, Users } from 'lucide-react'

const investmentOptions = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Propietario de terreno",
    description: "Los inversores dueños de un terreno pueden utilizarlo como ingreso a un proyecto, mediante la modalidad de canje de tierra por metros cuadrados construidos."
  },
  {
    icon: <Construction className="w-8 h-8" />,
    title: "Compra en pozo",
    description: "La compra de unidades en pozo, asegura el precio más bajo del m² durante el periodo de obra. Representa un gran ahorro respecto al precio final de venta de una unidad a estrenar."
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Micro Inversores",
    description: "Los inversores pueden ingresar aportando un capital mínimo de u$s10.000 para financiar un proyecto inmobiliario, convirtiéndose en acreedores de un porcentaje del mismo, en base a la participación realizada."
  },
  {
    icon: <RefreshCcw className="w-8 h-8" />,
    title: "Servicio de Post-Venta",
    description: "Ofrecemos asesorías sobre refacciones de interiores, así como en el seguimiento de la colocación de mobiliarios y artefactos de interior. Nuestro objetivo es garantizar la satisfacción total de nuestros clientes, ofreciéndoles un servicio personalizable."
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Inversión en rentas",
    description: "Adquirir viviendas a estrenar en una zona en crecimiento termina por convertirse en un ingreso fijo al ofrecerlo en alquiler, como también una oportunidad única de negocio aumentando su valor de venta a futuro."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Pool de inversión",
    description: "Implica un conjunto de personas que se suscriben a aportar un capital determinado, el cual equivale al precio de una o varias unidades. Los % de aporte figuran en el contrato, de esta forma cada inversor recupera su cuota correspondiente."
  }
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export default function InvestmentOptions() {
  return (
    (<div
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
          Posibilidades de Inversión
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {investmentOptions.map((option, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              {option.icon}
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
              {option.title}
            </h3>
            <p className="text-gray-600 text-center">
              {option.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>)
  );
}

