import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  disc:string="Browse by category. Open World. Visual Novel. Co-Operative. Free To Play. Sign in to view personalized recommendations. Sign In. Or sign up and join Steam for free."
 game1:string="gta";
 game2:string="forza";
 img1:string="https://tse2.mm.bing.net/th?id=OIP.Vn0uXtjqPfS0YATtryO8zQHaEK&pid=Api&P=0&h=180";
 img2:string="https://tse3.mm.bing.net/th?id=OIP.XpSOkOdlWgAJ4NG2mT4V9wHaEK&pid=Api&P=0&h=180"
print(){
  alert("hi");
}
}
