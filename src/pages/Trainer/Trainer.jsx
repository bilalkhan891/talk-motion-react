import React from "react";
import { Row, Col, Card } from "antd";
import { ModelsDropdown } from "../../components/ui/ModelsDropdown";
import { TrainerControl } from "../../components/ui/TrainerControl";
import { GestureToVoice } from "../../components/ui/GestureToVoice";
import { useState } from "react";

export default function Trainer(props) {
  const [modalId, setModalId] = useState();
  const cardBodyStyle = props.sm ? { padding: "5px" } : null;
  const trainerStyle = props.sm
    ? { backgroundColor: "#E5E5E5", padding: "5px", minHeight: "100vh" }
    : { backgroundColor: "#E5E5E5", padding: "24px", minHeight: "100vh" };

  const getModalId = (modal_id) => {
    setModalId(modal_id);
  };

  return (
    <>
      <div style={trainerStyle}>
        <Row gutter={[16, 16]}>
          <Col span={8} xs={24} md={8}>
            <ModelsDropdown getModalId={getModalId} />
          </Col>
        </Row>
        <Row gutter={[16, 16]} className="mt-8">
          <Col span={12} xs={24} md={12}>
            <Card className="converter-cards" bodyStyle={cardBodyStyle}>
              <GestureToVoice from="trainer" modalId={modalId} />
            </Card>
          </Col>
          <Col span={12} xs={24} md={12}>
            <Card className="converter-cards" bodyStyle={cardBodyStyle}>
              <TrainerControl modalId={modalId} />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
