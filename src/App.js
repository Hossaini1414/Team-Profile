import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import './App.css';

const members = [
  {name: "Shaqayeq Temori " , role: "Web Developer - Fullstack" , image:"/shaqayeq.jpg"},
  {name: "Roya Hossaini" , role: "Web Developer - Frontend" , image:"/roya.jpg"},
  {name: "Marwa Kashify" , role: "Web Developer - Frontend" , image:"/marwa.jpg"},
  {name: "Rokhshana Ahmadzia" , role: "Web Developer - Frontend" , image:"/rokhshana.jpg"},
  {name: "Zarifa Noor" , role: "Web Developer - Frontend" , image:"/zarifa.jpg"},
]

function App() {
  return (
    <div className=" max-w-4xl mx-auto p-4 font-serif">
      <Header/>
      <div className='grid grid-cols-1 md:grid-cols-2  gap-6 mt-6'>
        {members.map((member , index) => (
          <ProfileCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
