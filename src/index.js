import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

var tempJSON = '{"name":"Software Engineering","description":null,"slug":"software-engineering","recent_questions":[{"id":2,"user":{"id":1,"username":"PowerfulAdmin","email":"alsolita1@gmail.com","first_name":"","last_name":"","is_staff":true,"is_active":true},"url":"https://perspectively.herokuapp.com/api/questions/is-hackerman-real/","title":"Is Hackerman Real?","details":"He cant be real right? Nobody that good at hacking can exist."},{"id":4,"user":{"id":1,"username":"PowerfulAdmin","email":"alsolita1@gmail.com","first_name":"","last_name":"","is_staff":true,"is_active":true},"url":"https://perspectively.herokuapp.com/api/questions/tracing-ip-adress-with-vb-gui-possible/","title":"Tracing IP Adress with VB Gui possible?","details":"i saw this on tv"}]}'

var sampleJSON = 
{
    "name":"Software Engineering",
    "description":null,
    "slug":"software-engineering",
    "recent_questions":[
        {
            "id":2,
            "user":
            {
                "id":1,
                "username":
                "PowerfulAdmin",
                "email":"alsolita1@gmail.com",
                "first_name":"",
                "last_name":"",
                "is_staff":true,
                "is_active":true
            },
            "url":"https://perspectively.herokuapp.com/api/questions/is-hackerman-real/",
            "title":"Is Hackerman Real?",
            "details":"He can't be real right? Nobody that good at hacking can exist."
        },
        {
            "id":4,
            "user":
            {
                "id":1,
                "username":"PowerfulAdmin",
                "email":"alsolita1@gmail.com",
                "first_name":"",
                "last_name":"",
                "is_staff":true,
                "is_active":true
            },
            "url":"https://perspectively.herokuapp.com/api/questions/tracing-ip-adress-with-vb-gui-possible/",
            "title":"Tracing IP Adress with VB Gui possible?",
            "details":"i saw this on tv"
        }
    ]
}







  
function Welcome() {
    var parse = JSON.parse(tempJSON);
    const element = <h1>{parse.name}</h1>;
    var length = <h2>{parse.recent_questions.length}</h2>
    var questions = [];
    var urls = [];
    for(var i = 0; i< parse.recent_questions.length;i++)
    {
            questions.push(parse.recent_questions[i].title);
            urls.push(parse.recent_questions[i].url);
    }

    var t = 0;
    const listItems = questions.map((question) =>
    <li><a href={parse.recent_questions[t++].url}>{question}</a></li>
    );

    return (
    <ul>{listItems}</ul>
    );
    

}
  

  ReactDOM.render(
    <Welcome />,
    document.getElementById('root')
  );
  