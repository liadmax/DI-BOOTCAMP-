function hello(){
  alert('hello world')
}
setTimeout(hello, 2000 );

function add(){
  let adding = document.getElementById('container').append('hello world')
  
}
setTimeout(add, 2000);

function satrt(){


  let more = document.getElementById('container').append('hello world ')
  let set = more
  set = setInterval(more,2000)
}
function stop(){
  clearInterval(set);
}
