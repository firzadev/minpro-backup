function createShit(shit:number){
  let shitChar: string = ""
  const chars = "ABCDEFGHIJKLMNOPQRSTU"
  for(let i = 0; i < shit; i++){
    const random = Math.floor(Math.random() * chars.length)
    shitChar += chars[random]
  }
  return shit
}

