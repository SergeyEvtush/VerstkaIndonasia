import  scrollingObjects  from "./scroll.js";

export default{

  addDataAttrToLink:(menuLink,linkText)=>{
      const obj=new Object();
      scrollingObjects.scrollingObjects.map((el)=>{
        for (let key in el) {
          if(key.toLowerCase()===linkText){
            obj[key.toLowerCase()]=el[key].toLowerCase();
          }
         
        }
      });
      menuLink.setAttribute('data-goto',obj[linkText]);
  }
};
//здесь создаю объект и записываю в него ключи и свойства объекта из scroll.js в нижнем регистре и без пробелов,
//linkText-ключи объекта(их получаю из текста в ссылках)