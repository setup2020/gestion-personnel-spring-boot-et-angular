import { Level } from '../model/level.model';
var st=""
export const recursiveLevel = (
  levels: Level[],
  pere = 0,
  st:string
): void => {
  let i = 0;

  var l = levels;
 
  let parent = l.find((fils) => fils.id === pere);
  let fils = l.filter((fils) => fils.parent ===pere)
  .sort((a, b) => (Number(a.parent) > Number(b.parent) ? -1 : 1));

 console.log('parent',parent?.name,parent?.id,'--------------->les enfants ',fils);
  while (fils.length > i) {
          //  console.log(fils[i],i);
            
      st +=  `<li> ${fils[i].name}<ul>`;
    // st = st + `<li> ${fils[i].name}<ul>`;


       recursiveLevel(l, fils[i].id, st);
     // recursiveLevel(l, fils[i].id, st);

        st += `</ul></li>`;
      // st =st+ `</ul>${}</li>`;

      
        
      i++;
     // return st;

  }

};
