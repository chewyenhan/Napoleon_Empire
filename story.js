const script = {
    "START": {
        text: "1804年，拿破仑加冕称帝，法兰西第一帝国成立。在接下来这十年的风起云涌中，你将以何种身份，见证这段波澜壮阔的历史？",
        img: "assets/start_bg.png",
        choices: [
            { text: "帝国军官（剑指全欧）", target: "officer_1" },
            { text: "内政法官（秩序基石）", target: "judge_1" },
            { text: "反法同盟（民族觉醒）", target: "coalition_1" }
        ]
    },

    // ================= 帝国军官线：从征服到滑铁卢 =================
    "officer_1": {
        text: "1812年，皇帝计划集结六十万大军远征俄国，但也面临着西班牙半岛上源源不断的游击战消耗。作为高级参谋，你建议：",
        img: "assets/officer_bg.png",
        choices: [
            { text: "支持皇帝，主力全部投向俄国大平原！", target: "officer_russia_march", effect: { army: 20, score: 10, dev: 0 } },
            { text: "建议先彻底平定西班牙，解除后顾之忧。", target: "officer_spain_deployment", effect: { wealth: -10, order: 20, score: 10, dev: 20 } }
        ]
    },

    "officer_russia_march": {
        text: "远征军挺进莫斯科，但俄军实施了“坚壁清野”。面对空荡荡且开始着火的城市，你的战术是：",
        img: "assets/russia_campaign.png",
        choices: [
            { text: "轻装简行，迅速突击圣彼得堡逼降沙皇。", target: "officer_russia_retreat", effect: { army: -30, morale: 10, score: 10, dev: 30 } },
            { text: "见好就收，在冬雪封路前立即有序撤退。", target: "officer_russia_retreat", effect: { army: -10, morale: -10, score: 10, dev: 0 } }
        ]
    },

    "officer_russia_retreat": {
        text: "撤退途中，严冬降临，哥萨克骑兵在别列津纳河发起袭扰。你的部队几乎冻僵，这是最艰难的时刻：",
        img: "assets/russia_campaign.png", 
        choices: [
            { text: "抛弃伤员和重炮，全力护送皇帝突围。", target: "officer_leipzig_rally", effect: { army: -50, morale: -20, score: 5, dev: 10 } },
            { text: "亲自殿后，掩护残部一节一节退回波兰。", target: "officer_leipzig_rally", effect: { army: -30, morale: 20, score: 20, dev: 0 } }
        ]
    },

    "officer_spain_deployment": {
        text: "在西班牙的山区，当地游击队（Guerrilla）让法军苦不堪言。英军将领威灵顿也已登陆。你决定：",
        img: "assets/spain_war.png",
        choices: [
            { text: "实施恐怖统治，铁腕镇压任何反抗者。", target: "officer_spain_retreat", effect: { order: 30, morale: -20, dev: 50, score: 5 } },
            { text: "修筑坚固堡垒链，保护补给线而非主动出击。", target: "officer_spain_retreat", effect: { wealth: -20, order: 10, score: 10, dev: 10 } }
        ]
    },

    "officer_spain_retreat": {
        text: "1813年维多利亚战役大败，法军被迫撤出西班牙。联军已逼近比利牛斯山脉，帝国的南大门摇摇欲坠：",
        img: "assets/spain_war.png",
        choices: [
            { text: "在山隘处修筑防线，拼死阻挡联军北上。", target: "officer_paris_defense_1814", effect: { army: -20, order: 20, score: 10, dev: 0 } },
            { text: "撤回主力支援巴黎，放弃所有占领地。", target: "officer_paris_defense_1814", effect: { army: 20, order: -40, score: 5, dev: 20 } }
        ]
    },

    "officer_leipzig_rally": {
        text: "1813年，反法同盟空前强大。在莱比锡平原，第六次同盟军层层包围了法军。这场“民族之战”决定帝国的命运：",
        img: "assets/leipzig.png",
        choices: [
            { text: "亲率近卫军冲锋，试图撕开包围圈！", target: "officer_paris_defense_1814", effect: { army: -40, morale: 30, score: 10, dev: 0 } },
            { text: "有条件地向联军提出停战谈判，寻求体面和平。", target: "officer_paris_defense_1814", effect: { alliance: 20, morale: -20, score: 5, dev: 40 } }
        ]
    },

    "officer_paris_defense_1814": {
        text: "1814年，联军攻入法国本土。皇帝在“六日战役”中展现了最后的军事天才，但巴黎已危在旦夕，元帅们开始动摇：",
        img: "assets/paris_defense.png",
        choices: [
            { text: "建议皇帝死守巴黎，动员所有市民进行巷战。", target: "officer_hundred_days", effect: { army: -20, morale: -10, dev: 0, score: 15 } },
            { text: "认为大势已去，建议皇帝退位以保全法兰西。", target: "officer_hundred_days", effect: { army: 10, morale: -30, dev: 30, score: 10 } }
        ]
    },

    "officer_hundred_days": {
        text: "皇帝被放逐到厄尔巴岛。但1815年春，他奇迹般地逃回法国，军队成建制地倒戈追随。帝国的鹰旗再次升起：",
        img: "assets/hundred_days.png",
        choices: [
            { text: "再次披上军装，追随皇帝进行最后的豪赌。", target: "officer_waterloo", effect: { army: 40, morale: 50, dev: 0, score: 10 } },
            { text: "拒绝回归，在乡间静观这场注定失败的冒险。", target: "officer_ai", effect: { army: 0, morale: -50, dev: 60, score: 5 } }
        ]
    },

    "officer_waterloo": {
        text: "1815年，皇帝从厄尔巴岛归来。在滑铁卢的雨后泥泞中，威灵顿的红衣军阵地固若金汤。格鲁希元帅的援军迟迟未到……",
        img: "assets/waterloo.png",
        choices: [
            { text: "发起最后的冲锋，为了法兰西的荣光！", target: "officer_ai", effect: { army: -50, score: 10, dev: 0 } },
            { text: "意识到时代已逝，下令残部撤出战场保存火种。", target: "officer_ai", effect: { army: 10, morale: -40, score: 5, dev: 30 } }
        ]
    },

    "officer_ai": {
        text: "1815年，滑铁卢的硝烟散去，拿破仑再次宣布退位，帝国的太阳彻底落下。巴黎再次被联军占领。作为前帝国高级将领，你站在了反法同盟的军事法庭上。面对着冷酷的威灵顿公爵，你如何辩护你的军事生涯？",
        img: "assets/paris_fall.png",
        ai_eval: true,
        ai_role: "officer"
    },

    // ================= 内政法官线：核心 KPI [财富、秩序、偏离] =================
    "judge_1": {
        text: "1804年，作为内政大臣的副手，你负责建立帝国的官僚体系。皇帝要在全欧洲推行《民法典》，你的首要任务是：",
        img: "assets/judge_bg.png",
        choices: [
            { text: "建立公立学校（Lycée），向全社会开放知识以选拔人才。", target: "judge_education_reform", effect: { wealth: -20, order: 10, score: 10, dev: 0 } },
            { text: "强化总督制度（Prefect），通过强力的行政垂直管理维持稳定。", target: "judge_central_power", effect: { wealth: -10, order: 30, score: 10, dev: 20 } }
        ]
    },

    "judge_education_reform": {
        text: "教育改革带来了人才，但也让自由思想在青年中蔓延。面对学生们的政治要求，你建议：",
        img: "assets/education_reform.png",
        choices: [
            { text: "完善民法典，通过法律明确保护民众的平等和私有财产。", target: "judge_economic_crisis", effect: { wealth: 10, order: 20, score: 15, dev: 0 } },
            { text: "收紧审查，利用官职与勋章诱导精英阶层效忠帝国。", target: "judge_economic_crisis", effect: { wealth: -10, order: 20, score: 5, dev: 40 } }
        ]
    },

    "judge_central_power": {
        text: "中央集权极大地提高了税收效率，但导致各地官员腐败。面对举报，你决定：",
        img: "assets/judge_bg.png",
        choices: [
            { text: "建立严密的审计与警察网络，铁腕打击贪腐。", target: "judge_economic_crisis", effect: { wealth: 20, order: 40, score: 10, dev: 50 } },
            { text: "下放部分权力给地方议会，实行有限的行政自治。", target: "judge_economic_crisis", effect: { wealth: -10, order: -10, score: 10, dev: 10 } }
        ]
    },

    "judge_economic_crisis": {
        text: "为了封锁英国，帝国实施了“大陆封锁”。但随着海运停滞，物价飞涨。帝国财政面临崩盘，皇帝要求你解决钱的问题：",
        img: "assets/economic_crisis.png",
        choices: [
            { text: "建立法兰西银行，通过金融信用手段稳定币值与市场。", target: "judge_imperial_collapse", effect: { wealth: 20, order: 10, score: 15, dev: 0 } },
            { text: "对占领区和附属国强行征收“战争税”以填补赤字。", target: "judge_imperial_collapse", effect: { wealth: 50, order: -30, score: 5, dev: 40 } }
        ]
    },

    "judge_imperial_collapse": {
        text: "1814年联军兵临巴黎。政府办公大楼里一片混乱，人们正忙着逃命。你面前是帝国十年的行政机密与法典原件：",
        img: "assets/civil_unrest.png", 
        choices: [
            { text: "留下来保护《民法典》原件和法学档案，确保文明的火种。", target: "judge_ai", effect: { wealth: -10, order: 20, score: 20, dev: 0 } },
            { text: "销毁所有敏感文件，带着这些年积攒的财物秘密离开巴黎。", target: "judge_ai", effect: { wealth: 40, order: -50, score: 0, dev: 80 } }
        ]
    },

    "judge_ai": {
        text: "维也纳会议。波旁王朝复辟。作为前帝国的内政精英，你站在了保守派巨头梅特涅面前。他正考虑是否要废除那部充满革命气息的《民法典》。你如何辩护？",
        img: "assets/civil_code.png",
        ai_eval: true,
        ai_role: "judge"
    },

    // ================= 反法同盟线：自由的呐喊 =================
    "coalition_1": {
        text: "你是一位被法军占领区的自由斗士。法国大革命带来了自由的种子，但拿破仑的战马也践踏了你的祖国。你选择：",
        img: "assets/coalition_bg.png",
        choices: [
            { text: "笔为武器：印发传单，唤醒同胞的民族意识。", target: "coalition_intel_war", effect: { morale: 20, alliance: 10, score: 10, dev: 0 } },
            { text: "以牙还牙：破坏法军补给线，袭击孤立的哨所。", target: "coalition_guerrilla_cell", effect: { army: 10, order: -20, score: 10, dev: 20 } }
        ]
    },

    "coalition_intel_war": {
        text: "你的传单在黑市上流传，甚至连法军将领中也有人心生动摇。下一步行动是：",
        img: "assets/intel_war.png",
        choices: [
            { text: "利用重金和理想，贿赂法军元帅投靠同盟。", target: "coalition_liberation_war", effect: { wealth: -30, alliance: 30, score: 10, dev: 10 } },
            { text: "向反法大国（英、俄）出卖法军的核心军事情报。", target: "coalition_liberation_war", effect: { alliance: 40, army: 10, dev: 30, score: 10 } }
        ]
    },

    "coalition_guerrilla_cell": {
        text: "游击战让法军焦头烂额，但他们开始实施报复。为了保护村庄，你决定：",
        img: "assets/coalition_rise.png",
        choices: [
            { text: "将起义军化整为零，转入地下长期抗战。", target: "coalition_liberation_war", effect: { army: -10, morale: 20, score: 10, dev: 0 } },
            { text: "在城镇公开起义，逼迫法军在巷战中消耗。", target: "coalition_liberation_war", effect: { army: -30, morale: 40, dev: 40, score: 5 } }
        ]
    },

    "coalition_liberation_war": {
        text: "1813年，“解放战争”席卷欧洲。全欧的民族都拿起了武器。在决定性的时刻，你带领你的民族加入：",
        img: "assets/coalition_rise.png",
        choices: [
            { text: "加入正规军大方阵，与拿破仑进行正面决战。", target: "coalition_march_paris", effect: { army: -20, alliance: 20, score: 10, dev: 0 } },
            { text: "作为侦察和散兵，在侧翼切断法军的撤退路线。", target: "coalition_march_paris", effect: { army: 10, alliance: 10, score: 10, dev: 10 } }
        ]
    },

    "coalition_march_paris": {
        text: "1814年，联军攻入巴黎。但在维也纳会议谈判期间，拿破仑从厄尔巴岛逃回的消息传来，全欧再次陷入恐慌：",
        img: "assets/march_paris.png",
        choices: [
            { text: "支持各国放下私利，组建第七次同盟彻底消灭他。", target: "coalition_vienna_crisis", effect: { alliance: 30, army: 20, score: 15, dev: 0 } },
            { text: "怀疑大国君主在利用战争剥夺我们的民族自由。", target: "coalition_vienna_crisis", effect: { morale: 20, alliance: -20, score: 10, dev: 30 } }
        ]
    },

    "coalition_vienna_crisis": {
        text: "滑铁卢的硝烟散去，拿破仑被永久流放。现在，真正的较量在维也纳的谈判桌上开始了。你要争取的是：",
        img: "assets/nations_spring.png",
        choices: [
            { text: "坚持民族自决，要求完全的独立主权。", target: "coalition_ai", effect: { morale: 30, alliance: -30, score: 20, dev: 0 } },
            { text: "接受现有的领土划分，换取地区的长期和平。", target: "coalition_ai", effect: { alliance: 20, order: 20, score: 10, dev: 40 } }
        ]
    },

    "coalition_ai": {
        text: "在沙皇亚历山大一世面前，你的人民是获得自由，还是沦为新的大国附属品？请陈述你的人民为此付出的牺牲与理由。",
        img: "assets/nations_spring.png",
        ai_eval: true,
        ai_role: "coalition"
    }
};