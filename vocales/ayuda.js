

function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [
    {
      pregunta: "<p>identifique la inicial de la imagen</p>",
      ayuda: "letra A",
      ayudaImg:"https://3.bp.blogspot.com/-Zu_at3maRNw/VS5p-EYggxI/AAAAAAADu8k/41fazGuOJvI/s1600/1A.png", 
      imagen:"https://th.bing.com/th/id/R.a170bf92b877d43801c8fcd85ec8e662?rik=4DVUw5UbJXi7XA&riu=http%3a%2f%2ffreepngclipart.com%2fdownload%2fsquirrel%2f75385-cuteness-squirrel-illustration-cartoon-png-image-high-quality.png&ehk=vYHp90hIz1hXQIFlVZRtVUuep8c2XTlvrK6qORPqEIE%3d&risl=&pid=ImgRaw&r=0",
      respuesta:"A",
      distractores:["O","U","E"],
    },
    {
      pregunta:"<p>identifique la inicial de la imagen</p>",
      ayuda: "letra E",
      ayudaImg: "https://i.pinimg.com/originals/2a/55/d8/2a55d8b6a7d9c1430b1dec7b02c33943.png" ,
      imagen:"https://images.vexels.com/media/users/3/151790/isolated/preview/309df5b97f865f9ebd8e2df44b9e65d7-dibujos-animados-de-animales-erizo.png",
      respuesta: "E",
      distractores: ["I", "U", "A"],
    },
    {
     pregunta: "<p>identifique la inicial de la imagen</p>",
     ayuda: "letra I",
     ayudaImg: "https://ideasimagenes.com/wp-content/uploads/2020/09/Letra73-255x420.png",
     imagen:"https://pngimg.com/uploads/igloo/igloo_PNG39.png",
     respuesta: "I",
     distractores: ["A", "K", "O"],
    },
    {
     pregunta:"<p>identifique la inicial de la imagen</p>",
     ayuda: "letra O",
     ayudaImg:"https://th.bing.com/th/id/R.baf8c891bffbd35c5938b71c8b635969?rik=aXQ0U18TKhQs0g&riu=http%3a%2f%2f3.bp.blogspot.com%2f-8cj4sxY8zaI%2fVS5qGw7FgiI%2fAAAAAAADu-c%2fBqZziXG_4HU%2fs1600%2f17A.png&ehk=OTD%2f%2fT3S21kM0Kz7OzJ7I4c9qW1F7nJ1EwQjq%2bduPwk%3d&risl=&pid=ImgRaw&r=0" ,
     imagen:"https://webstockreview.net/images/clipart-sheep-cow-15.png" ,
     respuesta: "O",
     distractores: ["U", "P", "I"],
    },
    {
     pregunta:"<p>identifique la inicial de la imagen</p>",
     ayuda: "letra U",
     ayudaImg:"23A.png",
     imagen:"https://th.bing.com/th/id/R.da61dd3bd390b4577692f643af6945ad?rik=wFiPVzAktHX5wA&riu=http%3a%2f%2frosatubes.r.o.pic.centerblog.net%2fo%2f454e51d1.png&ehk=y3wb%2bCA%2f3eXVbWEDZR0TZFq56bteedIpBIz68rryQfI%3d&risl=&pid=ImgRaw&r=0" ,
     respuesta: "U",
     distractores: ["O", "E", "S"],
    },
  ];