function navbar(){
    return `<h3>Sign Up</h3>
    <a href="./jewelery.html">jewelery</a>
    <a href="./electronics.html">electronics</a>
  </div>`;
}
export default navbar;


let getData = async (url) => {
    // Fetch the data and return the data
    let res = await fetch(url);
  
    let data = await res.json();
  
    return data;
  };
  
  // What to append
  // Where to append
  
  let append = (data, container) => {
    data.forEach((el) => {
      let div = document.createElement("div");
      let p = document.createElement("p");
      let img = document.createElement("img");
  
      p.innerText = el.title;
      img.src = el.image;
  
      div.append(img, p);
      container.append(div);
    });
  };
  
  export { getData, append };