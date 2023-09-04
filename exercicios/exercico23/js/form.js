document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    const telefono = "48984702192";
  
    const cliente = document.querySelector("#cliente").value;
    const fecha = document.querySelector("#fecha").value;
    const hora = document.querySelector("#hora").value;
    const empleado = document.querySelector("#empleado").value;
    const servicio = document.querySelector("#servicio").value;
    const resp = document.querySelector("#respuesta");
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *_MI NEGOCIO_*%0A
          *Reservas*%0A%0A
          *Qual é o seu nome?*%0A
          ${cliente}%0A
          *Indicar a ordem da reserva*%0A
          ${fecha}%0A
          *Indica a hora da reserva*%0A
          ${hora}%0A
          *Empregado de preferência*%0A
          ${empleado}%0A
          *Serviço que deseja realizar*%0A
          ${servicio}`;
  
    if (cliente === "" || fecha === "" || hora === "") {
      resp.classList.add("fail");
      resp.innerHTML = `Faltam alguns dados ${cliente}`;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;
  
    window.open(url);
  });