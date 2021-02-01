fetch("../data/data.json").then(response=>{
return response.json()
    }).then(data=>{
    	displayData(data)
    })
    function displayData(info){

    	var bodyElement=document.
    	querySelector("body");
    	var row=document.createElement("section")

	row.classList.add("row","justify-content-center");
	bodyElement.append(row)
	info.mobiles.map(value=>{
		var column=document.createElement("article")
		column.classList.add("col-sm-10","col-sm-6","col-lg-3");
		row.append(column);
		//card=
		var card=document.createElement("div");
         card.classList.add("card")
         //card
         var cardBody=document.createElement("div");
         cardBody.classList.add("card-body")
         var imageElement=document.createElement("img");
         imageElement.src=value.image;

        
    

         cardBody.append(imageElement);
         imageElement.alt=value.name;
         var name=document.createElement("h3");
         name.textContent=value.name;
         name.classList.add("text-center","text-primary")
         cardBody.append(name)
         var op=document.createElement("p");
         op.classList.add("text-danger","text-center")
         op.innerHTML="<s>₹"+value.originalPrice+"/-</s>";
         cardBody.append(op);

         var price=document.createElement("p");
         price.classList.add("text-success","text-center")
         price.textContent="₹"+value.price+"/-";

         cardBody.append(price)
         //button
         var buttonParent=document.createElement("div")
         buttonParent.classList.add("d-grid","gap-2")
         cardBody.append(buttonParent)
         var button=document.createElement("button")
         button.classList.add("btn","btn-info");
         button.textContent="add to cart";
         buttonParent.append(button);
         card.append(cardBody);
         column.append(card);
	})
    }