import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="w-full bg-blue-800 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Wooden Boat Building</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-8">
          <h2 className="text-3xl font-semibold mb-4">Wooden Boat Construction</h2>
          <p className="text-lg text-gray-700 mb-8">
            Take a look at the process of constructing a wooden boat from start to finish.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Initial Stages</CardTitle>
              </CardHeader>
              <CardContent>
                <img src="/images/boat-construction-1.jpg" alt="Initial stages of wooden boat construction" className="w-full h-auto mb-4" />
                <p>Wooden planks being assembled on a frame.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Craftsmanship</CardTitle>
              </CardHeader>
              <CardContent>
                <img src="/images/boat-construction-2.jpg" alt="Craftsmen working on the hull" className="w-full h-auto mb-4" />
                <p>Craftsmen working on the hull of the boat.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Finishing Touches</CardTitle>
              </CardHeader>
              <CardContent>
                <img src="/images/boat-construction-3.jpg" alt="Final stages of construction" className="w-full h-auto mb-4" />
                <p>The boat nearly complete and ready for finishing touches.</p>
              </CardContent>
            </Card>
          </div>
        </section>
        <Separator className="my-8" />
        <section className="text-center mb-8">
          <h2 className="text-3xl font-semibold mb-4">Crafting Masterpieces on Water</h2>
          <p className="text-lg text-gray-700">
            Discover the art and craft of building wooden boats. Join our community of enthusiasts and professionals.
          </p>
        </section>
        <Separator className="my-8" />
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Join Our Workshops</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Learn the skills needed to build your own wooden boat in our hands-on workshops.</p>
              <Button className="mt-4">Learn More</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Explore Our Gallery</CardTitle>
            </CardHeader>
            <CardContent>
              <p>See the beautiful boats crafted by our community members.</p>
              <Button className="mt-4">View Gallery</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Get Involved</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Join our community and start your journey in wooden boat building.</p>
              <Button className="mt-4">Sign Up</Button>
            </CardContent>
          </Card>
        </section>
        <Separator className="my-8" />
        <section className="text-center mb-8">
          <h2 className="text-3xl font-semibold mb-4">Wooden Boat Construction</h2>
          <p className="text-lg text-gray-700 mb-8">
            Take a look at the process of constructing a wooden boat from start to finish.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Initial Stages</CardTitle>
              </CardHeader>
              <CardContent>
                <img src="/images/boat-construction-1.jpg" alt="Initial stages of wooden boat construction" className="w-full h-auto mb-4" />
                <p>Wooden planks being assembled on a frame.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Craftsmanship</CardTitle>
              </CardHeader>
              <CardContent>
                <img src="/images/boat-construction-2.jpg" alt="Craftsmen working on the hull" className="w-full h-auto mb-4" />
                <p>Craftsmen working on the hull of the boat.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Finishing Touches</CardTitle>
              </CardHeader>
              <CardContent>
                <img src="/images/boat-construction-3.jpg" alt="Final stages of construction" className="w-full h-auto mb-4" />
                <p>The boat nearly complete and ready for finishing touches.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="w-full bg-blue-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Wooden Boat Building. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;