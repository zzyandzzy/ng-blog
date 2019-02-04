export class CardType {

  // id
  cid: number;

  // 链接
  slug: string;

  // 标题
  title: string;

  // 摘要
  subContent: string;

  // 分类
  categories: string;

  // 标签图片
  ico: string;

  // 封面图片
  cover: number;

  // 封面图片url
  coverUrl: string;

  constructor(cid: number, slug: string, title: string, subContent: string,
              categories: string, ico: string, cover: number, coverUrl: string) {
    this.cid = cid;
    this.slug = slug;
    this.title = title;
    this.subContent = subContent;
    this.categories = categories;
    this.ico = ico;
    this.cover = cover;
    this.coverUrl = coverUrl;
  }
}
