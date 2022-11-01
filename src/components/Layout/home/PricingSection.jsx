import React from 'react';
import { Button, Col, Row } from 'antd';

function PricingSection() {
  return (
    <section className="container pricing-section">
      <h2 className="pricing-heading">Pricing</h2>
      <div className="pricing-cards">
        <Row className="pricing-cards-row">
          <Col span={7} xs={24} lg={7} className="cards-col">
            <div className="card card-1">
              <div className="card-content">
                <h4>Basic</h4>
                <h6>Personal Use</h6>
                <strong>Free</strong>
                <p>Lorem ipsum dolor sit, amet consectetur</p>
                <Button shape="round" size="large" className="card-btn">
                  Order Now
                </Button>
              </div>
            </div>
          </Col>
          <Col span={7} xs={24} lg={7} className="cards-col">
            <div className="card card-1">
              <div className="card-content">
                <h4>Pro</h4>
                <h6>Multiple People</h6>
                <span className="pricing-span">$</span>
                <strong>19.95</strong>
                <span className="pricing-span">/month</span>
                <p>Lorem ipsum dolor sit, amet consectetur</p>
                <Button shape="round" size="large" className="card-btn">
                  Order Now
                </Button>
              </div>
            </div>
          </Col>
          <Col span={7} xs={24} lg={7} className="cards-col">
            <div className="card card-1">
              <div className="card-content">
                <h4>Enterprise</h4>
                <h6>Custom</h6>
                <span className="pricing-span">$</span>
                <strong>__.__</strong>
                <p>Lorem ipsum dolor sit, amet consectetur</p>
                <Button shape="round" size="large" className="card-btn">
                  Contact Now
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default PricingSection;