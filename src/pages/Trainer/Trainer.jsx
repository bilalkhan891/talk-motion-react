import React from "react";
import { Row, Col, Card } from "antd";
import { ModelsDropdown } from "../../components/ui/ModelsDropdown";
import { TrainerControl } from "../../components/ui/TrainerControl";
import { GestureToVoice } from "../../components/ui/GestureToVoice";

export default function Trainer(props) {
  return (
    <>
      <div
        style={
          props.collapseWidth === 0
            ? { backgroundColor: "#E5E5E5", padding: 8 }
            : { backgroundColor: "#E5E5E5", padding: 24 }
        }
      >
        <Row gutter={[16, 16]}>
          <Col span={8} xs={24} md={8}>
            <ModelsDropdown />
          </Col>
        </Row>
        <Row gutter={[16, 16]} className="mt-8">
          <Col span={12} xs={24} md={12}>
            <Card className="converter-cards">
              <GestureToVoice from="trainer" />
            </Card>
          </Col>
          <Col span={12} xs={24} md={12}>
            <Card className="converter-cards">
              <TrainerControl />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
