import PriceOption from "../PriceOption/PriceOption";

 
const PriceOptions = () => {

    
       const priceOptions= [
          {
            "id": 1,
            "name": "Basic",
            "price": "$29.99/month",
            "features": [
              "Access to cardio equipment",
              "Access to weightlifting area",
              "Limited group classes",
              "Locker access"
            ]
          },
          {
            "id": 2,
            "name": "Standard",
            "price": "$49.99/month",
            "features": [
              "Access to cardio equipment",
              "Access to weightlifting area",
              "Unlimited group classes",
              "Sauna access",
              "Locker access",
              "Free WiFi"
            ]
          },
          {
            "id": 3,
            "name": "Premium",
            "price": "$79.99/month",
            "features": [
              "Access to cardio equipment",
              "Access to weightlifting area",
              "Unlimited group classes",
              "Sauna access",
              "Access to personal trainer",
              "Towel service",
              "Locker access",
              "Free WiFi",
              "Nutritional counseling"
            ]
          }
        ]
      
      
    return (
        <div>
            <h2 className="text-2xl">Best Price Option In The Town</h2>
            {
               priceOptions.map(option => <PriceOption key={option.id} option={option}> </PriceOption>)
            }
            
        </div>
    );
};

export default PriceOptions;