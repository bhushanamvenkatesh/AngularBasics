import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 title='title'
 greetings=()=>"hello world"
 image:string='../assets/3.png'
 icname:string="redux i-border"
 cdate:string=new Date().toLocaleDateString()
 ctime:string=new Date().toLocaleTimeString()
 id=setInterval(()=>{
  this.ctime =new Date().toLocaleTimeString()
 },1000)
 
}
