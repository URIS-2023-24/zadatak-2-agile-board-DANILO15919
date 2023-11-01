import { Component, OnInit } from '@angular/core';
import { Contributor } from 'app/models/contributor';
import { Task } from 'app/models/task';
import { TasksService } from 'app/sevices/tasks/tasks.service';
import { ContributorsService } from 'app/sevices/contributors/contributors.service';
import { start } from 'repl';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  [x: string]: any;

  tasks:Task[] = [];
  contributors:Contributor[] = [];
  constructor(private taskService:TasksService,private contibutorService:ContributorsService) { }

  ngOnInit() {
    this.startSubscriotion();
  }

  startSubscriotion() {
    this.taskService.getTasks().subscribe(res => {this.tasks = res})
    this.contibutorService.getContributors().subscribe(res => {this.contributors = res})
   }

}


