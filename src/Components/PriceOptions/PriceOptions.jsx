import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {


  const priceOptions = [
    {
      "id": 1,
      "name": "Basic Membership",
      "price": "$29.99/mon",
      "features": [
        "Access to cardio equipment",
        "Access to weightlifting area",
        "Limited group classes",
        "Locker access"
      ]
    },
    {
      "id": 2,
      "name": "Standard Membership",
      "price": "$49.99/mon",
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
      "name": "Premium Membership",
      "price": "$79.99/mon",
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
    <div className="m-12">
      <h2 className="text-2xl">Best Price Option In The Town</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {
          priceOptions.map(option => <PriceOption key={option.id} option={option}> </PriceOption>)
        }
      </div>

    </div>
  );
};

export default PriceOptions;