export const NEXT_PAPER_ZH = {
  "paper-method": {
    eyebrow: "下一篇论文 · 方法设计",
    title: "候选特异行为回声检验",
    lead: "在不假设某一种信号必然随蒸馏保留的前提下，联合检验候选教师特异的成对边界转移、结构/POS 模式，以及罕见错误或行动模式。",
    callout: "现有证据支持更宽的结论：蒸馏可能传递教师特异、但并非完成任务所必需的行为。局部边界转移只是一个待 D0 验证的候选通道；选择有效的 max-statistic 检测任意存活签名，而后续签名解释不能直接证明隐藏监督配方。",
    sections: [
      {
        title: "有文献支撑的假设 · 行为回声",
        body: `<p>可辩护的前提不是“所有蒸馏 LLM 都会复制同一个几何对象”，而是普通输出蒸馏可能传递<strong>候选教师特异、但并非完成任务所必需的行为</strong>。LLM 直接证据已经观察到教师偏好的句法模板、教师特异行动模式、经过重写的推理轨迹签名，以及教师记忆属性的迁移；一般知识蒸馏和任务型 LLM 反事实蒸馏支持决策边界也是可传递知识，但“普通 LLM 输出蒸馏稳定迁移局部边界”仍必须经过 demo 验证 [[1,86,87,88,89,90,91]]。</p><table class="matrix"><thead><tr><th>签名家族</th><th>现有证据</th><th>本文定位</th></tr></thead><tbody><tr><td>成对局部边界转移</td><td>决策边界蒸馏、仅决策黑盒蒸馏、反事实 LLM 蒸馏，以及有限答案 LLM 指纹迁移 [[80,86,87,91]]</td><td><strong>合理但暂定</strong>；只有决定性 demo 通过后才升级为核心。</td></tr><tr><td>结构 / POS 响应模式</td><td>蒸馏学生保留教师偏好的 POS 模板，而原始输出相似度并不可靠 [[1]]</td><td><strong>具有直接 LLM 支持</strong>；主要签名家族。</td></tr><tr><td>罕见错误、推理或行动模式</td><td>受控 Agent 蒸馏产生教师特异行动图收敛；轨迹签名和记忆属性也会迁移 [[88,89,90]]</td><td><strong>具有直接 LLM 支持</strong>；主要签名家族。</td></tr></tbody></table><p>因此，总假设是“至少一个签名存在”，而不是要求三个签名同时存在：</p><div class="equation">H_{1,i}: \max_{s\in\{B,S,E\}}\theta_{i,s}>0. <span class="eq-label">(2)</span></div><p>其中 <em>B</em>、<em>S</em> 和 <em>E</em> 分别表示边界、结构和错误/行动签名。若只有结构或行动签名存活，方法仍可成立，但必须删除以局部边界为中心的主张。</p>`
      },
      {
        title: "三个签名家族与具体接口",
        body: `<table class="matrix"><thead><tr><th>签名</th><th>发现对象</th><th>留出接口</th><th>候选特异得分</th></tr></thead><tbody><tr><td><strong>B · 成对边界转移</strong></td><td>候选模型稳定改变有限答案、而匹配模型不跟随的变换规则</td><td>300 个全新 MCQ、下一子目标、A/B/平局或工具选择对</td><td>待审计模型复现候选 <em>a⁰→a¹</em> 转移的超额概率。</td></tr><tr><td><strong>S · 结构响应模式</strong></td><td>候选偏好的 POS n-gram、话语骨架、答案开头模板与步骤数区间</td><td>300 个按任务和输出长度平衡的全新开放式提示</td><td>候选偏好结构模板在待审计模型中的控制归一化频率或似然。</td></tr><tr><td><strong>E · 错误 / 推理 / 行动模式</strong></td><td>候选特异罕见错误标签、首错类别、可选子目标顺序或工具行动图 motif</td><td>300 个存在多种合理解法的全新困难任务</td><td>非任务必需的失败结构或行动结构相对于控制的超额一致性。</td></tr></tbody></table><p>三个家族都只使用候选模型进行发现，并在全新推断实例上评分。强制基线包括：原始答案一致率、BERTScore、教师困惑度、仅 POS、仅边界、仅错误/行动，以及通用 provenance 相似度。D0 只使用普通教师输出训练，不注入水印或人为签名。</p>`
      },
      {
        title: "签名特异估计量与分层 omnibus",
        body: `<p>受控实验中的独立统计单位是每一个独立训练出的学生模型。每个签名家族 <em>s</em> 预注册一个有界逐样本得分 <em>g</em><sub>s</sub>：边界家族使用成对转移事件，结构家族使用候选模板得分，错误/行动家族使用错误结构或行动图一致性。提示词和重复生成只是嵌套测量。</p><div class="equation">θ<sub>i,s</sub>=E<sub>k,x</sub>[g<sub>s</sub>(S<sub>k</sub>,T<sub>i</sub>;x)]−E<sub>C∈𝒞<sub>i</sub>,x</sub>[g<sub>s</sub>(C,T<sub>i</sub>;x)],\quad Z<sub>i,s</sub>=θ̂<sub>i,s</sub>/SE(θ̂<sub>i,s</sub>). <span class="eq-label">(3)</span></div><p>三个签名使用只来自控制开发集的尺度标准化，主要候选统计量为 <em>Z</em><sub>i,max</sub>=max<sub>s∈{B,S,E}</sub>Z<sub>i,s</sub>。校准对象是<strong>完整发现—检验算法</strong>，而不是已经为候选筛好的特征集合。在受控实验中，只在预注册种子和剂量区组内随机化处理臂标签；每次随机化都重新运行候选特异特征发现、重新选择模板或变换规则，并在未触碰的推断任务家族上重新计算全部签名统计量。零分布因此同时包含特征选择、签名选择和候选多重性，可使用 maxT 或 step-down 控制 FWER。</p><p>公开模型和商业案例没有随机教师分配，只能使用受控实验冻结的阈值与匹配的<strong>影子候选库</strong>。每个影子候选必须独立执行同一发现算法；禁止在已经选出的候选特征上直接置换。超出校准范围的案例返回结论不充分。</p>`
      },
      {
        title: "选择有效的候选特异发现",
        body: `<p>在查询模型之前，把提示模板、任务生成器和语义家族划分为发现区与互不重叠的推断区。对每个候选和签名家族，发现阶段依据候选稳定性与控制差异选择变换规则、结构模板集合或错误/行动 motif：</p><div class="equation">A<sub>i,s</sub>(D<sub>disc</sub>)=argmax<sub>A∈𝒜<sub>s</sub></sub>[Specificity<sub>i</sub>(A)·Stability<sub>i</sub>(A)·(1−ControlTransfer(A))]. <span class="eq-label">(4)</span></div><p>选中的对象必须在推断区中使用全新的实体、数值、选项、响应提示或工具场景实例化；发现样本和近重复不得复用。每个有效随机化内部都要重跑 <em>A</em><sub>i,s</sub>。缓存发现响应可以让这一过程不增加模型查询。所有基线使用完全相同的发现和推断预算。</p>`
      },
      {
        title: "候选结论、签名后续检验与机制边界",
        body: `<p>对每个候选，联合检验边界、结构和错误/行动签名，并在全部候选之间控制 family-wise error。输出 omnibus p 值、签名效应与同时置信区间、稳定性诊断和三态结论：</p><div class="equation">d<sub>i</sub>∈{检测到,未检测到,结论不充分},\quad Ê<sub>α</sub>(S)={T<sub>i</sub>:d<sub>i</sub>=检测到}. <span class="eq-label">(5)</span></div><p><strong>检测到：</strong>联合 max-statistic 超过校正阈值。<strong>未检测到：</strong>三个签名的同时区间均位于预注册可忽略效应区间内，且各自功效充分。<strong>结论不充分：</strong>两者均不成立。分层后续检验只说明哪一种可观察签名存活。边界、POS 或行动签名<strong>不能唯一确定</strong>响应、推理或偏好监督；训练机制标签只在后续机制隔离实验中评价。证据支持候选集合仍是观察性摘要，不是因果来源证明 [[2,7]]。</p>`
      },
      {
        title: "功效感知的查询与训练预算",
        body: `<p>发现调用和推断调用必须分开预算，但增加提示词不能替代增加独立训练模型。开发阶段需要估计训练 replica 方差、端点内方差、候选间方差、提示簇相关性、重复采样方差，以及在零分布中重跑发现引入的额外方差。</p><p>D0 将训练模型作为主要样本，采用八个配对种子区组，并以预注册配对效应 <em>d</em>=1.2 作为 demo 所能可靠识别的最小量级。更小效应应报告为尚未解决，而不能把 900 个提示当作 900 个独立样本制造显著性。</p>`
      },
      {
        title: "分层审计数值示例",
        body: `<p>设有三个候选、八个独立训练的待审计模型，以及 900 个留出样本：三个签名家族各 300 个。模型 replica 是推断单位；提示和重复生成属于嵌套测量。签名特异可忽略效应边界和选择有效的 maxT 零分布在评价前冻结。</p><table class="matrix"><thead><tr><th>候选</th><th>边界 θ̂ / Z</th><th>结构 θ̂ / Z</th><th>错误/行动 θ̂ / Z</th><th>联合 maxT p</th><th>后续 / 等效性</th><th>结论</th></tr></thead><tbody><tr><td>T₁</td><td>0.28 / 3.92</td><td>0.05 / 0.88</td><td>0.03 / 0.51</td><td>0.010</td><td>边界后续检验通过；其他不支持</td><td><strong>检测到 · 边界回声</strong></td></tr><tr><td>T₂</td><td>0.01 / 0.18</td><td>−0.01 / −0.21</td><td>0.02 / 0.33</td><td>0.93</td><td>所有同时区间均可忽略；功效≥0.84</td><td><strong>未检测到</strong></td></tr><tr><td>T₃</td><td>0.02 / 0.39</td><td>0.13 / 2.04</td><td>0.01 / 0.17</td><td>0.16</td><td>结构区间同时跨过零与实际效应边界；功效=0.57</td><td><strong>结论不充分</strong></td></tr></tbody></table><p>T₁ 因一个签名家族强烈存活而被检测，未激活的家族不会稀释它。后续检验只能说明回声表现为边界型，不能说明隐藏训练配方。T₂ 只有在所有签名均等效且功效充分时才能获得负向结论。T₃ 继续拒绝判断。</p><div class="notice">这些数值仅用于教学。真正决定哪些签名可以进入最终论文的是 D0 决定性 demo。</div>`
      },
      {
        title: "从可观察签名到训练机制",
        body: `<p>边界、结构和错误/行动签名描述<strong>什么被保留</strong>，不必然说明<strong>学生如何训练</strong>。普通响应蒸馏可能传递风格和错误；推理轨迹蒸馏可能同时影响结构与边界；偏好数据也会改变语言模式和决策。</p><p>机制恢复因此是独立的受控任务。只有候选检测成立后，机制隔离学生才用于判断签名画像能否区分响应目标、推理轨迹和成对偏好。商业 API 只报告签名画像，不能把它转换为隐藏配方声明。</p>`
      },
      {
        title: "候选 B · 参考检查点归一化开发诊断",
        body: `<p>当受控实验拥有开源学生与蒸馏前基础检查点时，可以测量疑似训练阶段带来的相对变化：</p><div class="equation">R<sub>i,s</sub>=sim<sub>s</sub>(S,T<sub>i</sub>)−sim<sub>s</sub>(S<sub>0</sub>,T<sub>i</sub>). <span class="eq-label">(6)</span></div><p>这一诊断用于验证签名是否响应真实训练边，并分析共享基础模型混杂。它属于开发和消融工具，不是商业 API 判定所需条件 [[3,6]]。</p>`
      },
      {
        title: "通过 demo 门槛后的边界子方法",
        body: `<p>若决定性 demo 在两个教师上均确认成对边界转移，再扩展边界家族：在保持任务语义的同时改变答案顺序、数值阈值、推理可见性、安全框架或工具可用性。选中的规则必须迁移到全新实体和未见变换种子。</p><p>若边界转移失败而结构或行动签名通过，应从论文中删除一般性的几何主张，不能事后补救。边界检验成为明确的负结果，而不是方法核心。</p>`
      },
      {
        title: "创新性门槛",
        body: `<p>现有工作已经包含基于 POS 模板的教师追踪、行为来源检验、行动图收敛、边界信息蒸馏、推理轨迹水印迁移和有限答案反事实指纹 [[1,2,7,14,15,80,86,87,88,89,90,91]]。只有当<strong>候选特异多签名审计</strong>、<strong>选择有效的 max-statistic</strong>与<strong>先证伪后扩展的受控 demo</strong>在校准教师检测或固定功效下查询效率方面超过最强单签名基线，方法贡献才成立。</p><div class="notice">若仅 POS、仅行动图、仅边界或通用 provenance 检验在 leave-one-seed-block-out 评价中与 omnibus 相当，则不存在组合方法贡献。max 检验必须跨教师提高稳健性，而不能只是搜索大量噪声特征。</div>`
      },
      {
        title: "推荐的方法边界",
        body: `<div class="survey-note"><b>D0 通过后的论文核心</b>在边界、结构和错误/行动签名上执行候选特异发现；使用全新留出样本、选择有效 maxT、三态结论和签名后续检验。</div><div class="survey-note"><b>Demo 门槛</b>D0a 使用 32 个独立训练模型检验高剂量自然签名假设；只有 D0a 通过，D0b 才增加 32 个低剂量模型。</div><div class="survey-note"><b>有条件方向</b>若只有结构或行动签名通过，保留多签名审计并删除边界中心主张。</div><div class="survey-note"><b>NO-GO 后备方向</b>若全部自然签名在匹配控制下失败，停止被动谱系推断；只报告非因果行为收敛，或转向主动推理轨迹水印 / 提供方遥测方案 [[88,89]]。</div>`
      }
    ]
  },
  "paper-benchmark": {
    eyebrow: "下一篇论文 · 基准",
    title: "基准与实验协议",
    lead: "先用决定性 D0 验证自然行为签名是否存在，再进入机制隔离、公开蒸馏模型与商业 API 观察。",
    callout: "D0 是第一道算力与科学门槛。若自然签名无法在独立训练模型层面区分教师学生与匹配控制，72 模型 G0 和商业 API 审计均不启动。",
    sections: [
      {
        title: "第一层 · 受控开源谱系",
        body: `<p>受控模型提供已知教师—学生边，但拟议方法在评价时只能观察输出。D0 先检验普通输出蒸馏是否传递任意自然行为签名；D0 通过后，G0 才隔离响应、推理和偏好监督机制。</p><p>训练日志与检查点只用于真实关系和消融，不是最终黑盒规则输入。公开披露模型和商业端点不得与受控训练 replica 合并计算因果敏感性。</p>`
      },
      {
        title: "D0 · 决定性自然签名 demo",
        body: `<p>D0 只回答一个问题：普通输出蒸馏是否传递至少一种候选特异、非任务必需的行为签名。它先于更昂贵的机制隔离实验。</p><table class="matrix"><thead><tr><th>组成</th><th>冻结设计</th></tr></thead><tbody><tr><td>候选教师</td><td><code>Qwen/Qwen3-8B</code> 与 <code>meta-llama/Llama-3.1-8B-Instruct</code> [[92,93]]</td></tr><tr><td>学生</td><td><code>Qwen/Qwen3-1.7B-Base</code>，LoRA rank 16；四个处理臂在相同种子区组中共享初始化检查点 [[94]]</td></tr><tr><td>同家族影子教师</td><td><code>Qwen/Qwen3-1.7B</code>；控制合成输出训练与 Qwen 家族结构，但不包含两个候选教师 [[95]]</td></tr><tr><td>D0a 高剂量四臂</td><td>T₁ 普通输出、T₂ 普通输出、影子教师输出、公开参考目标；每臂 8 个匹配独立种子，共 <strong>32 个训练模型</strong></td></tr><tr><td>训练数据</td><td>完全相同的混合提示：40% 指令遵循、35% 重新生成的数学/推理、25% 有限工具选择；每个模型 <strong>8M 目标 token</strong></td></tr><tr><td>留出审计</td><td>300 个边界对、300 个结构/POS 提示、300 个罕见错误/推理/行动任务；候选特异发现和全新推断实例</td></tr><tr><td>强制基线</td><td>原始答案一致率、BERTScore、教师困惑度、仅 POS、仅边界、仅行动/错误、通用 provenance 相似度</td></tr></tbody></table><p>独立单位是训练模型，不是提示词。四个处理臂在同一种子编号下匹配初始化、数据顺序、优化器状态和更新日程，从而进行配对比较。八个配对种子对预注册标准化效应 <em>d</em>=1.2 的功效约为 0.83；更小效应只能报告为尚未解决，不能把 900 个提示当作独立样本。</p><h3>D0a 决策</h3><ul><li><strong>GO：</strong>影子教师臂和公开目标臂上的逐候选 FWER≤0.05；至少 13/16 个 T₁/T₂ 学生返回只包含正确候选的单元素证据集合；至少一个签名在两个教师上均达到配对 <em>d</em>≥1.2 且 95% 区间大于零；leave-one-seed-block-out 模型级 AUC 比原始答案一致率至少提高 0.10。</li><li><strong>有条件 GO：</strong>结构或行动/错误签名实现校准检测，但边界转移失败。保留多签名方法并删除边界中心主张。</li><li><strong>NO-GO：</strong>影子/公开目标臂出现候选证据、真实教师无法与替代教师和影子教师区分，或全部效应在全新任务家族上消失。停止被动谱系推断；只报告行为收敛，或转向主动轨迹水印。</li></ul><p><strong>D0b 剂量检验：</strong>只有 D0a GO 后，才在 <strong>2M 目标 token</strong> 下重复相同四臂 32 模型设计。只有两个教师的高剂量效应都显著高于低剂量，且配对置信区间为正，才能主张剂量响应。确认性 demo 最大训练量为 64 个模型。</p><p><strong>D0c 分解实验，不作为零控制：</strong>GO 后可增加少量“任务家族内打乱教师输出”模型。由于打乱仍保留教师措辞与句法，结构/POS 回声可能合理存在；若边界和输入条件行动签名依赖输入—目标关系，它们应明显减弱。该实验用于分解签名来源，绝不计入负控制 FWER。</p>`
      },
      {
        title: "基准模型分层与精确模型",
        body: `<table class="matrix"><thead><tr><th>证据层</th><th>精确模型</th><th>用途与允许解释</th></tr></thead><tbody><tr><td><strong>D0 · 自然签名 demo</strong></td><td>开放教师 <code>Qwen/Qwen3-8B</code>、<code>meta-llama/Llama-3.1-8B-Instruct</code>；学生 <code>Qwen/Qwen3-1.7B-Base</code></td><td>检验普通输出蒸馏是否保留任意教师特异自然签名，用于决定方法方向，不直接支撑最终商业主张 [[86,87,88,89,90,91,92,93,94]]。</td></tr><tr><td><strong>G0 · 受控因果基准</strong></td><td>教师 <code>deepseek/deepseek-v4-flash</code>、<code>qwen/qwen3.7-plus</code>；学生 <code>Qwen/Qwen3-8B-Base</code></td><td>D0 通过后隔离响应、推理和偏好监督，用于机制恢复真实关系 [[66,83,84,85]]。</td></tr><tr><td><strong>G1 · 公开输出/推理蒸馏</strong></td><td>DeepSeek-R1-Distill-Qwen-{1.5B,7B,14B,32B} 与 Distill-Llama-{8B,70B}</td><td>外部教师家族正例；当前可调用 R1 快照未必是原始生成器 [[44,69]]。</td></tr><tr><td><strong>G2 · 多教师 logit 蒸馏</strong></td><td>Llama-3.2-{1B,3B}-Instruct；候选集合 Llama-3.1-{8B,70B}-Instruct</td><td>只评价集合值候选证据，不能强制选唯一教师 [[81]]。</td></tr><tr><td><strong>G3 · 剪枝加蒸馏</strong></td><td>NVIDIA Llama-3.1-Minitron-4B Width/Depth；候选 Llama-3.1-8B</td><td>混合流程案例，不能把信号单独归因于蒸馏 [[82]]。</td></tr><tr><td><strong>G4 · 商业观察</strong></td><td>六个版本固定的 OpenRouter 端点</td><td>没有真实谱系，只报告有方向候选证据与时间稳定性 [[85]]。</td></tr></tbody></table><p>所有 Hugging Face 检查点按 commit hash 固定；API 请求记录精确 slug、provider route、响应元数据、日期与请求 schema。不同证据层不能混合计算因果准确率。</p>`
      },
      {
        title: "G0 · D0 通过后的机制隔离 campaign",
        body: `<p>72 次训练只在 D0a GO 后启动。它不再检验“自然签名是否存在”，而是检验受控响应、推理和偏好监督是否产生可区分的签名画像。每个“机制 × 剂量”区组都包含四个等量处理臂。</p><table class="matrix"><thead><tr><th>实验臂</th><th>精确设计</th><th>模型数</th></tr></thead><tbody><tr><td>教师 T₁ 正例</td><td>3 个隔离机制 × 2 个监督剂量 × 3 个独立种子</td><td><strong>18</strong></td></tr><tr><td>教师 T₂ 正例</td><td>与 T₁ 相同的六个区组与种子编号</td><td><strong>18</strong></td></tr><tr><td>公开监督控制</td><td>3 机制 × 2 剂量 × 3 种子；相同提示和 token 预算，目标来自非教师公开金标或确定性规则</td><td><strong>18</strong></td></tr><tr><td>影子教师控制</td><td>3 机制 × 2 剂量 × 3 种子；使用独立开放模型 <code>Qwen/Qwen3-8B</code> 在相同提示和 token 预算下生成目标</td><td><strong>18</strong></td></tr><tr><td>总计</td><td><code>Qwen/Qwen3-8B-Base</code>，LoRA-r16</td><td><strong>72</strong></td></tr></tbody></table><p>低、高剂量为 3M 与 12M 教师监督 token。响应学生只优化最终短答案；推理学生优化结构化中间步骤并排除最终答案贡献；偏好学生使用固定回答对与 A/B/平局判断，DPO β=0.1。所有处理臂在分析冻结前保持盲化。另一候选教师提供替代教师比较，影子教师臂控制合成输出训练与共享 Qwen 家族结构。</p>`
      },
      {
        title: "重复实验层级与推断单位",
        body: `<p>每个条件包含多个独立初始化和训练的学生 replica。提示、语义模板、重复生成和解码样本是嵌套测量，不能当作独立实验单位。D0 使用八个配对种子；G0 使用析因区组内的独立种子，并通过层级 bootstrap 或混合效应模型处理查询簇。</p><p>商业端点没有训练 replica；不同日期和 API 会话只能评价观察稳定性，不能替代受控模型级推断。</p>`
      },
      {
        title: "困难负样本矩阵",
        body: `<table class="matrix"><thead><tr><th>负样本类型</th><th>难点</th><th>必要控制</th></tr></thead><tbody><tr><td>共享基础检查点</td><td>不存在候选教师蒸馏也会继承相似行为</td><td>兄弟学生与基础归一化消融</td></tr><tr><td>共享公开数据</td><td>独立模型学习相同样本</td><td>数据匹配独立训练与公开目标控制</td></tr><tr><td>同家族影子教师</td><td>共享模型家族和合成输出训练，但不包含候选教师</td><td>D0/G0 完整影子教师处理臂</td></tr><tr><td>共同第三教师</td><td>两个模型继承相关行为</td><td>候选池包含 / 缺失第三教师</td></tr><tr><td>能力收敛</td><td>强模型在简单正确答案上高度一致</td><td>非任务必需结构、错误和行动签名</td></tr><tr><td>微调 / 合并 / 压缩</td><td>其他派生边可能类似蒸馏</td><td>带类型派生基线</td></tr></tbody></table>`
      },
      {
        title: "可识别的负控制设计",
        body: `<ol><li><strong>公开目标控制。</strong>使用相同提示、算力和 token 预算，但目标来自公开金标或确定性规则。</li><li><strong>影子教师控制。</strong>使用独立教师在相同提示、token 预算和训练流程下生成目标，控制合成输出训练与模型家族相似性。</li><li><strong>替代教师控制。</strong>另一教师的学生必须在候选比较中充当困难负例。</li><li><strong>留出污染筛查。</strong>发现与推断任务家族分离，排除训练重叠、近重复和发现样本复用。</li></ol><p>容易的无关模型不能稀释决定可识别性的困难控制；结果必须逐控制层报告。</p>`
      },
      {
        title: "第二层 · 模拟 API 访问",
        body: `<p>冻结学生并通过 API 包装暴露，测试确定性与随机解码、隐藏系统提示、截断、重复采样、可选 logprob 和模型路由。方法必须在真实审计者可获得的信息下评价。</p><p>报告固定预算曲线，并检验结构和行动签名对输出改写与包装变化的敏感性。</p>`
      },
      {
        title: "第三层 · 商业 API",
        body: `<p>商业模型只做候选池和控制集合预注册的观察性案例。真实 API 表报告三类签名效应、跨日期稳定性、查询成本、校准范围和是否拒绝判断。</p><p>商业案例只验证外部适用性，不提供隐藏谱系真实关系，也不能仅凭行为证据作出指控。</p>`
      },
      {
        title: "具体商业 API 面板",
        body: `<p>观察面板统一通过 OpenRouter 调用。冻结 slug 为 <code>openai/gpt-5.2</code>、<code>anthropic/claude-opus-4.1</code>、<code>google/gemini-3.5-flash</code>、<code>deepseek/deepseek-v4-pro</code>、<code>qwen/qwen3.7-plus</code> 与 <code>mistralai/mistral-medium-3-5</code> [[70,71,72,73,74,75,85]]。</p><table class="matrix"><thead><tr><th>协议项</th><th>冻结设置</th></tr></thead><tbody><tr><td>审计日期</td><td>三次，相隔七天</td></tr><tr><td>探针预算</td><td>120 个候选发现对象 + 240 个留出推断对象</td></tr><tr><td>签名分配</td><td>边界、结构和错误/行动各 80 个推断对象</td></tr><tr><td>采样</td><td>温度 0 与 0.2；温度 0.7 仅用于鲁棒性</td></tr><tr><td>服务清单</td><td>slug、实际 provider route、系统提示、推理模式、最大输出、日期、SDK、response ID、拒答/错误状态</td></tr><tr><td>调用上限</td><td>保守上限 <strong>25,920 次</strong>；候选输出按日期缓存</td></tr><tr><td>结论</td><td>只报告候选条件观察证据，不声称隐藏教师</td></tr></tbody></table>`
      },
      {
        title: "方向性与互相蒸馏的观察性分析",
        body: `<p>对时间上可行的模型快照分别检验 A→B 与 B→A。只有候选快照早于待审计快照时，该方向才可进入分析；否则标记为时间上不支持。</p><table class="matrix"><thead><tr><th>A→B</th><th>B→A</th><th>观察标签</th><th>未解决解释</th></tr></thead><tbody><tr><td>检测到</td><td>未检测到 / 结论不充分</td><td>指向 B 的不对称候选证据</td><td>直接蒸馏、间接影响或共同来源</td></tr><tr><td>检测到</td><td>检测到</td><td>对称或双向行为回声</td><td>互相蒸馏、共同教师、共享数据或收敛</td></tr><tr><td>未检测到</td><td>未检测到</td><td>当前分辨率下无证据</td><td>弱效应或未列版本</td></tr><tr><td>任一结论不充分</td><td>任意</td><td>方向未解决</td><td>功效、漂移、控制或版本问题</td></tr></tbody></table><p>最终输出候选证据图，而不是谱系图；每条边记录版本、时间可行性、三态结论、签名画像和未排除解释。</p>`
      },
      {
        title: "评价指标、等效性与功效",
        body: `<p><strong>主要估计量：</strong>边界、结构和错误/行动效应 <em>θ</em><sub>i,s</sub> 与联合 <em>Z</em><sub>i,max</sub>。<strong>正向证据：</strong>固定 FWER 下的候选级 TPR。<strong>负向证据：</strong>三个签名的同时等效性、已知正例错误等效率和逐签名功效。<strong>签名后续：</strong>只在 omnibus 检测成立后报告。<strong>机制恢复：</strong>在 G0 中单独评价不同训练机制能否由签名画像区分。<strong>不确定性：</strong>功效不足、发现不稳定、接口缺失、端点漂移和签名冲突。</p><p>训练模型是推断单位。D0 报告配对种子效应和 leave-one-seed-block-out 模型级 AUC；提示级区间仅作次要结果。D0 与 G0–G4 必须分层报告校准。</p>`
      },
      {
        title: "核心实验矩阵",
        body: `<table class="matrix"><thead><tr><th>实验轴</th><th>必要取值</th></tr></thead><tbody><tr><td>研究阶段</td><td>D0 自然签名；G0 机制隔离；外部 G1–G4</td></tr><tr><td>签名家族</td><td>边界、结构/POS、罕见错误/推理/行动</td></tr><tr><td>训练关系</td><td>公开目标、影子教师、单一候选教师、有限双教师</td></tr><tr><td>G0 训练机制</td><td>响应、推理、偏好；安全/工具为扩展</td></tr><tr><td>候选池</td><td>2、5、10+，以及真实教师缺失</td></tr><tr><td>控制</td><td>公开目标、同家族影子教师、替代候选教师、共享基础、共享数据、共同第三教师</td></tr><tr><td>选择协议</td><td>候选特异发现、全新推断实例、嵌套重跑校准</td></tr><tr><td>后处理</td><td>继续 SFT、改写、量化、合并</td></tr></tbody></table>`
      },
      {
        title: "带成本的实验设计矩阵",
        body: `<p>成本用教师输出 token、训练运行数、本地生成与 API 调用表示。</p><table class="matrix"><thead><tr><th>阶段</th><th>工作量</th><th>训练 / 模型数</th><th>审计分配</th></tr></thead><tbody><tr><td>D0a 高剂量 demo</td><td>2 个候选教师 + 1 个同家族影子教师 + 公开目标；8 个配对种子；8M 目标 token</td><td><strong>32 个训练模型</strong></td><td>900 个留出对象：边界、结构、错误/行动各 300</td></tr><tr><td>D0b 剂量扩展</td><td>D0a GO 后，在 2M token 下重复四臂</td><td><strong>新增 32 个模型</strong>；D0 最大总计 64</td><td>复用冻结发现规则与留出任务家族，检验配对剂量效应</td></tr><tr><td>G0 机制隔离</td><td>2 个候选教师 + 公开目标与影子教师控制 × 3 机制 × 2 剂量 × 3 种子</td><td><strong>36 正例 + 36 平衡控制 = 72</strong></td><td>3,000 个发现对象；1,200 个机制评价留出对象</td></tr><tr><td>外部验证</td><td>先 R1-Distill Qwen/Llama，再 Llama 3.2 与 Minitron</td><td>不训练</td><td>候选发现只使用候选输出，受控阈值保持冻结</td></tr><tr><td>OpenRouter 观察</td><td>6 端点、两个温度、三个日期</td><td>不训练</td><td>保守上限 <strong>25,920 次调用</strong></td></tr></tbody></table><p>D0a 是第一道投入门槛。自然签名检测未控制 FWER、或未超过最强单签名基线时，不启动 G0 与商业观察。所有运行记录 GPU 小时、教师输出 token、墙钟时间、检查点 hash、数据清单和随机种子。</p>`
      },
      {
        title: "派生、部署、反证与移除 campaign",
        body: `<table class="matrix"><thead><tr><th>实验</th><th>具体设置</th><th>科学问题</th></tr></thead><tbody><tr><td>LoRA 与全量更新</td><td>在 D0/G0 通过单元比较 LoRA-r16 与全量 SFT</td><td>行为回声是否跨适配强度保留？</td></tr><tr><td>继续后训练</td><td>蒸馏后追加 10k 条公开指令样本</td><td>普通更新是否擦除候选证据？</td></tr><tr><td>部署量化</td><td>8-bit 与 4-bit 回放代表模型</td><td>服务压缩是否改变三态结论？</td></tr><tr><td>输出改写</td><td>中性改写后分别检查结构、边界和错误/行动签名</td><td>哪些签名只是表面风格？</td></tr><tr><td>随机化反证</td><td>打乱教师标签、候选—特征对应和主动发现对象</td><td>破坏候选特异方向后优势是否消失？</td></tr><tr><td>泄露签名移除</td><td>泄露 10/25/50/75% 发现对象，LoRA 擦除与 clean:leak 比例</td><td>签名是否只依赖已泄露样本？</td></tr></tbody></table><p>若打乱条件仍保持优势、或所有效应只出现在发现样本而非全新任务家族，则否定主张。鲁棒性结论只覆盖明确测试的路径。</p>`
      },
      {
        title: "负结果规则",
        body: `<div class="notice">D0 全部自然签名失败时，停止被动谱系方法，不进入商业 API。</div><div class="notice">边界失败但结构/行动通过时，必须删除边界中心主张。</div><div class="notice">匹配控制消除候选特异证据时，不能把原始相似度改写成蒸馏结论。</div><div class="notice">功效、校准或端点稳定性不足时返回结论不充分。</div><div class="notice">多个候选检测到时报告证据支持集合，不强制选择唯一教师。</div>`
      }
    ]
  },
  "paper-roadmap": {
    eyebrow: "下一篇论文 · 主张与路线",
    title: "推荐论文主张与执行路线",
    lead: "先证伪后扩展：先判断普通蒸馏是否保留任意教师特异行为回声，再决定是否投入机制隔离和商业 API 审计。",
    callout: "当前方向不是既定结论。D0a 失败时停止被动黑盒谱系推断；只有 D0 通过后，候选特异多签名审计才成为论文主线。",
    sections: [
      {
        title: "推荐论文主张",
        body: `<div class="definition-box"><b>D0 通过后的论文主张</b>普通输出蒸馏可能保留至少一种候选特异、非任务必需的行为签名——成对决策转移、结构响应模式或罕见错误/行动模式。审计器可以仅从候选输出发现这些签名，并在全新输入上使用选择有效的 max-statistic 输出“检测到 / 未检测到 / 结论不充分”。</div><p>该主张以 D0 为前提。若只有结构或行动签名通过，论文删除一般局部几何表述；若无自然签名通过，则停止被动谱系论文。</p>`
      },
      {
        title: "贡献结构",
        body: `<ol><li><strong>问题定义：</strong>候选条件黑盒蒸馏证据检测，采用三态结论并限制商业模型因果主张。</li><li><strong>签名家族：</strong>边界、结构/POS 和错误/推理/行动三个互补通道，每个通道有文献基础并可独立证伪。</li><li><strong>推断：</strong>候选特异发现、全新留出实例、算法级随机化和联合 max-statistic。</li><li><strong>评价：</strong>32→64 模型决定性 demo、后续 72 次机制隔离、分层公开蒸馏对、服务压力测试和 OpenRouter 观察。</li></ol>`
      },
      {
        title: "建议论文结构",
        body: `<div class="steps"><div class="step"><strong>Introduction：</strong>已有工作显示多类教师特异属性可以迁移，但没有自然签名被证明普遍存在。</div><div class="step"><strong>Problem：</strong>候选条件证据、三态结论、候选池缺失与因果/观察边界。</div><div class="step"><strong>Behavioral-echo method：</strong>三个签名家族、候选特异发现、全新实例、算法级零分布与 maxT。</div><div class="step"><strong>Decisive demo：</strong>32 个高剂量模型、单签名基线、配对种子与明确的有条件/停止结论；GO 后再补 32 个低剂量模型。</div><div class="step"><strong>Mechanism and external validation：</strong>G0 机制隔离、DeepSeek-R1、Llama 3.2、Minitron 与服务路径。</div><div class="step"><strong>Commercial API：</strong>只报告带版本和因果限制的观察性候选证据图。</div></div>`
      },
      {
        title: "分阶段执行计划",
        body: `<table class="matrix"><thead><tr><th>阶段</th><th>交付物</th><th>决策</th></tr></thead><tbody><tr><td>D0a · 高剂量自然签名</td><td>32 个 Qwen3-1.7B 模型：两个教师臂、两个匹配控制、八个配对种子；检验三个签名</td><td>按预注册模型级阈值得到 GO / 有条件 GO / NO-GO</td></tr><tr><td>D0b · 剂量响应</td><td>只有 D0a GO 后才增加 32 个 2M-token 模型</td><td>两个教师的高剂量减低剂量效应都必须具有正配对区间</td></tr><tr><td>G0 · 机制隔离</td><td>72 个 Qwen3-8B-Base 训练，覆盖教师/公开/打乱四臂、响应/推理/偏好、两个剂量和三个种子</td><td>机制恢复与自然签名检测分开评价</td></tr><tr><td>G1–G3 · 公开蒸馏对</td><td>先 R1 Qwen/Llama，再 Llama 3.2 与 Minitron</td><td>按披露流程分开报告，不计算混合因果准确率</td></tr><tr><td>服务与后训练</td><td>跨基础复现、全量 SFT、继续训练、量化、插值、改写和泄露移除</td><td>只保留明确测试路径下成立的主张</td></tr><tr><td>G4 · OpenRouter</td><td>六端点、三日期、有序模型对分析</td><td>只报告候选证据与拒绝判断</td></tr></tbody></table>`
      },
      {
        title: "继续 / 停止标准",
        body: `<div class="property-grid"><div class="property-card"><b>D0 GO</b>控制 FWER≤0.05；至少 13/16 个高剂量教师学生候选正确；至少一个签名在两个教师上配对 <em>d</em>≥1.2 且 95% 区间为正；omnibus AUC 比原始一致率高至少 0.10。</div><div class="property-card"><b>有条件 GO</b>只有结构或行动/错误签名实现校准检测。继续多签名论文，但删除边界迁移主张。</div><div class="property-card"><b>NO-GO</b>控制触发、教师无法分离、全新任务效应消失，或 omnibus 不优于最佳单签名。停止被动谱系推断。</div><div class="property-card"><b>后备方向</b>只报告非因果行为收敛，或转向主动推理轨迹水印 / 提供方遥测，而不是继续暗示发布后来源证明。</div></div>`
      },
      {
        title: "可直接用于投稿的汇报模板",
        body: `<h3>主要候选证据表</h3><table class="matrix"><thead><tr><th>候选</th><th>边界 θ̂ / CI</th><th>结构 θ̂ / CI</th><th>错误/行动 θ̂ / CI</th><th>Z<sub>max</sub></th><th>maxT p<sub>adj</sub></th><th>全签名等效性 / 最小功效</th><th>结论</th><th>支持签名</th></tr></thead><tbody><tr><td>Tᵢ</td><td>效应 / [L,U]</td><td>效应 / [L,U]</td><td>效应 / [L,U]</td><td>统计量</td><td>p</td><td>是/否；min(1−β<sub>s</sub>)</td><td>检测到 / 未检测到 / 结论不充分</td><td>边界 / 结构 / 错误行动 / 无</td></tr></tbody></table><h3>必须配套的表格</h3><ul><li><strong>D0 种子区组：</strong>处理臂、剂量、种子、教师、三个签名效应、omnibus p、候选正确性、效用和基线分数。</li><li><strong>选择审计：</strong>候选发现对象、全新推断家族、随机化重跑、影子候选和校准范围。</li><li><strong>G0 机制表：</strong>响应/推理/偏好训练臂与观察签名画像；机制准确率以检测成立为条件。</li><li><strong>外部来源层：</strong>G1–G4 分开报告快照、披露流程、服务路径和结论边界。</li></ul><h3>有边界的结果表述</h3><div class="claim-box"><b>检测到</b>“选择有效的 maxT 检验检测到候选 Tᵢ 的行为回声证据（p<sub>adj</sub>=…）。后续检验支持 … 签名；该结论不能证明完整或因果隐藏训练配方。”</div><div class="claim-box"><b>未检测到</b>“三个签名的同时区间均位于预注册可忽略效应区域内，最小实际功效为 …；在该分辨率下未检测到 Tᵢ 证据。”</div><div class="claim-box"><b>结论不充分</b>“由于 …，联合正向检验与全签名等效性均未建立；当前证据不支持正向或负向谱系结论。”</div><div class="claim-box"><b>商业 API</b>“该有序端点对结果属于观察性并受版本限制；共享教师、数据、路由和间接影响仍无法排除。”</div>`
      },
      {
        title: "网站如何服务这篇论文",
        body: `<p>“下一篇论文”四页首先呈现 D0 的证据门槛，而不是直接承诺商业模型归因。方法页区分已有直接 LLM 支持、跨领域 KD 支持和待验证假设；实验页明确每个阶段何时停止。</p><p>只有 D0 通过，公开蒸馏模型、机制隔离和商业 API 页面才进入主线。若 D0 失败，网站保留该负结果并将长期方向转为主动水印或平台遥测。</p>`
      }
    ]
  }
};

export const NEXT_PAPER_SECTION_REFS = {
  "paper-method": [
    [1,80,86,87,88,89,90,91],
    [1,80,88,89,90],
    [],
    [1,2,15,80],
    [2,7],
    [],
    [],
    [1,88,89,90],
    [3,6],
    [80,86,87,91],
    [1,2,7,14,15,80,86,87,88,89,90,91],
    [1,2,3,6,7,80,88,89]
  ],
  "paper-benchmark": [
    [3,6,36,38,39,44,47],
    [86,87,88,89,90,91,92,93,94,95],
    [44,66,67,69,81,82,83,84,85,92,93,94,95],
    [66,76,77,78,79,83,84,85],
    [],
    [7,9,16,33,59],
    [],
    [2,14,15,80],
    [45,47,49,80,85],
    [70,71,72,73,74,75,85],
    [70,71,72,73,74,75,85],
    [2,7,16,88],
    [2,3,6,7,9,16,88,89,90,91],
    [66,69,83,84,85,92,93,94,95],
    [1,2,3,6,7,9,14,15,16,24,33,69,73,76,80,88,89,90],
    [7,9,16,33]
  ],
  "paper-roadmap": [
    [1,2,7,80,86,87,88,89,90,91],
    [1,2,7,80,86,87,88,89,90,91],
    [1,2,7,80,86,87,88,89,90,91],
    [66,83,84,86,87,88,89,90,91,92,93,94,95],
    [88,89],
    [],
    [1,2,3,6,7,9,80,88,89]
  ]
};

export const NEXT_PAPER_PAGE_DETAILS = {
  "paper-method": {
    en: {
      overview: "The recommended method audits candidate-specific behavioral echoes rather than assuming one universal boundary signal. It combines paired boundary transitions, structural/POS templates, and rare-error or action patterns with candidate-only discovery, fresh held-out scoring, and a selection-valid max-statistic.",
      terms: ["behavioral echo", "boundary signature", "structural/POS signature", "error/action signature", "selection-valid maxT", "demo gate"],
      questions: ["Which non-task-essential teacher property survives ordinary distillation?", "Does the omnibus improve over the strongest single signature?", "When should a failed boundary hypothesis change the paper direction?"]
    },
    zh: {
      overview: "推荐方法审计候选教师特异的行为回声，而不预设某一种边界信号普遍存在。它联合成对边界转移、结构/POS 模板和罕见错误或行动模式，采用候选特异发现、全新留出评分与选择有效的 max-statistic。",
      terms: ["行为回声", "边界签名", "结构/POS 签名", "错误/行动签名", "选择有效 maxT", "demo 门槛"],
      questions: ["普通蒸馏会保留哪一种非任务必需教师属性？", "联合检验是否超过最强单签名？", "边界假设失败时何时必须换论文方向？"]
    }
  },
  "paper-benchmark": {
    en: {
      overview: "The benchmark is gated by a 32-model high-dose demo and an optional 32-model low-dose extension. Only after natural teacher-specific signatures are detected with model-level replication does the project launch the 72-run mechanism-isolation campaign, disclosed public pairs, and commercial observation.",
      terms: ["D0a", "paired seed block", "model-level inference", "conditional GO", "G0 mechanism isolation", "signature baseline"],
      questions: ["Do natural signatures survive ordinary output distillation?", "Are control arms clean at model-level FWER?", "Does dose increase the signature for both teachers?"]
    },
    zh: {
      overview: "基准首先运行 32 模型高剂量 demo，并仅在通过后增加 32 个低剂量模型。只有自然教师特异签名在模型级独立重复上成立，项目才启动 72 次机制隔离、公开蒸馏模型和商业观察。",
      terms: ["D0a", "配对种子区组", "模型级推断", "有条件 GO", "G0 机制隔离", "单签名基线"],
      questions: ["自然签名是否随普通输出蒸馏保留？", "控制臂的模型级 FWER 是否受控？", "两个教师是否都呈现剂量增强？"]
    }
  },
  "paper-roadmap": {
    en: {
      overview: "The roadmap is falsification-first. D0 decides whether passive black-box lineage auditing is viable, whether only non-boundary signatures should remain, or whether the project should pivot to non-causal convergence analysis or active trace watermarking.",
      terms: ["falsification-first", "D0 GO", "conditional direction", "passive audit no-go", "active trace watermark", "bounded claim"],
      questions: ["What evidence justifies starting the full campaign?", "Which result deletes the boundary claim?", "Which failure stops passive lineage inference entirely?"]
    },
    zh: {
      overview: "路线采用先证伪后扩展。D0 决定被动黑盒谱系审计是否可行、是否只保留非边界签名，或是否应转向非因果收敛分析与主动轨迹水印。",
      terms: ["先证伪后扩展", "D0 GO", "有条件方向", "被动审计停止", "主动轨迹水印", "结论边界"],
      questions: ["什么证据足以启动完整实验？", "什么结果要求删除边界主张？", "什么失败会彻底停止被动谱系推断？"]
    }
  }
};
