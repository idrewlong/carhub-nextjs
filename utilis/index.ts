const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bd6e32f694msh39e88936663d834p11a224jsn67eb03b47d71',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

export async function fetchCars(){
      const headers ={
      
                  'X-RapidAPI-Key': 'bd6e32f694msh39e88936663d834p11a224jsn67eb03b47d71',
                  'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
            
      }
}

//1:19:34 https://www.youtube.com/watch?v=pUNSHPyVryU