
//862393edf7msh92aaead2c003e1dp1e270bjsn9cecae3d1c0e
//143afdb16fmsh651ffb993d62aabp1f7c2bjsn72af650ec01d
//1d70146d2fmshbdcddea1c10dc94p12fdc4jsn3068bc57606f
export const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1d70146d2fmshbdcddea1c10dc94p12fdc4jsn3068bc57606f',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  }


  export const youtubeOptions = {
    method:'GET',
    headers: {
      'X-RapidAPI-Key': '1d70146d2fmshbdcddea1c10dc94p12fdc4jsn3068bc57606f',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  
  }

export const fetchData = async(url,options)=>{

    const response = await fetch(url,options);
    const result = await response.json();
    return result;
}