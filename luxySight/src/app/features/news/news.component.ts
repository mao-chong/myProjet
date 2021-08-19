import { Component, Inject, OnInit } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DomSanitizer } from "@angular/platform-browser";
import { NewsService } from "./news.service";

@Component({
  templateUrl:'./news.component.html',
  styleUrls:['./news.component.scss']
})

export class NewsComponent implements OnInit{

  private body = {
    query: 'Luxe',
    attributesToRetrieve: ['name', 'url', 'excerpt'],
    page: 1,
    hitsPerPage: 15,
    filters: '_tags.name:"France" AND domain:"www.lexpress.fr"',
  }
  public newsArray = [];
  constructor(
    private newsService:NewsService,
    public dialog: MatDialog
  ){}

  ngOnInit(){
    this.newsService.getNews(this.body).subscribe((data:any)=>{

      console.log(data);

      this.newsArray = data.hits;
    },
    (err)=>{
      console.log(err);
    })

  }

  openDialog(link:string){
    const dialogRef = this.dialog.open(NewsDialog,{
      data:{
        link:link
      }
    });

  }
}
@Component({
  templateUrl:'./news-dialog.html',
  selector:'news-dialog'
})
export class NewsDialog{
  public link
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private sanitizer: DomSanitizer
  ){
    this.link = this.sanitizer.bypassSecurityTrustResourceUrl(data.link);
    console.log(this.link)
  }
}










// var request = await (fetch(`${butlerUrl}indexes/news/query`, {
//   method: 'POST',
//   headers: {
//     'Content-type': 'application/json',
//     'x-key': tokens['butler-user']
//   },
//   body: JSON.stringify({
//     /* Query is the search query, to make search inside the news */
//     query: 'Luxe',
//     /*
//       You can add many others attributesToRetrieve. Here the usefull ones:
//         - name (Article title)
//         - url (article url)
//         - domain (The name of the website which published the news)
//         - excerpt (Small excerpt of the news, usefull for a preview)
//         - text (All the HTML content of the news)
//         - previewImage (the “Featured image” of the news)
//         - releasedAt (Publication date of the article in a milliseconds timestamp)
//         - _tags (contain the tags of the news. The tags which are marked “visible: false” should not be shown by the interface)
//     */
//     attributesToRetrieve: ['name', 'url', 'excerpt'],
//     /*
//       The pagination start with page 1. You cannot infinitely paginate, the API will block you after 1000 results.
//     */
//     page: 1,
//     /*
//       With hitsPerPage, you can specify how much results by page you wish to retrieve. You cannot ask for more than 1000 items.
//     */
//     hitsPerPage: 15,
//     /*
//       You can filter any value by typing key:“value”. You can do more complex filters, like:
//         domain:"star24.tv" AND (_tags.name:"France" OR _tags.name:"Prada")
//     */
//     filters: '_tags.name:"France" AND domain:"www.lexpress.fr"'
//   })
// }));
