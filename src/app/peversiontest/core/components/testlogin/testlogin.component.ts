/**
 * Created by: 
 * Date: 31/08/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Testlogin } from './../../models/testlogin.model'
@Component(
{
	selector: 'testlogin',
	templateUrl: 'testlogin.component.html'
})
export class TestloginComponent implements OnInit
{
	
	testlogin: Testlogin;
	
	successMsgData:any[]=[];
	
	constructor( private router: Router)
	{
		this.testlogin = new Testlogin();
		
	}
	ngOnInit()
	{
	}
	
	
	
}

