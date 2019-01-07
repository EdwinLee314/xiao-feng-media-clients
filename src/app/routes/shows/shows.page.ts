import { Component, OnInit } from '@angular/core';
import { ShowService } from 'src/app/core/services';

@Component({
  selector: 'app-shows',
  templateUrl: 'shows.page.html',
  styleUrls: ['shows.page.scss']
})
export class ShowsPage implements OnInit{

  programs = [
    {
      title: '智慧心语',
      shortcut: 'zhihuixinyu',
      short_description: '探索生命的奥秘，把握人生的际遇，解答生活的困惑。智慧心语是一档嘉宾访谈节目，刨根问底地带您认识智慧的源头。',
      description: '',
      show_cover: 'assets/shows/cover-zhihuixinyu-300px.jpg'
    },
    {
      title: '圣经智慧',
      shortcut: 'shengjingzhihui',
      short_description: '圣经智慧以最通俗易懂的话带你读懂整本圣经',
      description: '想了解《圣经》，却头痛厚厚的一本书不知从何学起？找到资料，却发现冗长而且学术，难以下咽？听听我们新推出的系列《圣经智慧》，每期只有10分钟，精彩讲解《圣经》内容，并联系生活教导其中智慧。',
      show_cover: 'assets/shows/cover-shengjingzhihui-300px.jpg'
    },
    {
      title: '生命奥秘',
      shortcut: 'shengmingaomi',
      short_description: '生命奥秘将用浅显的语言带您探索DNA遗传基因的奇妙',
      description: '',
      show_cover: 'assets/shows/cover-shengmingaomi-300px.jpg'
    },
    {
      title: '孩子心中的秘密',
      shortcut: 'haizixinzhongdemimi',
      short_description: '《孩子心中的秘密》一档以真人真事为题材，专家访谈指导、成功失败家长访谈的家庭教育广播系列节目。',
      description: '',
      show_cover: 'assets/shows/cover-haizixinzhongdemimi-300px.jpg'
    },
    {
      title: '相约92.3FM',
      shortcut: 'xiangyue923',
      short_description: '澳大利亚墨尔本多元文化电台每周晚10点到11点的一档和时事情感有关的节目',
      description: '',
      show_cover: 'assets/shows/cover-xiangyue923-300px.jpg'
    },
    {
      title: '好爸爸',
      shortcut: 'haobaba',
      short_description: '北大，哈弗医学系毕业的高材生通过自己的成长经历，真诚分享如何做一个称职的好爸爸。',
      description: '都说父爱如山，爸爸在每个孩子的成长过程中起着至关重要的作用，对孩子的影响也是巨大的。而在父亲集体缺席家庭教育的今天，爸爸们到底应该在孩子教育中扮演什么样的角色？男人怎样才能成为一个既成就自己又成就家人的好丈夫、好爸爸？好爸爸这个节目很开心请到了哈佛大学的硕士，北京大学博士李刚－小刚哥做为本节目的特约嘉宾讲员。透过他自己在生活中如何从父亲的言传身教中体会父爱，更传承并发展了自己与孩子的互动模式，使自己的孩子和他之间有着即深厚的父女之情，又能用上帝赐予的智慧规律潜移默化，抓住机会的教育女儿。期间无论从他自身的实践及周边人的例子都懂得为什么要做一个好爸爸，如何能成为一个好爸爸。',
      show_cover: 'assets/shows/cover-haobaba-300px.jpg'
    },
    {
      title: '妈妈心',
      shortcut: 'mamaxin',
      short_description: '讲述你我育儿路上的酸甜苦辣，找回上帝赋予的初心，恢复智慧和爱的妈妈心。',
      description: '',
      show_cover: 'assets/shows/cover-mamaxin-300px.jpg'
    },
    {
      title: '幸福家庭',
      shortcut: 'xingfujiating',
      short_description: '以爱心、知识、经验、智慧等陪伴您探讨分析解决您最实际的问题和困惑',
      description: '幸福生活人人渴望，幸福家庭是幸福生活的前提。然而建立一个健康、和谐、幸福的家庭却并非易事。如果盲目无知步入婚姻，会造成婚后问题多多而不知所措。生孩子容易，养育孩子难。各种家庭关系如何相处？面对问题如果不能找到问题的根源，问题终是问题不得其解。本节目将以爱心、知识、经验、智慧等陪伴您探讨分析解决您最实际的问题和困惑。',
      show_cover: 'assets/shows/cover-xingfujiating-300px.jpg'
    },
  ]
  
  episodes = [];
  constructor(private showService: ShowService){

  }
  
  ngOnInit(): void {

    this.showService.getShow().subscribe(
      res => {
        this.episodes = this.showService.getEpisodes(res);
      }
    )
  }

}
