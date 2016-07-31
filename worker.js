
self.addEventListener("message",function(e){
  console.log(e.data);
  e.data["rahul"] = "second name";
  self.postMessage(e.data);
},false);
