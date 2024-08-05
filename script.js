// get data based on user selection - character level
async function getData()
 {
    try{
  //getting user selected value
    document.getElementById("list").innerHTML = ""; 
    let level = document.getElementsByName('inlineRadioOptions');
    let selected_level;
    for(let i = 0; i < level.length; i++)
        {
        if(level[i].checked)
            {
            selected_level = level[i].value;
        }
    }   

    //fetch data from api based on user selection    
    let data = await fetch(`https://digimon-api.vercel.app/api/digimon/level/${selected_level}`);
    let characterData = await data.json();
       
    //creating elements based on user selection
    for(let i=0;i < characterData.length; i++)
        {
    
            let name = characterData[i].name;
            let image = characterData[i].img;
            let level = characterData[i].level;    
           let div1 = document.createElement('div');
           div1.className ="col";                  
           let div2 = document.createElement('div');
           div2.className ="card h-100";       
           let img = document.createElement('img');
           img.className="card-img-top";
           img.setAttribute("src",`${image}`);       
           let div3 = document.createElement('div');
           div3.className ="card-body";              
           let htag = document.createElement('h5');
           htag.className="card-title";
           htag.innerText=`${name}`;       
           let ptag= document.createElement('p');
           ptag.className="card-text";
           ptag.innerText=`Level: ${level}`;       
       div3.append(htag,ptag);
       div2.append(img,div3);
       div1.append(div2);
       let content =document.getElementById("list")
       content.appendChild(div1);    
        }
    }
    //catch block for api
    catch (error) {
      document.getElementById("error").innerText=`Error :${error}`;
    }       
}

// clear all selection and data
function reset()
{
    document.getElementById("list").innerHTML = ""; 
    let ele = document.getElementsByName("inlineRadioOptions");
for(let i=0;i<ele.length;i++)
    ele[i].checked = false;
}

//loading all the characters
async function allCharacters()
{
    try{
    document.getElementById("list").innerHTML = ""; 

    let ele = document.getElementsByName("inlineRadioOptions");
    for(let i=0;i<ele.length;i++)
        ele[i].checked = false;
    let data = await fetch(`https://digimon-api.vercel.app/api/digimon`);
    let characterData = await data.json();
    for(let i=0;i < characterData.length; i++)
        {    
            let name = characterData[i].name;
            let image = characterData[i].img;
            let level = characterData[i].level;
    
           let div1 = document.createElement('div');
           div1.className ="col";                  
           let div2 = document.createElement('div');
           div2.className ="card h-100";       
           let img = document.createElement('img');
           img.className="card-img-top";
           img.setAttribute("src",`${image}`);       
           let div3 = document.createElement('div');
           div3.className ="card-body";              
           let htag = document.createElement('h5');
           htag.className="card-title";
           htag.innerText=`${name}`;       
           let ptag= document.createElement('p');
           ptag.className="card-text";
           ptag.innerText=`Level: ${level}`;      
       div3.append(htag,ptag);
       div2.append(img,div3);
       div1.append(div2);
       let content =document.getElementById("list")
       content.appendChild(div1);    
        }
        }
        //Catch block for api
        catch (error) {
           document.getElementById("error").innerText=`Error :${error}`;
        }
}
 
 