"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { type SelectProperty } from "~/server/db/schema";
import { api } from "~/trpc/react";

export function AllProperties() {
  const [allProperties] = api.property.getAll.useSuspenseQuery();

  return (
    <>
      {allProperties.map((property) => {
        return (
          <div key={property.id} className="m-2 p-2">
            <PropertCard property={property} />
          </div>
        );
      })}
    </>
  );
}

function PropertCard({ property }: { property: SelectProperty }) {
  const price = property.price ? property.price / 100000 : 0;
  const images = property.images
    ? property.images.split(", ").map((im) => im + "/620/466/fitted.jpg")
    : [];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{property.title}</CardTitle>
        <CardDescription>{property.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              {property.address}
              <p className="text-red-600">{price} Laks</p>
              <div className="flex flex-wrap">
                {images.map((img, i) => (
                  <Image key={i} src={img} alt={img} width={150} height={100} />
                ))}
              </div>
            </div>
            <div className="flex flex-col space-y-1.5 text-pink-400">
              <p>bedrooms: {property.bedrooms}</p>
              <p>bathrooms: {property.bathrooms}</p>
              <p>landSize: {property.landSize}</p>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between text-blue-600 hover:underline">
        {property.url && <a href={property.url}>{property.url}</a>}
      </CardFooter>
    </Card>
  );
}
