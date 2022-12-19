import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../../services/user.service";
import UserInterface from "../../../interfaces/user.interface";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit,AfterViewInit {
    list: UserInterface[] = [];
    displayedColumns: string[] = ['id', 'name', 'email','username'];
    isLoadingResults = false;
    dataSource  = new MatTableDataSource<UserInterface>();
    @ViewChild(MatPaginator) paginator: any;
    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.getUsers()
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator
    }
    getUsers() {
        this.isLoadingResults = true;
        this.userService.getAll().subscribe(
            {
                next: (data: UserInterface[]) => {
                    this.list = data
                    this.dataSource.data = this.list;
                    this.isLoadingResults = false;
                },
                error: err => {
                    console.log(err)
                },
            }
        )
    }
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }


}
