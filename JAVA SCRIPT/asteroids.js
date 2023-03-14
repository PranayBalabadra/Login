var images = document.getElementsByClassName("a")
for(i=1;i<=images.length;i++)
{
   images[i-1].setAttribute("src","../Asste/image/asteroids/"+i+".jpg")
   images[i-1].style.width="220px"
   images[i-1].style.height="220px"
}
console.log(images)
//this is for header
var imgarr=["1.jpg","2.jpg","3.jpg"]
var indval=0;
function inc()
{
    indval++;
    if(indval >= imgarr.length)
    {
        indval = 0;
    document.getElementById("header").style.backgroundImage="url(../Asste/image/asteroids/"+imgarr[indval]+")"
    }
    else
    {
    document.getElementById("header").style.backgroundImage="url(../Asste/image/asteroids/"+imgarr[indval]+")"
    }
}
function dec()
{
    indval--;
    if(indval < 0)
    {
        indval = imgarr.length;
    document.getElementById("header").style.backgroundImage="url(../Asste/image/asteroids/"+imgarr[indval]+")"
    }
    else
    {
    document.getElementById("header").style.backgroundImage="url(../Asste/image/asteroids/"+imgarr[indval]+")"
    }
}
function openImg(pic,name,info)
{
    document.getElementById("subWindow").removeAttribute("style")
    document.getElementById("subWindowImg").src='../Asste/image/asteroids/'+pic+'.jpg'
    document.getElementById("imageHeading").innerHTML=name;
    document.getElementById("imgpara").innerHTML=info;
}
function closeImg()
{
    document.getElementById("subWindow").setAttribute("style","display:none")
}