
export default
class Header{
   constructor(width,height,position,zIndex,top,left,classElem,parent,...items){
      this.width=width;
      this.height=height;
      this.position=position;
      this.zIndex=zIndex;
      this.top=top;
      this.left=left;
      this.classElem=classElem;
      this.items=items;
      this.parent=parent;
      this.header=document.createElement('header');
   }
   createHeader(){
      this.header.classList.add('heder');
      this.header.style.cssText=`
            position:${this.position};
            top:${this.top};
            left:${this.left};
            z-index:${this.zIndex};
            width:${this.width};
            height:${this.height};
            `;
      return this.header;
   }
   appendElemToParent(){
      const parentElem=document.querySelector(this.parent);
      const headerOnPage=this.createHeader();
      parentElem.append(headerOnPage);
   }
   returnElem(i){
      return this.items[i];
   }
   appendElemToHeader(i){
    return  this.header.insertAdjacentHTML('afterbegin',this.returnElem(i));
   }

}
