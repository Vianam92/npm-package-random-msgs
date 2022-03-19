const messages = ["Piensa, cree, sueña y atrévete", "Cuando dejas de soñar dejas de vivir", "Trabaja en lo que te apasiona y dejarás de trabajar", "El realismo es para pesimistas. Un optimista crea su propia realidad.", "Tener grandes expectativas es la clave de todo","El hombre que no tiene imaginación no tiene alas","Cada día es una serie de conflictos entre el camino correcto y el camino fácil", "Y ahora se lo que debo hacer, seguir respirando, porque mañana volverá a amanecer, y quien sabe que traerá la marea. (Naufrago)" , "Al final tienes que confiar en algo, tu instinto, el destino, la vida, el karma, en lo que sea. (Steve Jobs)", "Del sufrimiento emergieron las almas más fuertes, los caracteres sólidos tienen cicatrices. (Khalil Gibran)", "El mejor momento para plantar un árbol era hace 20 años. El segundo mejor momento es AHORA", "Cada día es una nueva oportunidad para cambiar tu vida"];

const randomMsg = text => {
  const message = text[Math.floor(Math.random() * text.length)];
  console.log(message);
};

const msg = randomMsg(messages);

module.export = {msg};