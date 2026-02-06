# language: es
Característica: Pago de servicios

  Como usuario del sistema
  Quiero pagar un servicio
  Para obtener un comprobante en PDF

  @pago
  Escenario: Pago exitoso de servicio Fibertel
    Dado el usuario se encuentra en la pagina de inicio de sesion
    Cuando ingresa el usuario "demo"
    Y ingresa la contrasena "demo123"
    Y confirma el inicio de sesion
    Y navega a la seccion Pago de Servicios
    Y selecciona el servicio "🌐 Internet - Fibertel"
    Y visualiza el monto "$12,000"
    Y confirma el pago
    Entonces se muestra un mensaje de pago exitoso
    Y se habilita el boton Descargar PDF
    Y el comprobante PDF se genera con los datos correctos

