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
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-red-600 mb-4">
        ⛑️ First Aid Guide
      </h1>
      <p className="text-gray-700 mb-6">
        Here's a quick guide to handling common emergencies. This is not a
        replacement for professional training or medical help — always call
        emergency services when needed.
      </p>

      <div className="space-y-6">
        {firstAidTips.map((tip, index) => (
          <>
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-md border-l-4 border-red-500"
            >
              <h2 className="text-xl font-semibold text-red-700 mb-1">
                {tip.title}
              </h2>
              <p className="text-gray-600">{tip.description}</p>
            </div>
            {index != 7 ? <FaArrowDown style={{textAlign: "center", width: "100%", fontSize: "2rem"}}/> : null}
            
          </>
        ))}
      </div>
    </div>
  );
};

export default FirstAidGuide;
