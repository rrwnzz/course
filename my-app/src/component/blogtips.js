import '../css/blogtips.css'
import '../css/blog.css';

export default function BlogTips() {
  const tips = [
    "Plan your study sessions ahead and stick to a schedule.",
    "Use the Pomodoro technique: 25 minutes study, 5 minutes break.",
    "Review your notes every week to reinforce learning.",
    "Avoid multitasking; focus on one course at a time.",
    "Set specific goals before each study session.",
  ];

  return (
    <div id='blogTips'>
      <h4>✨ Top Tips to Boost Your Learning ✨</h4>
      <ul>
        {tips.map((tip, index) => (
          <li key={index}>
            <span className="emoji">💡</span>
            <span className="tipText">{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}


