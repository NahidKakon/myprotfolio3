import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../utils/dataBase';
import Link from 'next/link';



function ProjectsSection() {
  return (
    <section
      id="projects"
      className="my-[3rem] max-w-6xl mx-auto md:my-[6rem]"
    >
      <h2 className="mb-4 text-3xl font-bold text-center lg:mb-8">
        My Projects
      </h2>
      
      <p className="mb-4 lg:mb-8 text-center mx-auto max-w-[36rem] text-black/60">
        {' '}

        <b>Industry Project</b> <br/>
        During bootcamp, I did 3 months Industry project for Phoenix Software, Where I was scrum master for the team of 4 students.
        I also did requirement analysis, front end design, front end development including adding branding details, preparing final
        report and presentation. I am proud of leading the team to complete this project in time, produce an workable software to meet
        client's expectation and gain good feedback during presentation.
        Agile Methodology, HTML, CSS, JAVASCRIPT, PhpMyAdmin were used to develop this software, 
        we manually tested it to ensure it is running as expected. <br/> <br/>
        <b>Explore my other works of personal projects, showcasing my
        expertise in design and development.</b>
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button className="text-black bg-orange-400
        bg-orange-4500 border hover:bg-orange-600 hover:border-orange-400">
        
      <Link
       href="https://test1-ten-wheat.vercel.app/" className="button">Nature blog
    
        </Link>
    
        </Button>
        <Button className="text-black bg-orange-400
        bg-orange-4500 border hover:bg-orange-600 hover:border-orange-400">
        <Link
          href="https://dataentry-esg.vercel.app/" className="button">ESG data entry forms
         </Link>
        </Button>        
        <Button className="text-black bg-orange-400
        bg-orange-4500 border hover:bg-orange-600 hover:border-orange-400">
         <Link
         href="https://story1.vercel.app/" className="button"> Kids story book with AI image
         </Link>
        </Button>
        <Button className="text-black bg-orange-400
        bg-orange-4500 border hover:bg-orange-600 hover:border-orange-400">
        <Link
         href="https://calculator-ru88.vercel.app/" className="button"> Calculator
         </Link>
        </Button>
        <Button className="text-black bg-orange-400
        bg-orange-4500 border hover:bg-orange-600 hover:border-orange-400">
         <Link
         href="https://nahid-six.vercel.app/" className="button"> Animation
         
         </Link>
        </Button>
      </div>    
       <br/>    
{/*   <br/>    <br/>    <br/>    <br/>    <br/>  */}
      
      <div className="flex justify-center"> 
       <Button className="text-black bg-orange-400
        bg-orange-4500 border margin-top: 10px hover:bg-orange-600 hover:border-orange-400">
         <Link
          href="my-shop-nine-roan.vercel.app" className="button">My e-commerce shop (under construction)         </Link>
        </Button>
       

      <Button className="text-black bg-orange-400
        bg-orange-4500 border hover:bg-orange-600 hover:border-orange-400">
        <Link
         href="https://tic-tac-toe-game-nu-khaki.vercel.app/" className="button"> Tic-Tac-Toe- game
         </Link>
        </Button>
        <Button className="text-black bg-orange-400
        bg-orange-4500 border hover:bg-orange-600 hover:border-orange-400">
         <Link
         href="https://expense-tracker-three-nu-60.vercel.app/" className="button"> Expence Tracker (under Construction)
         
         </Link>
        </Button>

         </div>
      {/* <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imgSrc={project.imgSrc}
            altText={project.altText}
            title={project.title} */}
          {/* />
        ))}
      </div> */}
    </section>
  );
}

export default ProjectsSection;
