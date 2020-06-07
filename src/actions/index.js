// ActionはJSのオブジェクト
// typeというキーと、その値を持つ
// typeの値はユニークでなければならない
// {
//   type: 'INCREMENT',
// }
// Actionを返す関数をトクションクリエータと呼ぶ

// アクションクリエータ
// オブジェクトを返すときは外側に小カッコが必要（だと思う）
export const increment = () => ({
  type: 'INCREMENT',
});

export const decrement = () => ({
  type: 'DECREMENT',
});

// 他のところでも使うのでexportしておく
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
