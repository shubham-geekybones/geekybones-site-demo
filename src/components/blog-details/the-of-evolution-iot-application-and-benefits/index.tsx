import {ASSETS} from "../../common/images";
import {Link} from "gatsby";
import RelatedCategories from "../../common/related-categories";
import * as React from "react";
import SocialShare from "../../common/social-share";

const TheOfEvolutionIotApplicationAndBenefits = () => {

    const blogDetailsList1 = [
        {
            title: '1. What is “Internet of Things”?',
            description1: 'Do you really want to act smartly to complete your task? The answer will most likely be ‘YES’! IoT is an important concept for everyone, it has tremendous benefits.',
            description2: 'And, the revolution that smartphones, tablets, and laptops have brought in our lives explains the incredibly surprising benefits of IoT.',
        },
        {
            title: 'Why “Internet of Things”?',
            description1: 'Internet connection means having the convenience of sending and receiving information. And, this concept allows us to accomplish our tasks smartly.',
            description2: '',
        },
        {
            title: 'Explaining IoT',
            description1: 'Take an example of listening to a song. It used to be a big task to listen to a song. Now, you do not need to even store your favorite song on your mobile phone. You can listen to it any time if you have internet connectivity. Internet connectivity allows your device to send (requesting the song) and receive (downloading the song) information.',
            description2: 'In a similar manner, the Internet of Things will connect things to the Internet or the super storage from where it can fetch information and send the same to the receiver.',
        },
        {
            title: 'Evolution of “Internet of Things” & M2M',
            description1: 'The evolution of IoT is related to the M2M (machine-to-machine) communication. M2M refers to connecting machines through a network without the help of human interaction.',
            description2: 'IoT takes M2M to a higher level with its network of sensors of wide range of smart devices. This network connects systems, applications, and people by collecting and sharing Data.',
        },
        {
            title: 'Evolution of “Internet of Things” & SCADA',
            description1: 'IoT is an extended form of supervisory control and data acquisition (SCADA). It’s a kind of software application that works for process control by gathering real-time Data from remote locations. And, this data helps in controlling equipment and devices.',
            description2: 'The first-generation of IoT is related to the latest generation of SCADA systems. The evolution of IoT therefor is related to the system of SCADA. The concept of IoT came into the picture in mid-2010, with China claiming to prioritize (strategic)  the concept in its five-year-plan.',
        },
    ]


    const blogDetailsList2 = [
        {
            title: 'Application of IoT in Day-to-Day Life',
            description1: 'IoT will be an integral part of our lives in the future. In the years to come, we will see many fresh improvements in different aspects of our daily life. Let’s talk about a few of those areas in which IoT is going to have an impact.',
        },
        {
            title: '1. Domestic Application',
            description1: 'What if you could switch off a light remotely in your home or could be able to control the heating appliance of your home automatically according to the temperature of the room? And, IoT will help with that!',
            description2: '',
        },
        {
            title: '2. Communicating Appliances',
            description1: 'IoT enabled appliances would be able to intelligently communicate with the user. As in the case of refrigeration. The appliance will notify the user if something is about to expire.',
        },
        {
            title: '3. Application in Automobile',
            description1: 'With the application of IoT, vehicles will be able to find out the best route for avoiding traffic jams.',
        },
        {
            title: '4. Application in Consumer Uses',
            description1: 'IoT will be able to inform the rider if he has the right type of shoes for the area. If he has the right kind of clothing for that particular environment.',
        },
        {
            title: '5. e-Health',
            description1: 'IoT and Big Data both are enormously useful for patients. And, Data analysis and administration is quite beneficial in reducing the sanitary cost and bringing out improvements in diagnosis.',
        },
        {
            title: '6. Smart buildings',
            description1: 'IoT will help in making you live in a smart home! It helps in making building digital, competitive and efficient. Digitization makes improvement in Data transmission. This data help in the operation of every section integrated into the building from protection against fire to the temperature control.',
        },

    ]

    const blogDetailsList3 = [
        {
            title: 'Benefits of IoT in your day-to-day life',
            description1: 'There can be numerous benefits of IoT in our everyday life. We will be highlighting here a few of those benefits:',
        },
        {
            title: '1. Safety',
            description1: 'IoT will take care of the safety both at your home. Sensors allow control of the closing/opening of windows/doors and even any kind of movement inside a building.',
        },
        {
            title: '2. Power saving',
            description1: 'Intelligently connected homes help in controlling temperature and lighting remotely resulting in saving an enormous amount of power.',
        },
        {
            title: '3. Remote operation of devices',
            description1: 'IoT enabled system allows you to control your office/home appliances remotely allowing you to switch it on or off.',
            description2: 'nother revolution is on the way! IoT will be making us way more smart and intelligent, making room for plenty of other improvements in our day-to-day lives.',
        },
    ]
    return (
        <div className="left-side-2">
            <div className="description-1">
                <p>Let’s forget about the technical part, for a moment. And, focus on the words that “Internet of Things” encapsulates. IoT contains two wide words that are ‘Internet’ and ‘Things’.</p>
                    <p>Internet, as we know, is a “Global system of interconnected computers”. And, ‘Things’, means every object in the Universe.</p>
                    <p>IoT is the Global connection of everything around you. Imagine the pace that this concept will bring to our lives.</p>
                <p>The question here is why we even want to connect things to the Internet. It sounds really alien for someone who is not technically sound. I will answer that important question for you.</p>
            </div>
            <div className="common-blog-img-text-wrap">
                <div className="common-blog-img-wrap">
                        <img src={ASSETS.BLOG.IotUse} className="left-side-laptop-img-2" alt="" />
                </div>
                <div className="link-wrap">
                    <Link to={'#'} className="month-link">19 Jan, 2019</Link>
                    <Link to={'#'}><i className="fa fa-user" aria-hidden="true"></i>Sonali</Link>
                    <Link to={'#'}><i className="fa fa-folder"
                                      aria-hidden="true"></i>MARKETING</Link>
                </div>
                <ul className="blog-list-wrap">
                  {blogDetailsList1.map((row) => (
                        <li>
                            <h4 className="common-title">{row.title}</h4>
                            {row.description1 && <p>{row.description1}</p>}
                            {row.description2 && <p>{row.description2}</p>}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="common-blog-img-text-wrap">
                <div className="common-blog-img-wrap">
                <img src={ASSETS.BLOG.IotIndustryBannerUse} className="left-side-laptop-img-2" alt="" />
                </div>
                <ul className="blog-list-wrap mt-4">
                    {blogDetailsList2.map((row) => (
                        <li>
                            <h4 className="common-title">{row.title}</h4>
                            {row.description1 && <p>{row.description1}</p>}
                            {row.description2 && <p>{row.description2}</p>}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="common-blog-img-text-wrap">
                <div className="common-blog-img-wrap">
                <img src={ASSETS.BLOG.IotUses} className="left-side-laptop-img-2" alt="" />
                </div>
                <ul className="blog-list-wrap mt-4">
                    {blogDetailsList3.map((row) => (
                        <li>
                            <h4 className="common-title">{row.title}</h4>
                            {row.description1 && <p>{row.description1}</p>}
                            {row.description2 && <p>{row.description2}</p>}
                        </li>
                    ))}
                </ul>
            </div>




            <div className="social-icons-wrap">
                <div className="tag-wrap-2">
                    <h6>Tags:</h6>
                    <a href="javascript:void(0);">MARKETING</a>
                </div>
                <SocialShare />
            </div>
            <hr />
            <RelatedCategories />
        </div>
    )
}
export default TheOfEvolutionIotApplicationAndBenefits;
