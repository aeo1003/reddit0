export async function getComments(perma) {
    try {
        const splited = perma.split('/');
        const url2= 'https://www.reddit.com/r/'+ splited[2] +'/comments/'+ splited[4] +'/data.json';
        const url = 'https://www.reddit.com'+perma+'data.json'
      //  console.log('url : '+url)
        let d = [];
  
  
        const res = await fetch(url); //?limit=100
        const data = await res.json();
       // console.log(data)
     
          data[1].data.children.map(p => {
            //console.log(d.length)
            (!p.data.stickied || p.data.body.length > 10)
            ? d.push(p)
            : null
          })
      
       // console.log('data : ',d)
        return d;
    }catch (error) {
        console.log(error);
    }
    
}
// /r/news/comments/vrulux/florida_city_apologizes_for_saying_a_lot_of/