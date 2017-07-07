import { Component } from '@angular/core';

const template = require('./about.component.html');
const styles = require('./about.component.css');

@Component({
  selector: 'about-component',
  template: template,
  styles: [ styles ]
})
export class AboutComponent {
  title : String = 'About Me';
  imgSrc: String = '/about-image.jpg';
  content: String = `Hey Everyone! My name is Marie Schmidt and I am a 26 year old California native making my way in Colorado. It's not always easy for a beach goer like me making my way in the mountains, but there is so much beauty in all the tall peaks! Let's just say it is growing on me.
    I currently work as front-end web developer for Kenzan, LLC out of Denver, CO. I won't lie, this blog came out of a curiousity for some of the new web development tools out there... Namely Angular2, Webpack, Yarn, and Post-CSS. Pretty cutting edge for today, outdated tomorrow! Enjoy it while it lasts :).
    So, about this blog. As a fledgling millenial trying to find my way in the world, I'm starting this blog to document my travels, adventures, career moves, and other fun life things!
    I am an avid hobbiest and love spending time outdoors doing white water rafting, kayaking, running, biking and climbing. Maybe Colorado is not such a bad place for me afterall! I also love home improvement. I'm a relatively new home owner and my boyfriend, Jack, and I have taken on the house full steam ahead. Finally, I love to cook so I'm sure I will throw some great recipies, and some not so great recipies, in the blog along the way.
    Thanks for stopping in and I hope you enjoy learning about me and my escapades!`
}
