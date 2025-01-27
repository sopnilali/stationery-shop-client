import { Col, Row } from "antd";
import { FaCalendarCheck, FaCommentDollar, FaGift, FaUmbrella } from "react-icons/fa";



const Services = () => {
  return (
    <div className="max-w-5xl bg-white mx-auto border hidden md:block p-7">
    <Row justify="center">
      <Col span={6} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
        <div className="flex items-center gap-4">
            <div><FaCalendarCheck className="text-4xl"/></div>
            <div>
                <h2 className="uppercase">Free Delivary</h2>
                <h2 className="capitalise">Condition Apply</h2>
            </div>
        </div>
      </Col>
      <Col span={6} xs={{ order: 2 }} sm={{ order: 1 }} md={{ order: 4 }} lg={{ order: 3 }}>
      <div className="flex items-center gap-4 border-r-2 mr-10">
            <div><FaGift className="text-4xl"/></div>
            <div>
                <h2 className="uppercase">Promotion Gift</h2>
                <h2 className="capitalise">Special Offers!</h2>
            </div>
        </div>
      </Col>
      <Col span={6} xs={{ order: 3 }} sm={{ order: 4 }} md={{ order: 2 }} lg={{ order: 1 }}>
      <div className="flex items-center gap-4 border-r-2 mr-10">
            <div><FaCommentDollar className="text-4xl"/></div>
            <div>
                <h2 className="uppercase">Money Back</h2>
                <h2 className="capitalise">Condition Apply</h2>
            </div>
        </div>
      </Col>
      <Col span={6} xs={{ order: 4 }} sm={{ order: 3 }} md={{ order: 1 }} lg={{ order: 2 }}>
      <div className="flex items-center gap-4 border-r-2 mr-5">
            <div><FaUmbrella className="text-4xl"/></div>
            <div>
                <h2 className="uppercase">SAFE SHOPPING</h2>
                <h2 className="capitalise">Safe Shopping Guarantee</h2>
            </div>
        </div>
      </Col>
    </Row>
    
    </div>

  );
};

export default Services;
