/**
 * 对价格进行格式化
 * @param {*} pirce 价格
 * @param {*} num 保留几位小数
 * @return {*} 格式化后的价格
 */ 
function formatPrice(price, num) {
  // 判断price参数是不是数字
  if ( typeof price !== Number ) {
    // 逻辑或，常用于设置默认值
    price = Number(price) || 0
  }

  return '￥'+price.toFixed(num)
}