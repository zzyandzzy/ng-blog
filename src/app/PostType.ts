export class PostType {
  // id
  cid: number;

  // 链接
  slug: string;

  // 标题
  title: string;

  // 创建时间
  created: number;

  // 更新时间
  modified: number;

  // 内容
  content: string;

  // 摘要
  subContent: string;

  // 作者id
  authorId: number;

  // 类型
  type: string;

  // 状态
  status: string;

  // 分类
  categories: string;

  // 点击量
  hits: number;

  // 封面图片
  cover: number;

  // 评论数量
  commentsNum: number;

  allowComment: number;

  allowPing: number;

  allowRead: number;


  constructor(cid: number, slug: string, title: string, created: number, modified: number,
              content: string, subContent: string, authorId: number, type: string, status: string,
              categories: string, hits: number, cover: number, commentsNum: number,
              allowComment: number, allowPing: number, allowRead: number) {
    this.cid = cid;
    this.slug = slug;
    this.title = title;
    this.created = created;
    this.modified = modified;
    this.content = content;
    this.subContent = subContent;
    this.authorId = authorId;
    this.type = type;
    this.status = status;
    this.categories = categories;
    this.hits = hits;
    this.cover = cover;
    this.commentsNum = commentsNum;
    this.allowComment = allowComment;
    this.allowPing = allowPing;
    this.allowRead = allowRead;
  }
}
