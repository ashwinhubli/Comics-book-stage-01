AFRAME.registerComponent("cursor-listener",{
    schema:{
     selectedItemId:{default:"",type:"string"}
    }, 
    init:function(){
     this.handleMouseEnterEvents();
     this.handleMouseLeaveEvents();
     this.handleClickEvents();
     } ,
    handlePostersListState:function(){
      const id = this.el.getAttribute("id");
      const posterId = ["Spiderman","Superman","Captain Aero","Outer Space"];
      if(posterId.includes(id)){
       const postersContainer = document.querySelector("#posters-container")
       postersContainer.setAttribute("cursor-listener",{
           selectedItemId:id
       })
       this.el.setAttribute("material",{
          color:'#d76b30',
          opacity:"1" 
       })
      }
      
    } ,
    handleMouseEnterEvents:function(){
      this.el.addEventListener("mouseenter",()=>{
          this.handlePostersListState()
      })
    },
    handleMouseLeaveEvents:function(){
       this.el.addEventListener("mouseleave",()=>{
           const {selectedItemId} = this.data;
          if(selectedItemId){
              const el = document.querySelector(`#${selectedItemId}`)
              const id = el.getAttribute("id")
              if(id==selectedItemId){
                el.setAttribute("material",{
                    color:"#0077cc",
                    opacity:1
                })
              }
          }
       }) 
    }
})