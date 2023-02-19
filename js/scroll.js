

export default{
      scrollToElement:(elementClass)=>{
      const scrollToElement=document.querySelector(elementClass);
      scrollToElement.scrollIntoView({
         block:'center',
         inline:'nearest',
         behavior:"smooth"
      });
      console.log(scrollToElement);
      },
      scrollingObjects:[
            {Information:"Footer"},
            {aboutUs:"bromo"},
            {culture:"indonasian-culture"},
      ]
};


