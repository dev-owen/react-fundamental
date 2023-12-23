import { useEffect, useState } from 'react';
import NewsItem from '../NewsItem';

const NewsList = () => {

  const [news, setNews] = useState([]);

  useEffect(()=>{
    getNewsList();
  }, []);

  const getNewsList = () => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=06b21f71f1714078af2c68958a1dbcd5').then((response) => response.json())
      .then((data) => {
        console.log(data);
        setNews(data.articles)
      })
  }

  //무한루프 원인 getNewsList();


  const dummy = [
    {
      "source": {
        "id": null,
        "name": "Siècle Digital"
      },
      "author": "Antoine Messina",
      "title": "Le H1st vision, un concentré de technologies françaises dans un concept-car",
      "description": "À l’abri des regards indiscrets, sous un chapiteau blanc installé à l’Orange Gardens, le centre de recherche et développement d’Orange situé dans la banlieue parisienne, dort le H1st vision (Human First vision), le concept-car électrique de la Software Républ…",
      "url": "https://siecledigital.fr/2023/06/14/le-h1st-vision-un-concentre-de-technologies-francaises-dans-un-concept-car/",
      "urlToImage": "https://e2d9x4m5.rocketcdn.me/wp-content/uploads/2023/06/H1st-Vision-Exterieur-1.jpg",
      "publishedAt": "2023-06-14T08:30:18Z",
      "content": "À labri des regards indiscrets, sous un chapiteau blanc installé à lOrange Gardens, le centre de recherche et développement dOrange situé dans la banlieue parisienne, dort le H1st vision (Human First… [+9028 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Feber.se"
      },
      "author": "Hugo Engström",
      "title": "Google försenar lanseringen av Bard i EU",
      "description": "Skulle släppas denna vecka\n\n\n\n\n\n\n\n\n\n\nGoogle berättade förra veckan att man äntligen skulle släppa sin AI-chattbot Bard här i EU, men den lanseringen ser ut att utebli då det dykt upp frågetecken kring om tjänsten följer EU:s dataskyddslagar.\n\nEnligt den irlän…",
      "url": "https://feber.se/internet/google-forsenar-lanseringen-av-bard-i-eu/452590/",
      "urlToImage": "https://i.ytimg.com/vi/63NfEkYCLz0/hqdefault.jpg",
      "publishedAt": "2023-06-14T08:30:00Z",
      "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+27418 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "La Tribune.fr"
      },
      "author": "Marie Nidiau",
      "title": "Renault présente la voiture du futur (avec Atos, Dassault Systèmes, Orange, STMicroelectronics et Thales)",
      "description": "Le salon Vivatech ouvre ses portes aujourd'hui et un consortium d'entreprises de pointe françaises (Thales, Orange, Dassault Systèmes, Renault STMicroelectronics et Atos) présente leur voiture du futur. A son bord, vingt innovations allant de l'évaluation de …",
      "url": "https://www.latribune.fr/entreprises-finance/industrie/automobile/renault-presente-la-voiture-du-futur-avec-atos-dassault-systemes-orange-stmicroelectronics-et-thales-965764.html",
      "urlToImage": "https://static.latribune.fr/full_width/806132/renault-presente-un-concept-car-futuriste-avec-hi-fi-devialet.jpg",
      "publishedAt": "2023-06-14T08:30:00Z",
      "content": "C'est le jour J. Aujourd'hui débute le salon Vivatech, rassemblant les géants de la tech et de nombreuses startups. Parmi les acteurs incontournables du secteur, on retrouve les constructeurs automob… [+5767 chars]"
    },
  ]
  return (
    <div>
      {news.map(news => <NewsItem {...news} />)}
    </div>
  );
};

export default NewsList;

