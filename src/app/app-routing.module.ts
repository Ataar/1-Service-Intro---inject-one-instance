import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { ServicesComponent } from './shared/components/services/services.component';
import { ContactComponent } from './shared/components/contact/contact.component';

const routes: Routes = [ 


  {
     path:'',
     redirectTo:'home',
     pathMatch:'full'
  },

{
  path:'home',
  component:HomeComponent
},
{
  
path:'services',
component:ServicesComponent
},

{
  path:'actions',
  component:ContactComponent
}

];  





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  

}





















// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './shared/components/home/home.component';
// import { PostsComponent } from './shared/components/posts/posts.component';
// import { TodosComponent } from './shared/components/todos/todos.component';
// import { PostComponent } from './shared/components/post/post.component';
// import { PostFormComponent } from './shared/components/post-form/post-form.component';

// const routes: Routes = [ 

// {
//   path:'home',
//   component:HomeComponent
// },

// {
//   path:'',  // if the path is empty so use redirectTo property
//   redirectTo:'home',
//   pathMatch:'full'
// },

// {
//   path:'posts',
//   component:PostsComponent
// },

// {
//   path:'posts/addPost',
//   component:PostFormComponent
// },

// {
//    path:'posts/:userId',
//    component:PostComponent
// },

// {
//    path:'posts/:userId/edit',
//    component:PostFormComponent
// },
// {
//   path:'todos',
//   component:TodosComponent
// },


//  ];  
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { 

  

// }

