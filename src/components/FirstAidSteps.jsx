import React from "react";
import { FaArrowDown } from "react-icons/fa";

const firstAidTips = [
  {
    title: "1. Bleeding",
    description:
      "Apply firm pressure with a clean cloth to stop bleeding. Elevate the wounded part if possible and seek medical help if bleeding doesn’t stop.",
  },
  {
    title: "2. Burns",
    description:
      "Cool the burn with clean running water for at least 10 minutes. Do not apply ice or butter. Cover with a sterile gauze.",
  },
  {
    title: "3. Fractures",
    description:
      "Immobilize the affected area. Do not try to straighten the bone. Apply a splint if trained and wait for emergency services.",
  },
  {
    title: "4. CPR (Cardiopulmonary Resuscitation)",
    description:
      "Check for response and breathing. Begin chest compressions: 30 compressions followed by 2 rescue breaths. Continue until help arrives.",
  },
  {
    title: "5. Choking",
    description:
      "Ask the person to cough. If they can’t, deliver 5 back blows followed by 5 abdominal thrusts (Heimlich maneuver).",
  },
  {
    title: "6. Electric Shock",
    description:
      "Turn off the source of electricity if possible. Do not touch the person directly. Call emergency services and begin CPR if needed.",
  },
  {
    title: "7. Snake Bite",
    description:
      "Keep the person calm and still. Do not cut or suck the wound. Immobilize the limb and seek immediate medical attention.",
  },
  {
    title: "8. Fainting",
    description:
      "Lay the person flat on their back. Loosen tight clothing. If unresponsive after 1 minute, call for help.",
  },
];

const FirstAidGuide = () => {
  return (
    <div className=" bg-black  p-6">
      <h1 className="text-3xl font-bold text-white mb-4 text-center">
        ⛑️ First Aid <span className="text-blue-600">Guide</span>
      </h1>
      <p className="text-gray-500 max-w-3xl mb-6 mx-auto  text-sm text-center">
        Here's a quick guide to handling common emergencies. This is not a
        replacement for professional training or medical help — always call
        emergency services when needed.
      </p>

      <div className="space-y-6">
        {firstAidTips.map((tip, index) => (
          <>
            <div
            
              className="bg-gray-800 p-5 rounded-xl max-w-3xl mx-auto shadow-md border-l-4 border-blue-500"
            >
              <h2 className="text-xl font-semibold text-blue-700 mb-1">
                {tip.title}
              </h2>
              <p  className="text-gray-50">{tip.description}</p>
            </div>
            {index != 7 ? <FaArrowDown key={index} style={{textAlign: "center",color:"white", width: "100%", fontSize: "1.5rem" }}/> : null}
            
          </>
        ))}
      </div>
    </div>
  );
};

export default FirstAidGuide;
