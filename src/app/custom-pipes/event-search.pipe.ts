import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "eventSearch",
})
export class EventSearchPipe implements PipeTransform {
  transform(items: any, filter: any): any {
    if (!filter) {
      return items;
    }
    if (!Array.isArray(items)) {
      return items;
    }
    if (filter && Array.isArray(items)) {
      // console.log(filter);
      let filterKeys = Object.keys(filter);
      if (filter) {
        return items.filter((item) =>
          filterKeys.reduce(
            (x, keyName) =>
              (x && new RegExp(filter[keyName], "gi").test(item[keyName])) ||
              filter[keyName] == "",
            true
          )
        );
      } else {
        return items.filter((item) => {
          return filterKeys.some((keyName) => {
            return (
              new RegExp(filter[keyName], "gi").test(item[keyName]) ||
              filter[keyName] == ""
            );
          });
        });
      }
    }
  }
}
