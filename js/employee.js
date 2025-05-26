const empleados = [
  {
    dui: '12345678-9',
    nombre: 'José Maximiliano Fernández',
    correo: 'jose@correo.com',
    cargo: 'Gerente',
  },
  {
    dui: '12345678-8',
    nombre: 'Fernando Ignacio Mendoza',
    correo: 'fer.m@correo.com',
    cargo: 'Contador',
  },
  {
    dui: '12345678-7',
    nombre: 'Isidora Valentina María Morales',
    correo: 'v.maria@correo.com',
    cargo: 'Contador',
  },
];

function cargarTabla() {
  const cuerpo = document.getElementById('employeeTableBody');
  cuerpo.innerHTML = '';
  empleados.forEach((e) => {
    cuerpo.innerHTML += `
      <tr>
        <td>${e.dui}</td>
        <td>${e.nombre}</td>
        <td>${e.correo}</td>
        <td>${e.cargo}</td>
        <td>
          <img src="../media/view.svg" title="Ver">
          <img src="../media/edit.svg" title="Editar">
          <img src="../media/delete.svg" title="Eliminar">
        </td>
      </tr>
    `;
  });
}

function buscarEmpleado() {
  const texto = document.getElementById('searchInput').value.toLowerCase();
  const cuerpo = document.getElementById('employeeTableBody');
  cuerpo.innerHTML = '';
  empleados
    .filter((e) => e.nombre.toLowerCase().includes(texto))
    .forEach((e) => {
      cuerpo.innerHTML += `
        <tr>
          <td>${e.dui}</td>
          <td>${e.nombre}</td>
          <td>${e.correo}</td>
          <td>${e.cargo}</td>
          <td>
            <img src="../media/famicons_eye-sharp.png" title="Ver">
            <img src="../media/ic_outline-search.png" title="Editar">
            <img src="../media/Vector.png" title="Eliminar">
          </td>
        </tr>
      `;
    });
}

function registrarEmpleado() {
  alert('Redirigir al formulario de registro...');
}

// Cargar tabla al inicio
document.addEventListener('DOMContentLoaded', cargarTabla);
