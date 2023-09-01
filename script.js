//your JS code here. If required.
let promArr = [];
for(let i=1; i<=3; i++){

	let randomTime = Math.floor(Math.random()*3)+1;

	let prom = new Promise((resolve, reject)=>{
	          setTimeout(()=>{
				  resolve(randomTime);
			  },randomTime*1000);
          });
	promArr.push(prom);
	
}

let result = Promise.all(promArr);

  result.then((dataArr)=>{
	     document.getElementById("initial").remove();
          let count = 1; let maxTime = 0;
	  
	     dataArr.forEach((data)=>{
			 
			 if(data > maxTime){maxTime = data}
			 
			 const tr1 =  document.createElement("tr");
		     const td1 = document.createElement("td");
	           td1.innerText = `Promise ${count++}`;
	         const td2 = document.createElement("td");
	           td2.innerText = data;
		       tr1.append(td1,td2);
	         document.getElementById("output").append(tr1);
		 });


	       const tr1 =  document.createElement("tr");
		     const td1 = document.createElement("td");
	           td1.innerText = `Total`;
	         const td2 = document.createElement("td");
	           td2.innerText = maxTime;
		       tr1.append(td1,td2);
	         document.getElementById("output").append(tr1);
	    
	
 });
