AFRAME.registerComponent("comics-posters",{
    init:function(){
     this.postersContainer = this.el   
    },
    createCards:function(){
     const thumbnailsref = [
      {
       id:"Spiderman", 
       title:"Spiderman",
       url:"../assets/spiderman-poster.jpg"  
      },
      {
          id:"Superman", 
          title:"Superman",
          url:"../assets/superman-poster.jpg"  
        },
      {
      id:"Captain Aero", 
      title:"Captain Aero",
      url:"../assets/captain-aero-poster.jpg"  
    },
      {
          id:"Outer Space", 
          title:"Outer Space",
          url:"../assets/outer-space-poster.jpg"  
        }   
  ]   
     let previousXPosition=-60
     for(var item of thumbnailsref){
       const posX = previousXPosition+25  
       const posY = 10
       const posZ = -40
       const position={x:posX,y:posY,z:posZ}
       previousXPosition = posX
      }
  
  
  
    },
    createBorder:function(position,id){
     const entityEl = document.createElement("a-entity")
     entityEl.setAttribute("id",id,)
     entityEl.setAttribute("visible",true)
     entityE1.setAttribute("geomotry",{
         primitive:"ring",
         radiusInner:9,
         radiusOuter:10
     })
     entityEl.setAttribute("position",position)
     entityEl.setAttribute("material",{
      color:"#00dcd4",
      opacity:04   
     })
     entityEl.setAttribute("cursor-listener",{})
     return entityEl
    },
  
    createThumbnail:function(item){
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("geometry",{
         primitive:"plane",
         width:20,
         height:80
      })
      entityEl.setAttribute("position",{x:0,y:5,z:0.1})
      entityEl.setAttribute("material",{
        src:item.url  
      })    
      return entityEl
    },
    createTitleEl:function(position,item){
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("text",{
        font:"exo2bold",
        align:"center",
        width:"70",
        color:"#e65100",
        value:item.title
      })  
      const elPosition = position
      elPosition.y = -20
      entityEl.setAttribute("position",elPosition)
      entityEl.setAttribute("visible",true)
      return entityEl
    }
  })