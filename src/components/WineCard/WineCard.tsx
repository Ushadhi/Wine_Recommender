import React from 'react';

interface WineCardProps {
  item: {
    Name: string;
    Price: string;
    Wine_style: string;
    Rating: string;
    Country: string;
    Year: string;
    Alcohol_content: string;
    Acidic: string;
    Sweet: string;
    Bold: string;
    Tannin: string;
    Food_pairing: string;
  };
}


interface Props {
   item: any,
   field: String,
  }
  
  const FieldComponent: React.FC<Props> = ({ item, field }) => {
    return (
      <div className="double-p flex flex-row justify-center">
        <p className="text-lg font-normal text-gray-600"> {field}-</p>&nbsp;
        <p className="text-lg">{`${item.field}`}</p>
      </div>
    );
  };


const WineCard: React.FC<WineCardProps> = ({ item }) => {

    function roundToTwoDecimals(num: number): number {
        return Math.round(num * 100) / 100;
      }
      
      let alcoholContent: string = item.Alcohol_content;
      let parsedAlcoholContent: number = parseFloat(alcoholContent);
      let roundedAlcoholContent: number = roundToTwoDecimals(parsedAlcoholContent);

      let tannin: string = item.Tannin;
      let parsedTanninValue: number = parseFloat(tannin);
      let roundedTanninValue: number = roundToTwoDecimals(parsedTanninValue);

      let acidic: string = item.Acidic;
      let parsedAcidicValue: number = parseFloat(acidic);
      let roundedAcidicValue: number = roundToTwoDecimals(parsedAcidicValue);

      let foodPairing: string = item.Food_pairing;


      

  return (
    <div className=" flex-col bg-white p-6 rounded-lg shadow-lg overflow-hidden" key={item.Name}>
        
                <h2 className="text-3xl pb-2 text-violet-900 font-light	 text-gray-900 text-center">{item.Name}</h2>
                <div className="double-p flex flex-row justify-center" >
                        <p className="text-lg font-normal text-gray-600"> Price-</p>&nbsp; <p className="text-lg font-semibold	 text-gray-600">{item.Price}$</p>
                      </div>
                      <div className="double-p flex flex-row justify-center" >
                        <p className="text-lg font-normal text-gray-600"> Wine Style-</p>&nbsp; <p className="text-lg font-semibold	 text-gray-600">{item["Wine_style"]}</p>
                      </div>
                      <div className="double-p flex flex-row justify-center" >
                        <p className="text-lg font-normal text-gray-600"> Rating-</p>&nbsp; <p className="text-lg font-semibold text-gray-600">{item.Rating}</p>
                      </div>
                      <div className="double-p flex flex-row justify-center" >
                        <p className="text-lg font-normal text-gray-600">Country-</p>&nbsp; <p className="text-lg font-semibold text-gray-600">{item.Country}</p>
                      </div>
                      <div className="double-p flex flex-row justify-center" >
                        <p className="text-lg font-normal text-gray-600">Year-</p>&nbsp; <p className="text-lg font-semibold text-gray-600">{item.Year}</p>
                      </div>
                      <div className="double-p flex flex-row justify-center" >
                        <p className="text-lg font-normal text-gray-600">Alcholol Content-</p>&nbsp; <p className="text-lg font-semibold text-gray-600">{roundedAlcoholContent}%</p>
                      </div>
                      <div className="double-p flex flex-row justify-center" >
                        <p className="text-lg font-normal text-gray-600">Acidic-</p>&nbsp; <p className="text-lg font-semibold text-gray-600">{roundedAcidicValue}%</p>
                      </div>
                      <div className="double-p flex flex-row justify-center" >
                        <p className="text-lg font-normal text-gray-600">Sweet-</p>&nbsp; <p className="text-lg font-semibold text-gray-600">{item.Sweet}%</p>
                      </div>
                      <div className="double-p flex flex-row justify-center" >
                        <p className="text-lg font-normal text-gray-600">Bold-</p>&nbsp; <p className="text-lg font-semibold text-gray-600">{item.Bold}%</p>
                      </div>
                      <div className="double-p flex flex-row justify-center" >
                        <p className="text-lg font-normal text-gray-600">Tannin-</p>&nbsp; <p className="text-lg font-semibold text-gray-600">{roundedTanninValue}%</p>
                      </div>
                      {foodPairing && ( <div className="double-p text-center flex flex-row justify-center" >
                        <p className="text-lg text-center font-normal text-gray-600">Food Pairings-</p>&nbsp; <p className="text-lg font-semibold text-center text-gray-600">{item.Food_pairing}</p>
                      </div>)}
                     
                      
                {/* {Object.keys(item).map((key: any, keyId: number) => {
                  if (item[key]) {
                    return (
                      <div className="double-p" key={keyId}>
                        <p className="float-left  card-text">{key} - </p>&nbsp; <p className="float-right card-text">{item[key]}</p>
                      </div>
                    );
                  }
                })} */}
              </div>)}

export default WineCard