import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostUpdateComponent } from './components/post-update/post-update.component';
import { HydraApiModule } from '../hydra-api/hydra-api.module';
import { CommentModule } from '../comment/comment.module';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    PostListComponent,
    PostItemComponent,
    PostCreateComponent,
    PostDetailComponent,
    PostFormComponent,
    PostUpdateComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HydraApiModule,
    FormsModule,
    ReactiveFormsModule,
    CommentModule
  ],
  exports: [
    PostListComponent,
    PostDetailComponent
  ],
  providers: [
    PostService,
  ],
})
export class PostModule { }
