
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Jasmin!',
    image: 'https://previews.123rf.com/images/balkonsky/balkonsky1706/balkonsky170600016/81033953-a-happy-pug-puppy-dog-in-the-colors-of-peonies-pug-at-a-party-at-a-picnic.jpg',
	color: 'purple', 
	gallery:[
		'https://picsum.photos/id/1/200/300',
		'https://picsum.photos/id/2/200/300',
		'https://picsum.photos/id/3/200/300',
		'https://picsum.photos/id/4/200/300',
		'https://picsum.photos/id/5/200/300',
		'https://picsum.photos/id/6/200/300', 
		'https://picsum.photos/id/7/200/300',
	], 
	first: "Jasmin",
	last:  "Surpris",
  },
  computed:{
  	fullName: function() {
  		if( this.first && this.last ){
  			return this.first + ' ' + this.last
  		} else if (!this.first && this.last ){
  			return "Mrs or Ms " + this.last
  		} else if (this.first && !this.last){
  			return this.first
  		} else {
  			return "......you there"
  		}
  		
  	},
  },
  watch:{

  },
  methods:{
  	changeMessage: function(filename) {
  		console.log("clicked this img" + filename)

  		this.message = " Jasmin has clicked an image on the screen" + filename 
  		this.image = filename //thi.image points to the "image" located within the data. Filename changes the images to reflect the gallery 
  	},
  },
})