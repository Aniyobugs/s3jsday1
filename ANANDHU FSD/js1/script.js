var head = document.getElementById("head1");
console.log(head);
head.style.color = "RED";
head.textContent = "404 Error";
head.innerHTML = "<h6>H1 tag changed</h6>"
var list=document.getElementsByClassName("list");
console.log(list);
for (let i=0;i<list.length;i++)
{
    list[i].style.backgroundColor="pink";
}
var t=document.getElementsByTagName("li")
t[0].style.color="red";
let val=document.querySelector("input")
val.value="Name"
var save=document.querySelector("button")
save.style.backgroundColor="pink";