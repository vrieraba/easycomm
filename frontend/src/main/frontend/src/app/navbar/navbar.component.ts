import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  	  $(".nav-item").click(function(e) {
  	  	e.preventDefault();
  	  	$(this).parents(".navbar-sidenav").find(".active").removeClass("active").end().end().addClass("active");
  	  });

	  // Toggle the side navigation
	  $("#sidenavToggler").click(function(e) {
	    e.preventDefault();
	    $("body").toggleClass("sidenav-toggled");
	    $(".navbar-sidenav .nav-link-collapse").addClass("collapsed");
	    $(".navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level").removeClass("show");
	  });

	  // Force the toggled class to be removed when a collapsible nav link is clicked
	  $(".navbar-sidenav .nav-link-collapse").click(function(e) {
	    e.preventDefault();
	    $("body").removeClass("sidenav-toggled");
	  });

	  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
	  $('body.fixed-nav .navbar-sidenav, body.fixed-nav .sidenav-toggler, body.fixed-nav .navbar-collapse').on('mousewheel DOMMouseScroll', function(e) {
	    var e0 = e.originalEvent,
	      delta = e0.wheelDelta || -e0.detail;
	    this.scrollTop += (delta < 0 ? 1 : -1) * 30;
	    e.preventDefault();
	  });
  }

}
