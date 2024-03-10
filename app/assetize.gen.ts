/// GENERATED CODE - DO NOT MODIFY BY HAND
/// *****************************************************
///  Assetize Generator - DO NOT CHANGE
/// *****************************************************

class AssetItem {
  private _assetName: string;
  private _keyName: string;
  private _ext: string;
  private _altText: string;

  constructor(assetName: string) {
    this._assetName = assetName;
    this._keyName = assetName.split("/").pop()?.split(".")[0]! || assetName;
    this._ext = assetName.split(".").pop()!;
    this._altText = this._keyName + " " + " image";
  }

  get keyName() {
    return this._keyName;
  }

  get path() {
    return this._assetName;
  }

  get ext() {
    return this._ext;
  }

  get altText() {
    return this._altText;
  }
}
class AssetRootGen {
  constructor() {}

  private static instance: AssetRootGen;

  // favicon - path : public/favicon.ico
  static readonly favicon: AssetItem = new AssetItem("/favicon.ico");

  static get assets() {
    return [this.favicon];
  }
}
class AssetsIconsGen {
  constructor() {}

  private static instance: AssetsIconsGen;

  // youtube - path : public/icons/youtube.png
  static readonly youtube: AssetItem = new AssetItem("/icons/youtube.png");

  static get icons() {
    return [this.youtube];
  }
}
class AssetsImagesGen {
  constructor() {}

  private static instance: AssetsImagesGen;

  // Screenshot - path : public/images/Screenshot.png
  static readonly Screenshot: AssetItem = new AssetItem(
    "/images/Screenshot.png",
  );
  // profile - path : public/images/profile.png
  static readonly profile: AssetItem = new AssetItem("/images/profile.png");

  static get images() {
    return [this.Screenshot, this.profile];
  }
}
class AssetsFontsGen {
  constructor() {}

  private static instance: AssetsFontsGen;

  // Consolas - path : public/fonts/Consolas.ttf
  static readonly Consolas: AssetItem = new AssetItem("/fonts/Consolas.ttf");
  // Prenton - path : public/fonts/Prenton.otf
  static readonly Prenton: AssetItem = new AssetItem("/fonts/Prenton.otf");
  // PrentonItalic - path : public/fonts/PrentonItalic.otf
  static readonly PrentonItalic: AssetItem = new AssetItem(
    "/fonts/PrentonItalic.otf",
  );
  // consolaz - path : public/fonts/consolaz.ttf
  static readonly consolaz: AssetItem = new AssetItem("/fonts/consolaz.ttf");
  // nothing - path : public/fonts/nothing.ttf
  static readonly nothing: AssetItem = new AssetItem("/fonts/nothing.ttf");

  static get fonts() {
    return [
      this.Consolas,
      this.Prenton,
      this.PrentonItalic,
      this.consolaz,
      this.nothing,
    ];
  }
}

class MyAssets {
  private constructor() {}

  // private static instance: MyAssets;

  static readonly root = AssetRootGen;
  static readonly icons = AssetsIconsGen;
  static readonly images = AssetsImagesGen;
  static readonly fonts = AssetsFontsGen;
}

export default MyAssets;
