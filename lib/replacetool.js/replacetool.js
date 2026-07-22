function replacetool(recipe, source) {
  let message = {
    "invalidrecipe": "レシピの入力が不正です。",
    "invalidsource": "テキストの入力が不正です。",
    "invalidregexp": "正規表現の前後が / で挟まれていません。"
  }
  let rcp = []
  if (Array.isArray(recipe) || recipe instanceof Array) {
    rcp = recipe
  }
  else {
    try {
      JSON.parse(recipe)
    }
    catch {
      console.log(message.invalidrecipe)
    }
  }
  let w = String(source)
  if (w === ``) {
    console.log(message.invalidsource)
  }
  let i = 0
  return new Promise(resolve => {
    fn()
    function fn() {
      w = w.replace(
        new RegExp(
          rcp[i][0].replace(/^(\/)?(.*?)(\/|(?<!\\)\/([a-zA-Z]*))?$/, `$2`),
          rcp[i][0].replace(/^(\/)?(.*?)(\/|(?<!\\)\/([a-zA-Z]*))?$/, `$4`)
        ),
        rcp[i][1]
      )
      if (i < rcp.length - 1) {
        i++
        fn()
      } else {
        resolve(w)
      }
    }
  })
}
