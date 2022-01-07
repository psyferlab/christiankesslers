import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import H4 from '@material-tailwind/react/Heading4';
import H6 from '@material-tailwind/react/Heading6';
import LeadText from '@material-tailwind/react/LeadText';
import Paragraph from '@material-tailwind/react/Paragraph';
import AboutMe from 'assets/img/aboutme.jpg';

export default function WorkingSection() {
    return (
        <section className="pb-20 bg-gray-100 -mt-50">
            

            <div className="flex flex-wrap items-center mt-32">
                <div className="w-full md:w-5/12 px-4 mx-auto">
                        
                    <H4 color="gray">christian kessler</H4>
                    <LeadText color="blueGray">
                        developer, musician, raver, creator
                    </LeadText>
                    <LeadText color="blueGray">
                        
                    </LeadText>
                    <a
                        href="/aboutme"
                        className="font-medium text-light-blue-500 mt-2 inline-block"
                    >
                        more about me
                    </a>
                </div>

                <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-50 lg:mt-0">
                    <Card>
                        <CardImage alt="Card Image" src={AboutMe} />
                        <CardBody>
                            
                        </CardBody>
                    </Card>
                </div>
                
            </div>
        </section>
    );
}