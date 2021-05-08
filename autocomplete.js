function autocomplete(input, shoeTypes) {

    input.addEventListener("input", function() {

        if (!this.value) { 
          return;
        }

        let list = this.value;
        let matches = this.value;
        let inputText = this.value;
        close(); 

        list = document.createElement("div");
        list.setAttribute("class", "items");
        this.parentNode.append(list);
  
        for (let i = 0; i < shoeTypes.length; i++) {
          if (shoeTypes[i].substr(0, inputText.length).toUpperCase() === inputText.toUpperCase()) {
  
            matches = document.createElement("div");
            matches.innerHTML = shoeTypes[i].substr(0, inputText.length) + shoeTypes[i].substr(inputText.length) + "<input type='hidden' value='" + shoeTypes[i] + "'>";

            matches.addEventListener("click", function() {
                input.value = this.getElementsByTagName("input")[0].value;
                close();
            });

            list.append(matches);
          }
        }
    });

   function close() {
      let autoList = document.querySelectorAll(".items");
      for (let i = 0; i < autoList.length; i++) {
        if (autoList[i] != input) {
          let parent = autoList[i].parentNode; 
          if (parent) {
            parent.removeChild(autoList[i]);
          } 
        }
      }
    } 
  }

  let shoeTypes = ["Nike Air Force 1's", "Vans High Tops", "Converse Low Tops", "Adidas Stan Smiths", "Supergas", "Vans slip ons", "Converse High Tops", "Fila Disruptor Sneakers"];
  
  autocomplete(document.getElementById("shoeType"), shoeTypes);