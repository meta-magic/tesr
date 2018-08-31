/**
 * Created by: 
 * Date: 31/08/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Firtsui } from './../../models/firtsui.model'
@Component(
{
	selector: 'firtsui',
	templateUrl: 'firtsui.component.html'
})
export class FirtsuiComponent implements OnInit
{
	
	firtsui: Firtsui;
	
	
	constructor( private router: Router)
	{
		this.firtsui = new Firtsui();
		
	}
	ngOnInit()
	{
	}
	
	
	
}

