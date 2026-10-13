document.getElementById('applyBtn').addEventListener('click', () => {
  const messages = [
    '报名系统提示：已检测到稳定奶蛙浓度，预录取成功。',
    '招生办回复：你的“呱”很有精神，请保持。',
    '系统审核通过：欢迎进入重庆奶蛙大学候选蛙名单。',
    '申请已提交。接下来请认真学习，适度抽象。'
  ];
  const msg = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById('applyMsg').textContent = msg;
});
