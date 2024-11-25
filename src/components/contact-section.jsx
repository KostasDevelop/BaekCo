import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Send } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

// Componente reutilizable para los elementos de contacto
const ContactItem = ({ icon: Icon, text, link }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="flex gap-5 mt-10 items-start mb-6 justify-center md:justify-start">
    <Icon className="w-8 h-8 sm:w-6 sm:h-6 mt-1 mr-3 text-blue-600 flex-shrink-0" />
    <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-600 text-lg">
      {text}
    </a>
  </motion.div>
)

const contactInfo = [
  { icon: MapPin, text: "Av. Gaona 3707 - Piso 7\nCiudad Autónoma de Buenos Aires", link: "https://www.google.com/maps?q=Av.+Gaona+3707" },
  { icon: Mail, text: "info@baekyco.com", link: "mailto:info@baekyco.com" },
  { icon: Phone, text: "+54 11 4582-2972", link: "http://api.whatsapp.com/send/?phone=5491145822972&text&type=phone_number&app_absent=0" },
]

const subjectOptions = [
  "Consulta general",
  "Soporte técnico",
  "Ventas",
  "Otros",
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    subject: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [captcha, setCaptcha] = useState(Math.floor(Math.random() * 10000).toString().padStart(4, '0'))
  const [userCaptcha, setUserCaptcha] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSelectChange = (value) => {
    setFormData(prevData => ({ ...prevData, subject: value }))
  }

  const validateCaptcha = () => {
    if (userCaptcha === captcha) {
      return true
    }
    setCaptcha(Math.floor(Math.random() * 10000).toString().padStart(4, '0'))
    setUserCaptcha('')
    return false
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateCaptcha()) {
      // Handle form submission logic here
      console.log(formData)
    } else {
      alert('Captcha incorrecto. Por favor, intente de nuevo.')
    }
  }

  return (
    <section className="w-full mt-10 md:px-20 mb-20 bg-white">
      <div className="container max-w-lg mx-auto px-4 md:px-6 md:max-w-none">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row gap-8 items-start justify-center">
          <div className="flex-1 w-full text-left md:text-left max-w-xs mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Contáctanos</h2>
            <p className="text-gray-600 mb-8 text-center md:text-left">
              Completá el siguiente formulario para recibir más información.
            </p>
            {/* Mapeamos los elementos de contacto */}
            <div className='hidden md:flex lg:flex flex-col'>
              {contactInfo.map((item, index) => (
                <ContactItem  key={index} icon={item.icon} text={item.text} link={item.link} />
              ))}
            </div>
          </div>
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="flex-1 space-y-4 bg-white p-6 rounded-xl shadow-md w-full max-w-lg mx-auto">
            <Select onValueChange={handleSelectChange}>
              <SelectTrigger className="w-full rounded-lg">
                <SelectValue placeholder="Asunto*" />
              </SelectTrigger>
              <SelectContent>
                {subjectOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              placeholder="Nombre y Apellido*"
              name="name"
              className="w-full rounded-lg"
              value={formData.name}
              onChange={handleInputChange}
              required />
            <Input
              type="email"
              placeholder="Email*"
              name="email"
              className="w-full rounded-lg"
              value={formData.email}
              onChange={handleInputChange}
              required />
            <Input
              type="tel"
              placeholder="Teléfono"
              name="phone"
              className="w-full rounded-lg"
              value={formData.phone}
              onChange={handleInputChange} />
            <Textarea
              placeholder="Mensaje*"
              name="message"
              className="w-full rounded-lg"
              value={formData.message}
              onChange={handleInputChange}
              required />
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="bg-gray-200 p-2 rounded">
                  <span className="font-mono">{captcha}</span>
                </div>
                <Input
                  type="text"
                  placeholder="Ingrese el captcha"
                  value={userCaptcha}
                  onChange={(e) => setUserCaptcha(e.target.value)}
                  required
                  className="w-full rounded-lg" />
              </div>
              <p className="text-xs text-gray-500">Ingrese el código de 4 dígitos que ve arriba</p>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="privacy" required />
              <Label htmlFor="privacy" className="text-sm text-gray-600">
                Acepto la política de privacidad
              </Label>
            </div>
            <Button
              type="submit"
              className="w-full rounded-lg bg-[#1B2D4F] hover:bg-[#1B2D4F]/90">
              <span className="flex items-center justify-center gap-2">
                Enviar
                <Send className="w-4 h-4" />
              </span>
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
