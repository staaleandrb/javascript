document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = "https://speedskatingresults.com/api/json/world_records.php";
    const params = new URLSearchParams({
        gender: 'f', // Begrens til kvinner
        distance: '500' // Spesifiser avstanden til 500 meter
    });

    // Kombiner API-URL med parameterne
    const apiUrlWithParams = `${apiUrl}?${params.toString()}`;
    
    fetch(apiUrlWithParams)
        response => response.json()
        console.log(response);