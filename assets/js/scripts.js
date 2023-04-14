const {createApp} = Vue; 


createApp ({
  data(){
    return{
      tasks: [
        {
          text: "fare i compiti",
          done: false
        },
        {
          text: "rinnovare l'assicurazione alla macchina",
          done: true
        },
        {
          text: 'fare i compiti',
          done: false
        },
        {
          text: 'fare i compiti',
          done: false
        },
      ]
    } 
  }
}).mount('#app')