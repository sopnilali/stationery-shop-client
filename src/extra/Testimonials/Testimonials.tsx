import { Card } from "antd";

const Testimonials = () => {
    return (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 p-2">
            <Card bordered={false} style={{ width: "100%" }} >
                <div className="space-y-1">
                    <h2 >Suraya Khatun</h2>
                    <hr />
                    <p className="text-gray-500">{"Absolutely love my new stationery! The quality is fantastic and the design is exactly what I was looking for. Shipping was also super fast. Will definitely be ordering again!"}</p>
                    <h2 className="font-semibold ">Continue Reading</h2>
                </div>
            </Card>
            <Card bordered={false} style={{ width: "100%" }} >
                <div className="space-y-1">
                    <h2>Joynal Abedin</h2>
                    <hr/>
                    <p className="text-gray-500">{"I'm so impressed with the level of customer service I received. "}</p>
                    <h2 className="font-semibold ">Continue Reading</h2>
                </div>
            </Card>
            <Card bordered={false} style={{ width: "100%" }} >
                <div className="space-y-1">
                    <h2 >Anika Tabassum</h2>
                    <hr />
                    <p className="text-gray-500">{"I ordered personalized stationery for my business and it arrived quickly and looks amazing. The quality is top-notch and it gives a very professional impression. Highly recommend"}</p>
                    <h2 className="font-semibold ">Continue Reading</h2>
                </div>
            </Card>
            <Card bordered={false} style={{ width: "100%" }} >
                <div className="space-y-1">
                    <h2 >Sobuj Ahmed</h2>
                    <hr />
                    <p className="text-gray-500">{"I was hesitant to order stationery online, but I'm so glad I did. The selection is great and the ordering process was easy. I'm very happy with my purchase!"}</p>
                    <h2 className="font-semibold ">Continue Reading</h2>
                </div>
            </Card>

        </div>
    );
};

export default Testimonials;
