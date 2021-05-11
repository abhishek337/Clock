setInterval(setClock,1000)

const hours = document.querySelector('[clock-hour]')
const minutes = document.querySelector('[clock-minutes]')
const seconds = document.querySelector('[clock-seconds]')


function setClock() {
	
	const getDate = new Date()
	const getSeconds = getDate.getSeconds() / 60
	const getMinutes = (getSeconds + getDate.getMinutes()) /60
	const getHours = (getMinutes + getDate.getHours()) / 12
	setRotation(seconds,getSeconds)
  	setRotation(minutes,getMinutes)
  	setRotation(hours,getHours)
	
}


function setRotation(element , rotationRatio){
	  element.style.setProperty('--rotation', rotationRatio * 360)
	
}

setClock()