export interface Game {
  id: number;
  title: string;
  category: string;
  rating: number;
  image: string;
  description: string;
  gameUrl: string;
  features: string[];
  howToPlay: string;
}

export const games: Game[] = [
  {
    id: 1,
    title: 'Monster Survivors',
    category: '冒险',
    rating: 4.8,
    image: '/games/monster-survivors.jpg',
    description: '在这个充满怪物的世界中生存下去！收集武器和道具，升级你的角色，在每一波怪物袭击中活下来。',
    gameUrl: 'https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html',
    features: [
      '丰富的角色技能系统',
      '多样的武器选择',
      '随机生成的地图',
      '渐进式的难度曲线',
      '独特的像素画风格'
    ],
    howToPlay: `
      1. 使用WASD或方向键移动角色
      2. 自动攻击最近的敌人
      3. 收集经验宝石来升级
      4. 升级时选择新的武器或升级现有武器
      5. 尽可能长时间生存
      注意：游戏难度会随时间推移逐渐增加，请合理规划你的升级路线！
    `
  },
  {
    id: 2,
    title: '开心消消乐',
    category: '休闲',
    rating: 4.6,
    image: '/games/match3.jpg',
    description: '经典三消游戏，简单易上手，关卡丰富多样。通过消除相同图案获得高分，解锁特殊道具。',
    gameUrl: 'https://example.com/match3',
    features: [
      '简单易上手',
      '数百个精心设计的关卡',
      '丰富的特殊道具',
      '无需注册即可游玩',
      '支持存档功能'
    ],
    howToPlay: `
      1. 点击并交换相邻的图案
      2. 连接三个或以上相同图案即可消除
      3. 达到目标分数即可通关
      4. 特殊组合可以触发强大效果
      5. 合理利用限定步数来完成目标
    `
  },
  {
    id: 3,
    title: '花园物语',
    category: '模拟',
    rating: 4.9,
    image: '/games/garden-story.jpg',
    description: '打造你的梦想花园！种植美丽的花朵，装饰你的花园，与可爱的小动物互动。一个轻松愉快的园艺模拟游戏。',
    gameUrl: 'https://example.com/garden-story',
    features: [
      '丰富的植物品种',
      '可爱的动物伙伴',
      '季节变化系统',
      '创意装饰选项',
      '轻松的游戏节奏'
    ],
    howToPlay: `
      1. 选择适合的土地开始种植
      2. 定期浇水和施肥
      3. 收获成熟的植物
      4. 装饰你的花园
      5. 与小动物互动增加趣味性
    `
  },
  {
    id: 4,
    title: '数独大师',
    category: '益智',
    rating: 4.7,
    image: '/games/sudoku.jpg',
    description: '经典数独游戏，提供多个难度等级。锻炼逻辑思维，提升解题能力。适合所有喜欢动脑的玩家。',
    gameUrl: 'https://example.com/sudoku',
    features: [
      '多个难度等级',
      '智能提示系统',
      '成就解锁系统',
      '每日挑战模式',
      '计时排行榜'
    ],
    howToPlay: `
      1. 选择合适的难度开始游戏
      2. 在空格中填入1-9的数字
      3. 确保每行、每列和每个3x3宫格中的数字不重复
      4. 使用提示功能帮助解题
      5. 完成谜题获得奖励
    `
  },
  {
    id: 5,
    title: '公主装扮秀',
    category: '休闲',
    rating: 4.5,
    image: '/games/princess-dress.jpg',
    description: '为公主挑选完美的装扮！包含数百件精美服装、配饰和妆容。创造属于你的童话故事。',
    gameUrl: 'https://example.com/princess-dress',
    features: [
      '海量服装选择',
      '精美的画面风格',
      '创意搭配玩法',
      '场景主题多样',
      '支持保存造型'
    ],
    howToPlay: `
      1. 选择喜欢的公主角色
      2. 浏览并选择服装、配饰
      3. 搭配合适的妆容
      4. 选择适合的场景
      5. 保存你的作品并分享
    `
  },
  {
    id: 6,
    title: '魔法学院',
    category: '角色扮演',
    rating: 4.8,
    image: '/games/magic-academy.jpg',
    description: '成为一名魔法学院的学生，学习各种魔法，结交新朋友，探索神秘的魔法世界。',
    gameUrl: 'https://example.com/magic-academy',
    features: [
      '丰富的剧情故事',
      '多样的魔法系统',
      '社交互动系统',
      '探索解密元素',
      '个性化角色培养'
    ],
    howToPlay: `
      1. 创建你的魔法师角色
      2. 参加各种魔法课程
      3. 完成任务获得奖励
      4. 与其他角色互动
      5. 探索学院的秘密
    `
  },
  {
    id: 7,
    title: '城市规划师',
    category: '策略',
    rating: 4.7,
    image: '/games/city-planner.jpg',
    description: '建造和管理你的理想城市！平衡发展与环保，创造一个繁荣的都市。',
    gameUrl: 'https://example.com/city-planner',
    features: [
      '自由建造系统',
      '经济管理模式',
      '环境影响系统',
      '市民满意度',
      '灾害应对机制'
    ],
    howToPlay: `
      1. 规划城市布局
      2. 建设基础设施
      3. 管理城市预算
      4. 解决市民需求
      5. 应对突发事件
    `
  },
  {
    id: 8,
    title: '甜品工坊',
    category: '模拟',
    rating: 4.6,
    image: '/games/dessert-shop.jpg',
    description: '经营你的甜品店！制作美味的蛋糕、饼干和其他甜点，让顾客开心满意。',
    gameUrl: 'https://example.com/dessert-shop',
    features: [
      '多样的甜点配方',
      '店铺装修系统',
      '顾客互动机制',
      '成就解锁系统',
      '季节限定活动'
    ],
    howToPlay: `
      1. 选择要制作的甜点
      2. 按照配方准备材料
      3. 装饰成品
      4. 招待顾客
      5. 升级店铺设施
    `
  }
];

export const getGameById = (id: number): Game | undefined => {
  return games.find(game => game.id === id);
};

export const getGamesByCategory = (category: string): Game[] => {
  return category === '全部' 
    ? games 
    : games.filter(game => game.category === category);
};

export const searchGames = (query: string): Game[] => {
  const lowercaseQuery = query.toLowerCase();
  return games.filter(game => 
    game.title.toLowerCase().includes(lowercaseQuery) ||
    game.description.toLowerCase().includes(lowercaseQuery)
  );
}; 