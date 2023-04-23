

// Search Results page Helpers

// Returns if arr1 is a subset of arr2
export function hasAllElems(arr1, arr2){
  return arr1.every(elem => arr2.includes(elem))
}

export function get_labels(arr) {
  var labels = []
  arr.forEach((major) => {
    labels.push(major.label)
  })
  console.log("labels",labels)
  return labels
}

export function check_keys(str,dict) {
    for(let s in dict){
      if(str.includes(s)){
        return s
      }
    }
    return ""
  }
  
export function get_majors(users) {
    var all_majors = {"Electrical Engineering":[], "Business Administration":[], "Information Systems":[]}
    users.forEach(
      function(user,index) {
        var r = user.major
        r.forEach(
          function(indMajor,index) {
            var k = check_keys(indMajor,all_majors)
            if(k!=="") {
                all_majors[k].push(user)
              }
          }
        )
      }
    )
    return Object.entries(all_majors)
  }
  
export function get_options(majors) {
    var ops = []
    majors.forEach((r) => {
      ops.push({ "label":r[0],"value":r })
    })
    return ops;
  }