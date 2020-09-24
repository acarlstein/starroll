let include = (fromUrl, intoElement) => {
  fetch(fromUrl)
  .then((response) => {
    return response.text();
  })
  .then((text) => {
    var parser = new DOMParser();
    return parser.parseFromString(text, 'text/html');          
  })
  .then((doc) => {
    let element = document.getElementById(intoElement)
    if (!element) throw Error("No element where to insert into")    
    Array.from(doc.getRootNode().body.children).forEach((child) => {
      element.appendChild(child)
    })
   
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = doc.getRootNode().head.querySelector('script.local').innerHTML
    let head = document.querySelector('head')
    head.appendChild(script)
  })      
}
