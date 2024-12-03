import LinkSection from '@/components/secondaryComponent/linkSection'
import React from 'react'

export default function Inversion() {
  const descriptions = [
    "Con una visión realista y funcional, acompañamos a nuestros clientes e inversores en todo el proceso para garantizarles un hogar confortable y de atractiva rentabilidad."
  ];
  const itemSection = [
    {
        id: 1,
        title: "INVERSIONES INMOBILIARIAS",
        description:
            "Con más de diez años en el mercado y con el apoyo de clientes que apuestan a los proyectos invirtiendo en la construcción y el desarrollo inmobiliario, logramos generar una red de inversores que participan en diferentes etapas de los proyectos Baek & Co.",
        button: false,
    }
  ]
  return (
    <>
          <LinkSection descriptions={descriptions} itemSection={itemSection}/>

    </>
  )
}
