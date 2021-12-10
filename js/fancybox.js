Fancybox.bind("#gallery img", {
    groupAll : true, // Group all items
    on : {
      ready : (fancybox) => {
        console.log(`fancybox #${fancybox.id} is ready!`);
      }
    }
});