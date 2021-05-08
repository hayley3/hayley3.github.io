$(function() { 
    const $root = $("#root"); 

    $root.append(`<div class="columns is-vcentered" style="background-color: #FCE710;" id= "aboutShop">
    <div class="column">
        <div class = "frontPhoto">
            <img src = "images/butterfly.JPG" alt = "customShoe"> 
        </div> 
    </div>
    <div class="column">
        <div class = "container is-widescreen"> 
            <div class = "title"> 100% Customizable </div>
            <div class="subtitle"> Anything is possible! </div>
            <p style ="word-wrap: break-word;"> Our most common shoe options are Nike Air Force 1s, Adidas Stan Smiths, and Converse. </p>
               <p> If you have another pair you can send them to us with a prepaid postage then we will 
                clean and design them! 
            </p> <br> <br> 
            <button class="button is-light" id = "quickShop"> quick shop! </button>
        </div>
    </div>
 </div>

 <div id = "holderQS"> </div> `); 

    const $cart = $("#cart"); 
    $cart.append(`
    <button class="button" style = "padding: 20px" id ="checkout"> 
      checkout! 
    </button>
    `); 

    const $sr = $("#socialRoot"); 

    const $colorGener = $("#colorGen"); 
    const $dogGen = $("#dogGen"); 
    const $plantGen = $("#plantGen"); 

    $(document).on('click', '#quickShop', quickShopForm); 
    $(document).on('click', '#cancelQS', cancelQS); 
    $(document).on('click', '#colGen', colorGenerator); 
    $(document).on('click', '#dogG', dogGenerator);
    $(document).on('click', '#poemG', plantGenerator);
    $(document).on('click', '#addToCart', addToCart);
    $(document).on('click', '#heroG', heroGenerator); 
    $(document).on('click', '#disneyG', disneyGenerator); 
    $(document).on('click', '#checkout', checkout); 


}); 

async function quickShopForm() {
    let form = ( ` 
    <form autocomplete="off">
  <div class="autocomplete"> 

<div class="field" id="QSForm">
<label class="label"> Type of Shoe </label>
<div class="control">
  <input class="input" type="text" placeholder="shoe type" id= "shoeType">
</div>
<div class="field">
  </div>
</form>

<label class="label"> Shoe Size </label>
<div class="control">
<div class="select">
  <select id = "shoeSize">
    <option>Select Size</option>
    <option> 5 </option>
    <option> 5.5 </option>
    <option> 6 </option>
    <option> 6.5 </option>
    <option> 7 </option>
    <option> 7.5 </option>
    <option> 8 </option>
    <option> 8.5 </option>
    <option> 9 </option>
    <option> 9.5 </option>
    <option> 10 </option>
  </select>
</div>

<label class="label"> What design do you want? </label>
<div class="control">
    <textarea class="textarea" placeholder="Ideas here!" id= "designText" ></textarea>
</div>
</div> 
    <div class="field is-grouped" style = "padding: 10px;" >
        <div class="control">
            <button class="button" id= "addToCart"> <i class="fas fa-shopping-cart" style = "padding: 5px;"> </i> Add to cart </button>
        </div>
        <div class="control">
            <button class="button" id = "cancelQS" > <i class="fas fa-times" style = "padding: 5px;"></i>
             Cancel</button>
        </div>
        <div class="control">
            <button class="button" id = "seeMoreShoes"> <a href="moreShop.html">  <i class="fas fa-plus" style = "padding: 5px;"></i>
            See More Options </a> </button>
        </div>
    </div> <br>
  
    <script src = "autocomplete.js"></script>
    `)

  $("#holderQS").replaceWith(form); 
} 

async function cancelQS() { 
    $("#QSForm").replaceWith(`<div id = "holderQS"> </div> `); 
}

async function colorGenerator () { 

  let api_key = '89525be7-5e61-4973-b7ba-e6d411124d48'; 

  const result = await axios ({ 
    headers: { 
      'x-api-key': '89525be7-5e61-4973-b7ba-e6d411124d48', 
    }, 
    params: { 
      limit: 1,
      size: "full", 
    }, 
    url: 'https://api.thecatapi.com/v1/images/search',
    method: 'GET', 
  })


  let imgUrl = result.data[0].url; 

  $("#boxHold").replaceWith(`<div id = "boxHold"> 
  <img src = "${imgUrl}"> </div>  `)
}

async function dogGenerator () { 

  const result = await axios ({ 
    url: 'https://dog.ceo/api/breeds/image/random',
    method: 'get', 
  }) 

  let imgUrl = result.data['message']; 

  $("#dogimg").replaceWith(`<div id = "dogimg" > <img src = "${imgUrl}" alt="random dog!"> </div>`); 
}

async function plantGenerator () { 


  const result = await axios ({ 
    url: 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/creativity?key=83402e07-dca2-4536-bf7e-f517b7c8d7c6', 
    method: 'get',  
  });  

  let quoteDiv = result.data[0].meta['id']; 

  $("#poemText").replaceWith(`<div id = "poemText" > 
  <br> ${quoteDiv}  <br> definition: ${result.data[0].shortdef[0]} </div>`);

}

async function heroGenerator() { 

  const result = await axios ({ 
    url: 'https://api.icndb.com/jokes/random', 
    method: 'get', 
  }); 

  $("#heroImg").replaceWith(`<div id = "heroImg" > <h4> ${result.data.value['joke']} </h4>  </div>`); 
}

async function disneyGenerator() { 
  let id = Math.floor(Math.random() * 7438) + 1;   

  const result = await axios ({ 
    url: 'https://api.disneyapi.dev/characters/' + id, 
    method: 'get', 
  })
  
  let name = result.data['name']; 
  let imgUrl = result.data['imageUrl']; 


  $("#disneyImg").replaceWith(`<div id = "disneyImg" > <a href=${imgUrl} target="_blank"><h4> ${name} </h4></a> <br> click to see an image!
  </div>`); 
}

async function addToCart() { 

  const $cart = $("#cart"); 

  let shoeType = document.getElementById("shoeType").value; 
  document.getElementById("shoeType").value = ''; 

  let shoeSize = document.getElementById("shoeSize").value; 
  document.getElementById("shoeSize").value = '';

  let design = document.getElementById("designText").value; 
  document.getElementById("designText").value = '';

  $cart.prepend(`
      <a class="navbar-item">
      <div class= "section" style = "border-style: solid">
        SHOE:  <br> 
        Type: ${shoeType} <br> 
        Size: ${shoeSize} <br> 
        Idea: ${design} 
      </div> 
      </a>`
  ); 
}

async function checkout() { 

  const $cart = $("#cart"); 
  $cart.replaceWith(`<div class="navbar-dropdown is-right" id = "cart">
  </div>`); 

  window.alert(`
  Thank you for shopping with Ken's Kicks!
  Your order has been sent and Ken will reach out shortly 
  with more details! 
  `)
}

