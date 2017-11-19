/**
 * Created by rowthan on 2017/11/19.
 */
var whatselement;
whatselement = (function () {
  function Whats() {
  }
  Whats.getUniqueId = function (target,prefix=false) {
    //TODO target不为DOM对象的时候直接返回
    //init result
    let result = {
      uniqueId:"",
      queryType:""
    };

    //construct data info of the target
    const id = target.id;
    const name = target.name;
    let className = "";
    const classList = target.classList;
    if(classList){
      classList.forEach(function (item) {
        className = className+"."+item;
      });
    }
    const tag = target.tagName.toLowerCase();
    const type = target.type?target.type.toLowerCase():"";

    if(tag==="body"){
      result.uniqueId = tag;
      result.queryType="root";
      return result;
    }
    //location by id
    if(id){
      if(document.getElementById(id)===target){
        result.uniqueId = prefix?tag+"#"+id:id;
        result.queryType = "byId";
      }
    }
    //location by name
    if(!result.uniqueId && name){
      const elements = document.getElementsByName(name);
      if(elements.length===1 && elements[0]===target){
        result.uniqueId = name;
        result.queryType = "byName";
      }
    }
    //location by class
    if(!result.uniqueId){
      if(className){
        const elements = document.querySelectorAll(tag+className);
        if(elements.length === 1 && elements[0]===target){
          result.uniqueId = tag+className;
          result.queryType = "byClass";
        }
      }
    }
    //location by mixed or order
    if(!result.uniqueId){
      let queryString = tag;
      if(id){
        queryString += "#"+id;
      }
      if(className){
        queryString += className;
      }
      if(name){
        queryString += "[name="+name+"]";
      }
      if(type){
        queryString += "[type="+type+"]";
      }
      if(document.querySelector(queryString)===target){
        result.uniqueId = queryString;
        result.queryType = "byMixed";
      }
    }
    //location by order
    if(!result.uniqueId){
      let queryString = tag;
      if(id){
        queryString += "#"+id;
      }
      if(className){
        queryString += className;
      }
      const elements = document.querySelectorAll(queryString);
      if(elements && elements.length>0){
        let index = null;
        for(let i=0; i<elements.length; i++){
          if(target===elements[i]){
            index = i+1;
            break;
          }
        }
        if(index){
          queryString = queryString + ":nth-child("+index+")";
          const queryTarget = document.querySelector(queryString);
          if(queryTarget===target){
            result.uniqueId = queryString;
            result.queryType = "byOrder";
          }
        }
      }
    }

    //location by parent
    if(!result.uniqueId){
      const parentQueryResult = Whats.getUniqueId(target.parentNode,true);
      let parentQueryString = parentQueryResult.uniqueId;
      if(!parentQueryString){
        return;
      }
      let targetQuery = tag;
      if(id){
        targetQuery += "#"+id;
      }
      else if(className){
        targetQuery += className;
      }


      let queryString = parentQueryString+">"+targetQuery;
      const queryElements = document.querySelectorAll(queryString);
      if(queryElements.length>1){
        queryString = null;
        let index = null;
        for(let i=0; i<target.parentNode.children.length; i++){
          if(target.parentNode.children[i]===target){
            index = i+1;
            break;
          }
        }
        if(index>=1){
          queryString = parentQueryString+">"+ targetQuery + ":nth-child("+index+")";
          const queryTarget = document.querySelector(queryString);
          if(queryTarget!=target){
            queryString = null;
          }
        }
      }
      result.uniqueId = queryString;
      result.queryType = "byParent";
    }
    return result;
  };
  Whats.getTarget = function (queryString) {
    return document.getElementById(queryString) || document.getElementsByName(queryString)[0] || document.querySelector(queryString)
  };
  return Whats;
})();

if (typeof window !== "undefined" && window !== null) {
  window.whatselement = whatselement;
}

if (typeof window === "undefined" || window === null) {
  this.whatselement = whatselement;
}
module.exports = whatselement;


