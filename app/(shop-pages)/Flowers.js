import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Flowers() {
  const [productItems, setProductItems] = useState([]);
  const [potencyMap, setPotencyMap] = useState({});
  const [weightMap, setWeightMap] = useState({});
  const [priceMap, setPriceMap] = useState({});

  useEffect(() => {
    fetch("/api/getProducts?category=Flower")
      .then((response) => response.json())
      .then((data) => {
        setProductItems(data.product);

        // Extract all unique potencies and weights
        const uniquePotencies = [
          ...new Set(data.product.map((p) => p.Potency)),
        ];
        const uniqueWeights = [
          ...new Set(data.product.map((p) => p.Weight))
        ];
        const uniquePricePairs = data.product.map((p) => ({
          productID: p.ProductID,
          weightID: p.Weight,
        }));
            console.log("uniquePricePairs: ", uniquePricePairs);
        // Fetch and map potencies
        Promise.all(
          uniquePotencies.map((potency) =>
            fetch(`/api/getPotency?potency=${potency}`)
          )
        )
          .then((responses) => Promise.all(responses.map((res) => res.json())))
          .then((data) => {
            const newMap = {};
            data.forEach((d) => {
              newMap[d.potency.PotencyID] = d.potency.Value;
            });
            setPotencyMap(newMap);
          });

        // Fetch and map weights
        Promise.all(
          uniqueWeights.map((weight) =>
            fetch(`/api/getWeight?weight=${weight}`)
          )
        )
          .then((responses) => Promise.all(responses.map((res) => res.json())))
          .then((data) => {
            const newMap = {};
            data.forEach((d) => {
              newMap[d.weight.WeightID] = d.weight.Value;
            });
            setWeightMap(newMap);
          });

        // Fetch and map prices
        Promise.all(
          uniquePricePairs.map((pair) =>
            fetch(`/api/getPrices?productID=${pair.productID}&weightID=${pair.weightID}`)
          )
        )
          .then((responses) => Promise.all(responses.map((res) => res.json())))
          .then((data) => {
            const newMap = {};
            data.forEach((d) => {
              // Assuming PriceID is a combination of ProductID and WeightID
              newMap[`${d.price.ProductID}-${d.price.WeightID}`] = d.price.Price;
            });
            setPriceMap(newMap);
            console.log("new map:", newMap);
          });
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex flex-wrap -mx-3 mb-20 md:mb-40 border justify-center space-x-4">
        {productItems.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-3 mb-24"
          >
            <div className="xl:flex xl:items-center xl:py-32 mb-8 bg-white rounded-3xl">
              <Image
                src="/Flower.jpeg"
                width={100}
                height={100}
                alt={item.Name}
              />
            </div>
            <a href="#">
              <p className="mb-4 text-xl leading-8 font-heading font-medium hover:underline">
                {item.Name}
              </p>
            </a>
            <p>Rating: {item.Rating}</p>
            <div className="flex flex-row">
              <p>Strain: {item.Strain}</p>
              <p>Potency: {potencyMap[item.Potency] || "Loading..."}</p>
            </div>
            <div className="flex flex-row">
              <p>THC: {item.THC_Levels}</p>
              <p>CBD: {item.CBD_Levels}</p>
            </div>
            <div className="flex flex-row">
              <p>WEIGHT: </p>
              {weightMap[item.Weight]
                ? weightMap[item.Weight].split(", ").map((weightOption, i) => (
                    <label key={i} className="ml-2">
                      <input
                        type="radio"
                        name={`weight-${index}`}
                        value={weightOption}
                      />
                      {weightOption}
                    </label>
                  ))
                : "Loading..."}
            </div>
            <p className="text-xl text-blue-500 font-heading font-medium tracking-tighter">
              Price: {priceMap[`${item.ProductID}-${item.Weight}`] || "Loading..."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
