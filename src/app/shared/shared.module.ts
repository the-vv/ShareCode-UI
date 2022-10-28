import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

import { matAddRound, matDeleteRound, matContentCopyRound, matOpenInFullRound, matDoneRound, matVisibilityRound } from '@ng-icons/material-icons/round';
import { NgIconsModule } from '@ng-icons/core';
import { CodeItemComponent } from './code-item/code-item.component';
import { TooltipModule } from 'primeng/tooltip';


const commons: any[] = [
  NavbarComponent,
  SidemenuComponent,
  CodeItemComponent
]

@NgModule({
  declarations: commons,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({ matAddRound, matDeleteRound, matContentCopyRound, matOpenInFullRound, matDoneRound, matVisibilityRound }),
    TooltipModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ...commons
  ]
})
export class SharedModule { }
