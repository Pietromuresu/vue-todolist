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
          done: false
        },
        {
          text: 'fare i compiti',
          done: false
        },
        {
          text: 'fare i compiti',
          done: false
        },
      ],
      message: ''
    } 
  },
  methods: {
    removeTask(task, index){
      if(task.done){
        this.tasks.splice(index, 1)
      }else {
        this.errorMessage('Non hai completato il task')
      }
      
    },

    errorMessage(msg){
      this.message = msg
      setTimeout(() => {
       this.message= ''
      }, 2000)
    }
  }
}).mount('#app')