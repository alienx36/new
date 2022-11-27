var slideIndex=0;
showfunction(); 
 function showfunction()
{
    var slides=document.getElementsByClassName("myslides");
    var i;
for(i=0;i<slides.length;i++)
{
    slides[i].style.display="none";

}
slideIndex++;
if(slideIndex>slides.length)
{
slideIndex=1;

}
slides[slideIndex-1].style.display="block";
setTimeout(showFunction,2500);

}