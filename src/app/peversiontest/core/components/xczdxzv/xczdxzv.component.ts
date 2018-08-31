/**
 * Created by: 
 * Date: 31/08/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Xczdxzv } from './../../models/xczdxzv.model'
@Component(
{
	selector: 'xczdxzv',
	templateUrl: 'xczdxzv.component.html'
})
export class XczdxzvComponent implements OnInit
{
	
	xczdxzv: Xczdxzv;
	
	
	constructor( private router: Router)
	{
		this.xczdxzv = new Xczdxzv();
		
	}
	ngOnInit()
	{
	}
	
	
	
}

