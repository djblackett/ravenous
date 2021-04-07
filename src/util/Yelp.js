const apiKey = 'CnKpDP8Rh3FNR6vq6oFzVcDtR-58uBy8pbF6S68Vl7YC-2EBYlf0Y2hRtodblevJRo5ZYjn5vSEbbXQCRjg5kCHhj075JIkzs6RaBJiXEyDo76oLBiTSFlCtHppsYHYx';

const Yelp = {
async search(term, location, sortBy) {
    //const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
    const url = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
    try {
     const response = await fetch(url, {
         headers: {
             Authorization: `Bearer ${apiKey}`
         }
     });

     if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        if (jsonResponse.businesses) {
             return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count,
                    website: business.url

                }));
        }
    }
} catch (error) {
    console.log(error);
}
} 
}

export default Yelp;