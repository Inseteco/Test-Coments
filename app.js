new Vue ({
  el: '#app',

  data (){
    return {
      newComent: [],
      coments: []   
    }
  },

  methods: {
    addText() {
     if (this.newComent != '') {
        this.coments.push(this.newComent);
        this.newComent = ''
     }
    },
    
    deleteCom(id) {
      this.coments.splice(id, 1);
    }
  }  
})

