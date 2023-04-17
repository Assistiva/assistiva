import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ControllStyles {
  contraste: any = {
    backgroundColor: "white",
    color: "black",
    "text-align": "justify",
    "font-family": "Arial",
    "line-height": "normal",
    "letter-spacing": "normal",
  };
  fontSize: number = 16;
  alignText: string = "justify";
  fontFamily: string = "Arial";
  lineHeight: string = "normal";
  letterSpacing: string = "normal";
  imagesVisibility: any = { visibility: "visible" };

  constructor() {}

  public getContrast() {
    return this.contraste;
  }

  public getFontSize() {
    return this.fontSize;
  }

  public getAlign() {
    // start, end e center
    return this.alignText;
  }

  public getFontFamily() {
    return this.fontFamily;
  }

  public getImagesVisibility() {
    return this.imagesVisibility;
  }

  public setContraste(contraste: any) {
    this.contraste = contraste;

    console.log(contraste);
  }

  public setFontSize(font: number) {
    this.fontSize = font;
  }

  public setAlign(align: string) {
    this.alignText = align;
  }

  public setFontFamily(font: string) {
    this.fontFamily = font;
  }

  public setLineHeight(lineHeight: string) {
    this.lineHeight = lineHeight;
  }

  public setLetterSpacing(letterSpacing: string) {
    this.letterSpacing = letterSpacing;
  }

  public setImagesVisibility(img: any) {
    this.imagesVisibility = img;
  }
}
