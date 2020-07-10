import { Component, OnInit } from "@angular/core";
import $ from "jquery";

@Component({
  selector: "app-bookdetails",
  templateUrl: "./bookdetails.component.html",
  styleUrls: ["./bookdetails.component.css"],
})
export class BookdetailsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  generate() {
    $(function () {
      $(document)
        .on("click", ".btn-add", function (e) {
          e.preventDefault();

          var controlForm = $(".controls form:first"),
            currentEntry = $(this).parents(".entry:first"),
            newEntry = $(currentEntry.clone()).appendTo(controlForm);

          newEntry.find("input").val("");
          controlForm
            .find(".entry:not(:last) .btn-add")
            .removeClass("btn-add")
            .addClass("btn-remove")
            .removeClass("btn-success")
            .addClass("btn-danger")
            .html('<span ">Delete Comment</span>');
        })
        .on("click", ".btn-remove", function (e) {
          $(this).parents(".entry:first").remove();

          e.preventDefault();
          return false;
        });
    });
  }
}
