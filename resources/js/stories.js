$(document).ready(function() {
  let index = 1
  let stories_arr = [`I was once kidnapped by a taxi driver. No, seriously. I was going home with some friends after a long night, planning to pay with a card, because its 2018, and you would think that isn't a problem. The driver proceeds to tell us that cards are not accepted passed 1:30 am, which is bulls*it. When we tried to get out, he floored it. And drove us around at fast speeds so we couldn't jump out of the vehicle. It was a wild ride.`,
    `I was the director of fishing at a summer camp, even though i absolutely hate fishing. The reason? My father was fishing and casting one day by the lake. As i walked by to ask him for something, he casted his line backwards, and it miraculously, went straight into my mouth. He yanked the line, 3, maybe 4 times? Thinking it was caught in a bush, until he turned back and saw me. Yeah, so i'm not big into fishing.`,
    `I've met Jessica Alba. I used to intern at Sirius XM radio, and she walked into my interview. My jaw literally dropped, and everyone else was acting cool, because at a radio station, i guess it's the norm. I also got a chance to meet Will I Am, Good Charlotte, and Steve-o.`,
    `I went sky diving off the grand canyon and it was quite possibly the craziest thing i have ever done in my life. It was insane, nothing else i can really say about it.`,
    `I like to go on long road trips. I figure if you're going to travel, see as much as you can! Most recently, I traveled to Phoenix, Arizona. From there, I went to the Grand Canyon. I drove to Utah afterwards and saw Bryce Canyon, which was incredible. Then I drove through to Colorodo, and saw several national parks, went white water rafting and experienced The Red Rocks Amphitheatre.`,
    `I'm a huge music fan, i love it all. I know everyone says that, but whether it's hip hop, metal, country, pop, doesn't matter. Music is a universal language that everyone can understand. I also play several musical instruments, including the trombone. Weird, I know.`,
    `I genuinely thought i was going to be murder once. Me and my wife stayed at an airbnb in Los Angeles, CA for a night and we arrived very late at night, hoping to turn in. The owner came out and was extremely friendly.....almost....too friendly. He kept offering us wine, and each time, never taking no for an answer. He filled our cups to the brim, but mind you, was not drinking himself. He kept referencing how we couldn't yet go to bed because his 'wife would be there soon'. The entire time, he never turned a light on, and we simply sat in the dark. Turns out he's actually an actor named Kevin Ryan who was on The Blacklist and had a big role in a BBC show called Copper. Go figure.`]
  let story = stories_arr[index]
  $('.story-arrow').click(function(){
    $('.story').html(`<p class="story">${story}</p>`)
    if(index === stories_arr.length - 1){
      index = 0
    }else{
    index = index + 1
    }
    story = stories_arr[index]
  })
})
