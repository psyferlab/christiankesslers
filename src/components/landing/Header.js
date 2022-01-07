import H2 from '@material-tailwind/react/Heading2';
import LeadText from '@material-tailwind/react/LeadText';

export default function Header() {
    return (
            <div className="container max-w-8xl relative mx-auto">
                <div className="items-center flex flex-wrap">
                        <H2 color="white">christian kessler</H2>
                        <div className="text-gray-200">
                            <LeadText color="gray-200">
                                developer,
                                musician,
                                raver,
                                creator
                            </LeadText>
                    </div>
                </div>
                </div>
    );
}
