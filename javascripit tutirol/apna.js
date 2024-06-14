/*a=10;
console.log(a); 
var ballpen={
    name:"pentonic",
    price:100,
    offer:5,
};
console.log(ballpen);
let profile={
    image:addEventListener,
    name:"fdf",
    posts:1,
    followers:195,
    follow:4,
    gmail:"adarsh123@gmail.com",

};
console.log(profile);
console.log(typeof profile["followers"]);
let age=15;
let re=a<15?"adult":"not adult";
console.log(re);*/
// let a=prompt("enter a number");
/*if(a>=90 && a<=100)console.log("A");
else if(a>=70 &&a<=89)console.log("B");
else if(a>=60 && a<=69)console.log("C");
else if(a>=50 && a<=59)console.log("D");
else console.log("F");*/

// let str=prompt("enter the string");
// console.log("@",str,str.length
// );
/*let marks=[4,4,5,6,7,7];
let sum=0;
for(let val of marks){
    sum+=val;

}
let avg=sum/marks.length;
console.log(`avg marks of the class=${avg}`);*/

/*let items=[250,645,300,900,50];
for(let i=0;i<items.length;i++){
    let offer=items[i]/10;
    items[i]-=offer;
}
console.log(items);*/
/*let fooditems=["potato","apple","litchi","tomato"];
fooditems.push("chips","burger","paneer");
console.log(fooditems);
fooditems.pop();
console.log(fooditems);*/

/*let marvalhero=["thor","ironman","spiderman"]
let dcheroes=["superman","batman"];
let supe=marvalhero.concat(dcheroes);
console.log(supe);*/
/*function countvowels(str){
    let count=0;
    for(const char of str){
        
    
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
           count++;

        }
        
    }
    console.log(count);
    

}*/
/*let nums=[2,3,4,5,6,7];
nums.forEach((num)=>{
    console.log(num*num);
});*/
let n=prompt("enter the number");
let arr=[];
for(let i=1;i<n;i++){
    arr[i-1]=i;
}
/*console.log(arr);
let sum=arr.reduce((res,curr)=>{
    return res+curr;

})
console.log("sum=",sum);*/
let res=arr.reduce((res,curr)=>{
    return res*curr;
})
console.log(res);















