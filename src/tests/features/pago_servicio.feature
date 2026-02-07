# language: es
Característica: Pago de servicios

  Como usuario del sistema
  Quiero pagar un servicio
  Para obtener un comprobante en PDF

  @pago
  Escenario: Pago exitoso de servicio Fibertel
    Dado que el usuario inició sesión como "demo" con la contraseña "demo123"
    Y navega a la sección Pago de Servicios
    Cuando selecciona el servicio "🌐 Internet - Fibertel"
    Entonces visualiza el monto "$12,000"
    Y confirma el pago
    Y se muestra un mensaje de pago exitoso
    Y se habilita el botón Descargar PDF
    Y el comprobante PDF se genera con los datos correctos

