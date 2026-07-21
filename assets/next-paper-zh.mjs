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
        title: "两个估计目标：群体迁移与单模型检测",
        body: `<p>整个研究计划包含两个不能混用的估计目标。<strong>D0 群体可行性</strong>检验：在冻结训练流程下，把教师 <em>Tᵢ</em> 的输出分配给学生，是否会在独立训练模型总体上造成平均签名变化：</p><div class="equation">τ<sub>i,s</sub>=E[g<sub>s</sub>(S(T<sub>i</sub>))]−E[g<sub>s</sub>(S(control))]. <span class="eq-label">(3)</span></div><p>D0 只能支持“该训练流程在总体上造成行为回声”，不能估计一个未知模型被误指控或正确检测的概率。</p><p><strong>D1 单模型检测</strong>则冻结针对一个未见待审计模型的判定规则 <em>δ</em><sub>i</sub>(S)，并在完全未触碰的模型上评价 sensitivity、specificity、false attribution、证据集合 precision 与 abstention。两类研究都以训练模型为重采样和置换单位，提示与重复生成只是嵌套测量。</p><p>D0 使用种子区组的因果对比，只检验任一签名是否在总体上传递。D1 把签名发现、阈值校准和最终确认分配给三个独立模型集合；D0 模型不能进入 D1 确认集。</p>`
      },
      {
        title: "选择有效的候选特异发现",
        body: `<p>在查询模型之前，把提示模板、任务生成器和语义家族划分为发现区与互不重叠的推断区。对每个候选和签名家族，发现阶段依据候选稳定性与控制差异选择变换规则、结构模板集合或错误/行动 motif：</p><div class="equation">A<sub>i,s</sub>(D<sub>disc</sub>)=argmax<sub>A∈𝒜<sub>s</sub></sub>[Specificity<sub>i</sub>(A)·Stability<sub>i</sub>(A)·(1−ControlTransfer(A))]. <span class="eq-label">(4)</span></div><p>选中的对象必须在推断区中使用全新的实体、数值、选项、响应提示或工具场景实例化；发现样本和近重复不得复用。每个有效随机化内部都要重跑 <em>A</em><sub>i,s</sub>。缓存发现响应可以让这一过程不增加模型查询。所有基线使用完全相同的发现和推断预算。</p>`
      },
      {
        title: "独立校准后的单模型判定规则",
        body: `<p>三态候选结论属于 D1，而不是 D0。对一个完全未见的待审计模型，冻结规则输出：</p><div class="equation">d<sub>i</sub>(S)∈{检测到,未检测到,结论不充分},\quad Ê<sub>α</sub>(S)={T<sub>i</sub>:d<sub>i</sub>(S)=检测到}. <span class="eq-label">(5)</span></div><p><strong>检测到：</strong>冻结的 omnibus 得分超过在独立模型 replica 上校准的候选阈值，并通过多重比较校正。<strong>未检测到：</strong>三个签名在预注册分辨率下都可忽略，而且确认集能够支持相应模型级功效。<strong>结论不充分：</strong>两者均不成立，或待审计模型超出校准范围。</p><p>D1 分别报告候选缺失模型上的误指控率、单候选与集合值 precision、coverage、abstention 和 sensitivity。签名后续检验只能说明哪一种可观察回声参与了判定，不能唯一确定响应、推理或偏好监督；证据集合不是因果来源集合 [[2,7]]。</p>`
      },
      {
        title: "模型级功效与查询预算",
        body: `<p>增加提示只会提高单个模型的测量精度，不能增加独立模型数。D0 需要为配对种子区组的群体处理效应做功效规划；D1 则独立为未见模型上的 sensitivity、false attribution 与 abstention 精度规划模型数量。</p><p>发现查询、校准查询和确认查询必须分别预算。D1 确认开始前，冻结逐签名得分、候选集合、max-statistic、候选阈值、可忽略效应区间、拒绝判断规则、解码协议和全部排除规则。确认阶段不得自适应修改。</p><p>每个操作指标都报告模型级置信区间；提示簇和重复采样方差在模型内部按层级处理，不能替代独立训练模型。</p>`
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
        body: `<div class="survey-note"><b>D0 群体主张</b>检验普通教师输出分配是否在随机化学生 replica 总体上造成候选特异行为回声。D0 不验证单个模型检测器。</div><div class="survey-note"><b>D1 检测器主张</b>只有独立发现、独立校准并在未触碰确认模型上评价后，才能报告 sensitivity、specificity、false attribution、集合 precision 与 abstention。</div><div class="survey-note"><b>有条件方向</b>若总体上只有结构或行动签名传递，在进入 D1 前删除边界中心主张。</div><div class="survey-note"><b>NO-GO 后备方向</b>若匹配控制下没有自然签名总体迁移，停止被动谱系推断，转向非因果收敛分析、主动轨迹水印或提供方遥测 [[88,89]]。</div>`
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
        title: "D0 · 群体层自然签名可行性",
        body: `<p>D0 只回答一个群体层因果问题：在冻结训练流程下，把候选教师 T₁ 或 T₂ 的普通输出分配给学生，是否会在独立训练学生总体上造成正向行为回声效应。D0 <strong>不验证</strong>单个未知模型的检测器。</p><table class="matrix"><thead><tr><th>组成</th><th>冻结设计</th></tr></thead><tbody><tr><td>候选教师</td><td><code>Qwen/Qwen3-8B</code> 与 <code>meta-llama/Llama-3.1-8B-Instruct</code> [[92,93]]</td></tr><tr><td>学生</td><td><code>Qwen/Qwen3-1.7B-Base</code>，LoRA rank 16；四臂共享配对种子区组初始化 [[94]]</td></tr><tr><td>控制</td><td><code>Qwen/Qwen3-1.7B</code> 影子教师输出与公开参考目标 [[95]]</td></tr><tr><td>D0a 高剂量</td><td>T₁、T₂、影子和公开目标四臂；每臂 8 个匹配独立种子，共 <strong>32 个训练模型</strong></td></tr><tr><td>训练混合</td><td>每个模型使用完全相同提示和 <strong>8M 目标 token</strong>；精确数据集与划分在第 2 步单独冻结</td></tr><tr><td>留出测量</td><td>300 个边界、300 个结构/POS 和 300 个错误/推理/行动样本；提示只是嵌套测量</td></tr></tbody></table><p>主要估计量是配对模型级效应 τ<sub>T₁,s</sub> 与 τ<sub>T₂,s</sub>。在打开处理臂标签前冻结签名定义和最小群体效应 δ<sub>pop</sub>；种子区组才是随机化与重采样单位。</p><h3>D0a 决策</h3><ul><li><strong>群体 GO：</strong>多重比较校正后，至少一个签名在两个教师上的同时下置信界都超过预注册 δ<sub>pop</sub>，并在全新任务家族复现。δ<sub>pop</sub> 根据盲化 pilot/控制方差与计划查询预算在开标签前冻结。</li><li><strong>有条件 GO：</strong>结构或错误/行动签名在两个教师上迁移，但边界不迁移；进入下一阶段前删除边界中心主张。</li><li><strong>NO-GO：</strong>没有签名在两个教师上总体迁移、效应在全新任务上消失，或影子/公开控制可以同样解释效应。停止开发单模型检测器。</li></ul><p><strong>D0b 群体剂量研究：</strong>只有群体 GO 后，才在 <strong>2M 目标 token</strong> 下重复四臂 32 模型。剂量响应需要两个教师的高减低剂量配对效应均为正。D0a/D0b 只支持群体结论。</p><p><strong>D0c 分解：</strong>后续打乱教师输出用于区分教师风格与输入条件迁移，不属于零控制。</p>`
      },
      {
        title: "D1 · 单模型检测器发现、校准与确认",
        body: `<p>D1 仅在 D0 群体 GO 后启动。D0 模型不能进入 D1 确认集，D1 确认模型也不能参与特征或阈值选择。固定七个来源臂：T₁、T₂、公开目标，以及四个在家族、规模、指令训练、数据质量、能力或共同上游方面匹配的替代/影子教师。</p><table class="matrix"><thead><tr><th>集合</th><th>模型级设计</th><th>允许用途</th></tr></thead><tbody><tr><td><strong>D1a 发现</strong></td><td>7 来源臂 × 4 个全新种子区组 = <strong>28 个模型</strong></td><td>选择并简化 B/S/E 特征，删除不稳定签名；不能估计部署阈值。</td></tr><tr><td><strong>D1b 校准</strong></td><td>7 来源臂 × 8 个全新种子区组 = <strong>56 个模型</strong></td><td>在模型级零分布重采样中重放完整发现流程；冻结 maxT、候选阈值、等效区间和 abstention。</td></tr><tr><td><strong>D1c 未触碰确认</strong></td><td>30 个 T₁ + 30 个 T₂ + 五个候选缺失控制臂各 12 个 = <strong>120 个模型</strong></td><td>评价冻结检测器；不得改变特征、阈值、候选集合或排除规则。</td></tr></tbody></table><p>确认目标使用精确模型级置信区间：候选缺失误指控率的单侧 95% 上界低于 5%；每个候选 sensitivity 的单侧 95% 下界至少 80%；错误候选纳入率上界低于 5%；正例、负例与超出校准范围模型的 abstention 分开报告。60 个候选缺失模型在零误指控时可把上界压到约 5% 以下。</p><p>主要结果是冻结操作点，而不是在确认集上优化 AUC。样本量可在预注册精度计算后增加，但确认开始后不得减少或更改。</p>`
      },
      {
        title: "基准模型分层与精确模型",
        body: `<table class="matrix"><thead><tr><th>证据层</th><th>精确模型</th><th>用途与允许解释</th></tr></thead><tbody><tr><td><strong>D0 · 群体可行性</strong></td><td>开放教师 <code>Qwen/Qwen3-8B</code>、<code>meta-llama/Llama-3.1-8B-Instruct</code>；学生 <code>Qwen/Qwen3-1.7B-Base</code></td><td>检验自然签名在测试训练流程下是否具有正向平均因果效应；不能验证单模型检测器 [[86,87,88,89,90,91,92,93,94]]。</td></tr><tr><td><strong>D1 · 单模型检测器验证</strong></td><td>全新 Qwen3-1.7B-Base 学生，来源覆盖 T₁、T₂、公开目标和多个同家族/跨家族影子教师</td><td>把发现、校准和未触碰确认分开，评价 sensitivity、specificity、false attribution、集合 precision、coverage 与 abstention。</td></tr><tr><td><strong>G0 · 受控因果基准</strong></td><td>教师 <code>deepseek/deepseek-v4-flash</code>、<code>qwen/qwen3.7-plus</code>；学生 <code>Qwen/Qwen3-8B-Base</code></td><td>D0 通过后隔离响应、推理和偏好监督，用于机制恢复真实关系 [[66,83,84,85]]。</td></tr><tr><td><strong>G1 · 公开输出/推理蒸馏</strong></td><td>DeepSeek-R1-Distill-Qwen-{1.5B,7B,14B,32B} 与 Distill-Llama-{8B,70B}</td><td>外部教师家族正例；当前可调用 R1 快照未必是原始生成器 [[44,69]]。</td></tr><tr><td><strong>G2 · 多教师 logit 蒸馏</strong></td><td>Llama-3.2-{1B,3B}-Instruct；候选集合 Llama-3.1-{8B,70B}-Instruct</td><td>只评价集合值候选证据，不能强制选唯一教师 [[81]]。</td></tr><tr><td><strong>G3 · 剪枝加蒸馏</strong></td><td>NVIDIA Llama-3.1-Minitron-4B Width/Depth；候选 Llama-3.1-8B</td><td>混合流程案例，不能把信号单独归因于蒸馏 [[82]]。</td></tr><tr><td><strong>G4 · 商业观察</strong></td><td>六个版本固定的 OpenRouter 端点</td><td>没有真实谱系，只报告有方向候选证据与时间稳定性 [[85]]。</td></tr></tbody></table><p>所有 Hugging Face 检查点按 commit hash 固定；API 请求记录精确 slug、provider route、响应元数据、日期与请求 schema。不同证据层不能混合计算因果准确率。</p>`
      },
      {
        title: "G0 · D0 通过后的机制隔离 campaign",
        body: `<p>72 次训练只在 D0a GO 后启动。它不再检验“自然签名是否存在”，而是检验受控响应、推理和偏好监督是否产生可区分的签名画像。每个“机制 × 剂量”区组都包含四个等量处理臂。</p><table class="matrix"><thead><tr><th>实验臂</th><th>精确设计</th><th>模型数</th></tr></thead><tbody><tr><td>教师 T₁ 正例</td><td>3 个隔离机制 × 2 个监督剂量 × 3 个独立种子</td><td><strong>18</strong></td></tr><tr><td>教师 T₂ 正例</td><td>与 T₁ 相同的六个区组与种子编号</td><td><strong>18</strong></td></tr><tr><td>公开监督控制</td><td>3 机制 × 2 剂量 × 3 种子；相同提示和 token 预算，目标来自非教师公开金标或确定性规则</td><td><strong>18</strong></td></tr><tr><td>影子教师控制</td><td>3 机制 × 2 剂量 × 3 种子；使用独立开放模型 <code>Qwen/Qwen3-8B</code> 在相同提示和 token 预算下生成目标</td><td><strong>18</strong></td></tr><tr><td>总计</td><td><code>Qwen/Qwen3-8B-Base</code>，LoRA-r16</td><td><strong>72</strong></td></tr></tbody></table><p>低、高剂量为 3M 与 12M 教师监督 token。响应学生只优化最终短答案；推理学生优化结构化中间步骤并排除最终答案贡献；偏好学生使用固定回答对与 A/B/平局判断，DPO β=0.1。所有处理臂在分析冻结前保持盲化。另一候选教师提供替代教师比较，影子教师臂控制合成输出训练与共享 Qwen 家族结构。</p>`
      },
      {
        title: "重复实验层级与推断单位",
        body: `<p>训练出的学生始终是独立实验单位。提示、任务模板、重复生成和解码样本属于嵌套测量。D0 在配对种子区组内随机四个处理臂，并跨区组估计群体因果效应。</p><p>D1 使用全新模型：发现模型可定义特征，校准模型可确定阈值，确认模型只能由冻结流程评分。确认重采样和精确二项区间都在模型层执行，不能用提示级 bootstrap 替代模型数量。</p><p>商业端点没有训练 replica；不同日期和 API 会话只评价观察稳定性，不能继承 D0/D1 的因果或误差保证。</p>`
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
        body: `<p><strong>D0 群体指标：</strong>配对种子区组效应 τ<sub>i,s</sub>、同时模型级置信区间、校正后的群体 omnibus p 值，以及全新任务家族复现。D0 不报告 detector sensitivity、specificity 或 false attribution。</p><p><strong>D1 检测器指标：</strong>冻结操作点下的 sensitivity、specificity、候选缺失误指控、错误候选纳入、单元素/集合 precision、coverage、abstention 和实践等效性，全部使用精确模型级区间。AUC 只是次要诊断。</p><p><strong>G0 机制指标：</strong>响应、推理与偏好隔离学生之间的签名画像分离，独立于 D1 检测器可靠性评价。外部不确定性包括校准范围不匹配、接口缺失、端点漂移与签名冲突。</p>`
      },
      {
        title: "核心实验矩阵",
        body: `<table class="matrix"><thead><tr><th>实验轴</th><th>必要取值</th></tr></thead><tbody><tr><td>研究阶段</td><td>D0 群体可行性；D1 发现/校准/确认；G0 机制隔离；外部 G1–G4</td></tr><tr><td>签名家族</td><td>边界、结构/POS、罕见错误/推理/行动</td></tr><tr><td>训练关系</td><td>公开目标、影子教师、单一候选教师、有限双教师</td></tr><tr><td>G0 训练机制</td><td>响应、推理、偏好；安全/工具为扩展</td></tr><tr><td>候选池</td><td>2、5、10+，以及真实教师缺失</td></tr><tr><td>控制</td><td>公开目标、同家族影子教师、替代候选教师、共享基础、共享数据、共同第三教师</td></tr><tr><td>选择协议</td><td>候选特异发现、全新推断实例、嵌套重跑校准</td></tr><tr><td>后处理</td><td>继续 SFT、改写、量化、合并</td></tr></tbody></table>`
      },
      {
        title: "带成本的实验设计矩阵",
        body: `<p>成本用教师输出 token、训练运行数、本地生成与 API 调用表示。</p><table class="matrix"><thead><tr><th>阶段</th><th>工作量</th><th>训练 / 模型数</th><th>允许结论</th></tr></thead><tbody><tr><td>D0a 群体可行性</td><td>2 候选教师 + 影子教师 + 公开目标；8 个配对种子；8M token</td><td><strong>32 个模型</strong></td><td>平均因果签名迁移</td></tr><tr><td>D0b 剂量扩展</td><td>群体 GO 后在 2M token 下重复四臂</td><td><strong>新增 32 个</strong>；D0 共 64</td><td>群体剂量响应</td></tr><tr><td>D1a 发现</td><td>7 来源臂 × 4 个新种子</td><td><strong>28 个模型</strong></td><td>只开发签名定义</td></tr><tr><td>D1b 校准</td><td>7 来源臂 × 8 个新种子</td><td><strong>56 个模型</strong></td><td>冻结 maxT、阈值、等效区间与 abstention</td></tr><tr><td>D1c 确认</td><td>60 个候选正例 + 60 个候选缺失控制</td><td><strong>120 个未触碰模型</strong></td><td>单模型操作指标</td></tr><tr><td>G0 机制隔离</td><td>2 候选教师 + 公开/影子控制 × 3 机制 × 2 剂量 × 3 种子</td><td><strong>72 次训练</strong></td><td>机制画像证据</td></tr><tr><td>外部与 OpenRouter</td><td>公开模型与六端点三日期</td><td>不训练</td><td>各证据层允许的外部/观察结论</td></tr></tbody></table><p>D0 是第一道科学门槛，D1 是检测器可靠性门槛，G0 与商业观察不能替代二者。所有运行记录 GPU 小时、教师输出 token、墙钟时间、检查点 hash、来源臂与随机种子。</p>`
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
        body: `<div class="definition-box"><b>D0 通过后的群体主张</b>在测试训练流程下，普通输出蒸馏会在独立训练学生总体上造成至少一种候选特异、非任务必需行为签名的平均迁移。</div><div class="definition-box"><b>D1 确认后的检测器主张</b>一个前瞻冻结的黑盒规则可以在其校准范围内，对完全未见模型达到预注册的 sensitivity、false attribution、错误候选和 abstention 保证。</div><p>第一个主张不自动推出第二个。D0 成功而 D1 失败时，只能报告群体层行为收敛，不能声称可靠单模型审计。若只有结构或行动签名迁移，在 D1 前删除一般边界主张。</p>`
      },
      {
        title: "贡献结构",
        body: `<ol><li><strong>群体问题：</strong>随机分配教师输出是否在总体上造成候选特异行为回声？</li><li><strong>单模型检测：</strong>独立发现、校准和确认的规则能否控制误指控和拒绝判断？</li><li><strong>签名家族：</strong>边界、结构/POS 和错误/推理/行动三个互补通道，每个通道可独立证伪。</li><li><strong>评价：</strong>D0 群体可行性、D1 模型级检测器验证、G0 机制隔离、分层公开蒸馏对、服务压力测试和有边界的 OpenRouter 观察。</li></ol>`
      },
      {
        title: "建议论文结构",
        body: `<div class="steps"><div class="step"><strong>Introduction：</strong>已有工作显示多类教师特异属性可以迁移，但没有自然签名被证明普遍存在。</div><div class="step"><strong>Problem：</strong>候选条件证据、三态结论、候选池缺失与因果/观察边界。</div><div class="step"><strong>Behavioral-echo method：</strong>三个签名家族、候选特异发现、全新实例、算法级零分布与 maxT。</div><div class="step"><strong>D0 群体可行性：</strong>配对种子区组估计平均因果迁移，不报告检测器准确率。</div><div class="step"><strong>D1 单模型验证：</strong>独立发现、独立校准与未触碰确认，评价误指控、灵敏度和 abstention。</div><div class="step"><strong>Mechanism and external validation：</strong>G0 机制隔离、DeepSeek-R1、Llama 3.2、Minitron 与服务路径。</div><div class="step"><strong>Commercial API：</strong>只报告带版本和因果限制的观察性候选证据图。</div></div>`
      },
      {
        title: "分阶段执行计划",
        body: `<table class="matrix"><thead><tr><th>阶段</th><th>交付物</th><th>决策</th></tr></thead><tbody><tr><td>D0a · 群体可行性</td><td>32 个高剂量模型，覆盖两个教师臂和两个控制臂</td><td>只有两个教师都在全新任务上超过预注册 δ<sub>pop</sub> 才继续</td></tr><tr><td>D0b · 群体剂量响应</td><td>群体 GO 后增加 32 个低剂量模型</td><td>只从正向高减低配对效应主张剂量响应</td></tr><tr><td>D1a · 检测器发现</td><td>七来源臂的 28 个全新模型</td><td>冻结候选特征定义，不报告准确率</td></tr><tr><td>D1b · 检测器校准</td><td>七来源臂的 56 个全新模型</td><td>冻结 maxT、阈值、等效区间与 abstention</td></tr><tr><td>D1c · 未触碰确认</td><td>120 个全新模型：60 候选正例和 60 候选缺失</td><td>要求预注册模型级误差与 coverage 区间</td></tr><tr><td>G0 · 机制隔离</td><td>72 次机制受控训练</td><td>机制画像与检测器可靠性分开评价</td></tr><tr><td>外部与商业</td><td>公开模型、服务压力与 OpenRouter</td><td>只报告各证据层能够支持的结论</td></tr></tbody></table>`
      },
      {
        title: "继续 / 停止标准",
        body: `<div class="property-grid"><div class="property-card"><b>D0 群体 GO</b>至少一个签名在两个教师上的同时下界均超过 δ<sub>pop</sub>，并在全新任务家族复现。只允许群体迁移主张。</div><div class="property-card"><b>D1 检测器 GO</b>未触碰模型上：候选缺失误指控率 95% 上界&lt;5%，每个候选 sensitivity 下界≥80%，错误候选纳入上界&lt;5%，且不修改阈值。</div><div class="property-card"><b>有条件方向</b>D0 仅通过结构或行动签名；进入 D1 前删除边界迁移主张。</div><div class="property-card"><b>NO-GO / 后备</b>D0 失败则停止被动审计；D1 失败则只能保留群体收敛结论。必要时转向主动水印或提供方遥测。</div></div>`
      },
      {
        title: "可直接用于投稿的汇报模板",
        body: `<h3>D0 群体效应表</h3><table class="matrix"><thead><tr><th>教师</th><th>签名</th><th>配对效应 τ̂</th><th>同时区间</th><th>δ<sub>pop</sub></th><th>全新任务复现</th><th>群体结论</th></tr></thead><tbody><tr><td>Tᵢ</td><td>B / S / E</td><td>效应</td><td>[L,U]</td><td>边界</td><td>通过 / 失败</td><td>迁移 / 未解决 / 停止</td></tr></tbody></table><h3>D1 未触碰确认表</h3><table class="matrix"><thead><tr><th>指标</th><th>估计</th><th>精确 95% 区间</th><th>预注册目标</th><th>通过？</th></tr></thead><tbody><tr><td>候选缺失误指控</td><td>比例</td><td>[L,U]</td><td>上界&lt;5%</td><td>是/否</td></tr><tr><td>T₁ sensitivity</td><td>比例</td><td>[L,U]</td><td>下界≥80%</td><td>是/否</td></tr><tr><td>T₂ sensitivity</td><td>比例</td><td>[L,U]</td><td>下界≥80%</td><td>是/否</td></tr><tr><td>错误候选纳入</td><td>比例</td><td>[L,U]</td><td>上界&lt;5%</td><td>是/否</td></tr><tr><td>Abstention</td><td>正例 / 负例 / OOD</td><td>[L,U]</td><td>只报告，不在确认集事后优化</td><td>—</td></tr></tbody></table><h3>必须配套的表格</h3><ul><li><strong>D0 种子区组：</strong>处理臂、剂量、种子、三个签名效应、效用和全新任务复现。</li><li><strong>D1 开发审计：</strong>哪些模型用于发现、校准和确认；选中哪些特征；零分布如何重跑；冻结阈值与全部排除规则。</li><li><strong>D1 证据集合：</strong>每个确认模型的真实来源、候选集合、单元素/集合正确性、abstention 与校准范围状态。</li><li><strong>G0 与外部层：</strong>机制画像和 G1–G4 证据必须与 D1 操作指标分开报告。</li></ul><h3>有边界的结果表述</h3><div class="claim-box"><b>D0 群体结果</b>“随机分配 Tᵢ 输出使配对学生 replica 的 … 签名平均提高 …；这是测试训练流程下的群体效应，不是单模型检测器保证。”</div><div class="claim-box"><b>D1 检测到</b>“前瞻冻结的检测器在该未触碰模型上返回 Tᵢ；确认集的误指控与 sensitivity 区间达到预注册操作目标，且模型位于声明的校准范围内。”</div><div class="claim-box"><b>D1 结论不充分</b>“该模型未满足冻结的正向、负向或校准范围条件；当前证据不支持正向或负向谱系结论。”</div><div class="claim-box"><b>商业 API</b>“该端点结果属于观察性并受版本限制；D0/D1 的受控保证不能自动迁移到隐藏商业系统。”</div>`
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
    [1,2,7,14,15,80,92,93,94,95],
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
      overview: "The method now separates a D0 population-transfer estimand from a D1 individual-model detector. D0 asks whether randomized teacher-output assignment causes average behavioral echoes; D1 independently discovers, calibrates, and confirms a frozen multi-signature rule on untouched models.",
      terms: ["population estimand", "individual detector", "behavioral echo", "selection-valid maxT", "false attribution", "abstention"],
      questions: ["Which teacher property transfers on average?", "Can a frozen detector control false attribution on unseen models?", "When should population evidence remain separate from individual attribution?"]
    },
    zh: {
      overview: "方法现在把 D0 群体迁移估计量与 D1 单模型检测器彻底分开。D0 检验随机教师输出分配是否造成平均行为回声；D1 使用独立模型完成发现、校准和未触碰确认。",
      terms: ["群体估计量", "单模型检测器", "行为回声", "选择有效 maxT", "误指控", "拒绝判断"],
      questions: ["哪些教师属性会在总体上传递？", "冻结检测器能否在未见模型上控制误指控？", "何时群体证据不能升级为单模型归因？"]
    }
  },
  "paper-benchmark": {
    en: {
      overview: "The benchmark has two gates: D0 estimates population-level transfer across paired student replicas, while D1 uses separate discovery, calibration, and untouched confirmation cohorts to validate a detector for one model. G0 mechanism isolation and commercial observation occur only after the relevant gate passes.",
      terms: ["D0 population feasibility", "D1 discovery", "D1 calibration", "untouched confirmation", "false attribution", "G0 mechanism isolation"],
      questions: ["Does a signature transfer on average?", "Does the frozen detector meet model-level error targets?", "Which later experiments require D0 versus D1 GO?"]
    },
    zh: {
      overview: "基准包含两道门槛：D0 跨配对学生 replica 估计群体迁移，D1 使用独立发现、校准和未触碰确认模型验证单模型检测器。G0 机制隔离与商业观察只在对应门槛通过后启动。",
      terms: ["D0 群体可行性", "D1 发现", "D1 校准", "未触碰确认", "误指控", "G0 机制隔离"],
      questions: ["签名是否在总体上传递？", "冻结检测器是否达到模型级误差目标？", "哪些后续实验要求 D0 或 D1 通过？"]
    }
  },
  "paper-roadmap": {
    en: {
      overview: "The roadmap separates two claims: D0 may establish population-level behavioral transfer, while only D1 untouched confirmation can establish a reliable individual-model audit. Failure at either gate produces a different claim downgrade or stop decision.",
      terms: ["population GO", "detector GO", "claim downgrade", "untouched confirmation", "passive audit no-go", "bounded commercial claim"],
      questions: ["What does D0 allow us to claim?", "What model-level evidence is required for D1?", "Which failure stops attribution while preserving a population result?"]
    },
    zh: {
      overview: "路线区分两类主张：D0 可以建立群体层行为迁移，只有 D1 未触碰确认才能建立可靠单模型审计。两道门槛失败时对应不同的结论降级或停止条件。",
      terms: ["群体 GO", "检测器 GO", "结论降级", "未触碰确认", "被动审计停止", "商业结论边界"],
      questions: ["D0 允许支持什么结论？", "D1 需要什么模型级证据？", "什么失败会停止归因但保留群体结果？"]
    }
  }
};
