// console.log((4+9+6)/77);
// //var a= 10;
// a =12;
// // const a =9;

// // console.log(a);
// // let b = 7*a;
// // console.log(b);
// // const max =57;
// // const actual=max-13;
// // const percentage = actual/max;
// // console.log(percentage);
// let str = 'Hello,';
// let str1 ="World";
// console.log(`String Length : -`)
// console.log (`${str} ${str1}`); 
// console.log(str.length);
// console.log(`String charAt`);
// let str3 ="Aba jaba daba khaba (rabba";
// console.log(str3.charAt(4))
// console.log(`String indexOf and lastIndexOf`);
// let str4 ="The code is undefined code code !";
// console.log(str4.indexOf("c" , 4));
// console.log(str4.lastIndexOf("c", 24));
// console.log(str4.indexOf(""));
// console.log(str4.lastIndexOf(""));
// console.log(str4.length);
// console.log("String slice and substring");
// let str5 ="The morning is upon us!";
// console.log(str5.length);
// console.log(str5.slice(4,6));
// console.log(str5.substring(24,1));
// console.log(str5.slice(8,-4));
// console.log(str5.substring(8,-4));
// console.log("String split");
// console.log(str5.split());
// console.log(str5.split(""));
// console.log(str5.split(" "));
// console.log(str5.split("o"));
// console.log(str5.split("upon",2));
// console.log("Learning string include method");
// let str6 ="The quick brown fox jumps over the dog";
// console.log(str6.includes("fox"));
// console.log(str6.includes("fox", 16));
// console.log("Learning startWith and endWidth String methods");
// console.log(str6.startsWith("The"));
// console.log(str6.startsWith("The", 5));
// console.log(str6.startsWith("The", 0));
// console.log(str6.length);
// console.log(str6.endsWith("dog",36));
// console.log("String Concat");
// console.log(str6.concat(", ", str5));
// console.log("String method repeat()");
// let str7 = "abc";
// console.log(str7.repeat(3));
// // console.log(str7.repeat(-1));
// console.log("Learning trim(), trimStart(), trimEnd() methods of Strings");
// let str8 = "    Hello Amulya     ";
// let greetings = str8.trim();
// console.log (str8);
// console.log(greetings);
// let TrimStart = str8.trimStart();
// console.log(TrimStart);
// let TrimEnd = str8.trimEnd();
// console.log(TrimEnd);
// console.log("Learning padStart(), padEnd()");
// let str9 = "Hello";
// let Greetings =str9.padEnd(11," World");
// console.log(Greetings);
// let str10 = "World";
// let Greetings1 = str10.padStart(11, "Hello ");
// console.log(Greetings1);
// console.log("Learning localCompare() String Method");
// let str11 = "This is a code";
// let Str12 ="This is a code upgraded";
// let checkStr = Str12.localeCompare(str11);
// console.log(checkStr);
// console.log("Learning search() method in string");
// let str13 ="Rain rain go away";
// let SearchStr = str13.search(/GO/i);
// console.log(SearchStr);
// console.log("Learning match() method in String");
// let str14= "The rain in the SPAIN stays mainly in the plain";
// let Match = str14.match(/ain/);
// console.log(Match);
// let Match1 = str14.match(/ain/g);
// console.log(Match1);
// let Match2 = str14.match(/ain/gi);
// console.log(Match2);
// let Match3 = str14.match(/w/);
// console.log(Match3);
// console.log("Learning matchAll() method in string");
// let str15 ="The rain in the SPAIN stays mainly in the plain"
// let res = str15.matchAll(/ain/gi);
// let res1 =str15.matchAll(/ain/g);
// //let res2 =str15.matchAll(/ain/);
// let res3 =str15.matchAll('ain');
// console.log([...res]);
// console.log([...res1]);
// //console.log([...res2]);
// console.log([...res3]);
// const amulya = {
//   role:       "Full Stack Developer",
//   strengths:  ["Data Structures", "Databases", "Java"],
//   learning:   ["Node.js", "Express.js", "React.js"],
//   askMeAbout: ["Java", "Databases", "DSA", "Web Dev"],
//   funFact:    "I can sing really well 🎙️",
//   contact:    "amulyaawasth18jan@gmail.com"
// };
// console.log(amulya.strengths);
// console.log("Learning replace() method in String");
// let str16 = "Mr.Blue have blue house and blue car";
// let Rep = str16.replace('blue', 'red');
// console.log(Rep);
// let rep1 =str16.replace("blue",(match)=>{
//     return match.toUpperCase();
// });
// console.log(rep1);
// console.log("------Learning replace method from regexp--------");
// let REG =str16.replace(/blue/g, 'red');
// console.log(REG);
// let REG1 =str16.replace(/blue/gi, 'red');
// console.log(REG1);
// let REG2 =str16.replace(/Blue/g, 'Red');
// console.log(REG2);
// let REG3 =REG2.replace(/blue/g, 'red');
// console.log(REG3);
// console.log('-------------Learning from Regexp function-----------');
// // let Reg4 = str16.replace(/blue/gi, (match)=>{
// // match[0] === 'B' ? "Red" :'red';
// // });
// // console.log(Reg4);
// let result = str16.replace(/blue/gi, match =>
//   match[0] === "B" ? "Red" : "red"
// );

// console.log(result);

alert("I am JavaScript");
