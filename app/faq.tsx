import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>How can Hawk Aerospace drones benefit agricultural operations?</AccordionTrigger>
          <AccordionContent>
          Our drones are equipped with state-of-the-art sensors and imaging technology that provide detailed insights into crop health, irrigation needs, and pest infestations. By utilizing aerial surveillance, farmers can efficiently monitor large areas of land, identify issues early, and make data-driven decisions to optimize yields and reduce costs..
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How does Hawk Aerospace prioritize data privacy and security in agricultural drone operations?</AccordionTrigger>
          <AccordionContent>
          Protecting our customers' data is paramount to us. Hawk Aerospace employs robust encryption protocols and secure data storage methods to safeguard all information collected during drone operations. We adhere strictly to industry best practices and regulatory standards to ensure compliance and peace of mind for our clients. Rest assured, when you choose Hawk Aerospace, your data privacy and security are our top priorities.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How detailed are the surveillance reports provided by Hawk Aerospace?</AccordionTrigger>
          <AccordionContent>
          Our surveillance reports are meticulously crafted to provide comprehensive insights into the observed areas or assets. Each report includes detailed information on the findings of the surveillance mission, including visual data captured by our drones, analysis of any anomalies or issues detected, and actionable recommendations for addressing identified concerns. We prioritize clarity and accuracy in our reporting, ensuring that our clients have the information they need to make informed decisions regarding maintenance, security, or other relevant matters. With Hawk Aerospace, you can trust that our surveillance reports will deliver valuable insights to support your operational objectives.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  