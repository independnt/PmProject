$(document).ready(function() {
  let index = 1
  let reasons_arr = [`I never cease exploring, or learning. It brought me to studying programming! This gave me the technical aptitude to build small applications and pages, like this one! So i understand what it takes to build, describe and test them.`,
    "I have the audacity. If I don't have the answers, I work diligently to find one. There's always a way, and sometimes a better solution.",
    `I've always provided better people experiences. Working with others is one of the most important things an organization can do, and I'm a firm believer that "If you want to go fast, go alone, but if you want to go far, go together". I bring a positive energy, and I can be a strength for those around me.`,
    "I can roll with the punches. I think change is a great thing, it means we're growing. Improvement is impossible without change. I'm excited to take on new challenges, day to day.",
    `F*ck the status Quo. Probably my favorite, because no task is too small, and there's no such thing as "thats not my job". Need me to speak with clients? Help with QA? Help with pitches? Assist with programming? I can do it, and I will.`,
    "I've managed accounts, employees, and client relations. I can balance a multitude of personalities, while steering the ship in the direction it needs to go.",
    "I'm genuinely excited about Digital Surgeons. I'm looking for a new home. I was at my previous position for nearly 5 years, so I'm in this for the long haul."]
  let reason = reasons_arr[index]
  $('.arrow').click(function(){
    $('.reasons').html(`<p class="reasons">${reason}</p>`)
    if(index === reasons_arr.length - 1){
      index = 0
    }else{
    index = index + 1
    }
    reason = reasons_arr[index]
  })
})
