var listaFilmes = [
    'https://images.justwatch.com/poster/175288985/s592/gladiador.jpeg', 
    'https://i.pinimg.com/1200x/01/5f/de/015fdefde52a9d50c247e299646dd0c4.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEeWzgiRHOK2LxhzZzu8ywKbIoBy664juYDA&usqp=CAU.jpeg',
    'https://s2-g1.glbimg.com/IevIEPAfLp8JVZ3J6Hg7lpAHojA=/0x0:864x1280/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/a/m/c9ItmmTzqP432PMZWnkw/thor-love-and-thunder.jpeg',
    'https://www.jutamietti.com.br/wp-content/uploads/2013/02/vikings.jpg', 
    'https://cineprog.de/images/Breite_400px_RGB/p_91428.jpg'
  ];
  
  var nomeFilmes = [
    'Gladiador', 
    'Jujutsu Kaisen', 
    'Vingadores: Guerra Infinita', 
    'Thor: Amor e Trovão', 
    'Vikings', 
    'Demon Slayer'
  ];
  
  document.write('<div class="container_todosFilmes">');
  
  for (var i = 0; i < listaFilmes.length; i++) {
    document.write('<div class="container_filme">');
    document.write('<img src='+ listaFilmes[i] +'>');
    document.write('<p>'+ nomeFilmes[i] +'</p>');
    document.write('</div>');
  }
  
  document.write('</div>');