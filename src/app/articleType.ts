export class ArticleType {
  get id(): number {
    return this._ID;
  }

  get url(): string {
    return this._URL;
  }

  get labelImg(): string {
    return this._LABEL_IMG;
  }

  get imageUrl(): string {
    return this._IMAGE_URL;
  }

  get label(): string {
    return this._LABEL;
  }

  get abstract(): string {
    return this._ABSTRACT;
  }

  get title(): string {
    return this._TITLE;
  }

  // id
  private _ID: number;

  // 链接
  private _URL: string;

  // 标题
  private _TITLE: string;

  // 摘要
  private _ABSTRACT: string;

  // 标签
  private _LABEL: string;

  // 标签图片
  private _LABEL_IMG: string;

  // 封面图片url
  private _IMAGE_URL: string;

  constructor(id: number, url: string, title: string, abstract: string, label: string, labelImg: string, imageUrl: string) {
    this._ID = id;
    this._URL = url;
    this._TITLE = title;
    this._ABSTRACT = abstract;
    this._LABEL = label;
    this._LABEL_IMG = labelImg;
    this._IMAGE_URL = imageUrl;
  }
}
