import {ASSETS} from "../../common/images";
import {Link} from "gatsby";
import RelatedCategories from "../../common/related-categories";
import * as React from "react";
import SocialShare from "../../common/social-share";

const HowToSelectTheRightCompanyToJoin = () => {

    const blogDetailsList1 = [
        {
            title: '1. Are you going to Learn Something New?',
            description1: 'The first and the most important aspect is the learning prospects on Job! It’s important to evaluate at the first hand, if this company is going to help you learn new things or not. Is this job going to add fresh skills to enhance your marketability into your area of work?',
        },
        {
            title: '2. How is the work Culture and work Environment?',
            description1: 'Another important aspect when you are looking out to select the right company is the work culture of the organization. How the fellow-employees and the managers behave and treat each other. You can find out about the culture of the company by talking to some of the ex-employees or the current employees.',
        },
        {
            title: '3. Is it Paying you in Par with your Skills?',
            description1: 'Make sure you are not being underpaid! Before you accept the offer, take some time and evaluate if it’s paying you in par with your skills. After all we all are working to earn and it’s your job to evaluate that your skill is not being underrated. The Right company will always pay you right.',
        },
        {
            title: '4. How it’s going to help in your future career endeavours?',
            description1: 'Irrespective of the work you do, you can’t keep the graph of your career growth in the right direction, if you are not working on your skills. With constant technological advancements happening every day, you need to develop new skills every year. List out in black and white, the skills that you are going to acquire. It’s an important criterion when you are selecting the right company for jobchange. It will add to your marketability!',
        },
        {
            title: '5. What is the size of the organisation you are going to Join?',
            description1: 'Most people don’t pay heed to this aspect while looking for the right company to join. What is the size of the company and how many people are going to be around with you at work; it’s a very crucial consideration. There are positive and negative aspects of both; a big size team and a small team. It’s you, who has to decide which is the right company to join!',
        },
        {
            title: '6. How the manager of the company treat his Employees?\n',
            description1: 'Another aspect that you need to consider seriously when you are selecting the right company to join is ‘how the manager treats his employees’! Most of your day-to-day experience in the company will depend on this factor alone. Will you be able to interact one-and-one with your supervisor? These all are the answers you need to find before making the final decision.',
        },
        {
            title: '7. Can you maintain the work & personal life balance working here?\n',
            description1: 'Before you even take the first step in this direction, it’s necessary to know, whether you would be able to maintain the right balance between work and personal life working here? Before you tick off this point from the list of criterian to select the right company to join, you need to study all the angles.',
        },
        {
            title: '8. Does it fit with your long-term Goals?',
            description1: 'And, you cannot ignore your own custom-made long-term goals, no matter what you are doing. Maybe you have plans to get into some business a few years later, maybe you want to study something else in future. So, let yourself make clear if the skills you are going to acquire here are going to help in your long-term goals.',
        },
        {
            title: '9. Do you share common Goals with that of the company?\n',
            description1: 'Unquestionably, we spend a considerable part of our lives at our workplace. That means we are investing a good amount of our thoughts, energy as well as creativity in what we are doing here. And, therefore, one of the most important aspect here is; are we able to see any similarity between the purpose of the company and that of our own? If the answer is no, this is definitely not the right company to join.',
        },
        {
            title: '10. Why do you want to Join this Company?',
            description1: 'Before you start devoting your precious time here, answer one question; ‘why do you want to join this company? Is it just because they are offering you great package? Is it because you do not have any other good options at hand? If the answer is yes, you are absolutely not at the right path. When you can answer it in a way that, you can connect with the work and career opportunities they are offering, then it’s perfectly the right company to join.',
            description2: 'So, if you can seriously check out on these aspects while working on the criteria to select the right company to join, you are definitely going to land on the right place. We at www.geekybones.com even have our own set of criteria to select the right candidate. It helps not only the company but also the candidate to avoid any kind of mistake with respect to their career growth prospects.',
        },
    ]
    return (
        <div className="left-side-2">
            <div className="description-1">
                <p>Your workplace is your second home! You spend almost half of your day here. And you are unquestionably making the biggest mistake of your life, if you don’t know exactly the criteria you must consider to select the right company to join.</p>
                    <p>Apart from this, it’s the place where you can find learning prospects for your career growth. The job is not just to get a job! Having an offer with tremendously great perks and benefits is one thing, but deciding how it is going to affect your career, in the long run, is another.</p>
                    <p>With new <Link to={'/top-10-technology-trends-2019'}>technology trends</Link> coming up in the market every single day, money should not be the only consideration to select the right company. There are plenty of plenty of other things, you will have to scrutinize and take the final decision.</p>
                <p>Here is this comprehensively designed list of considerations you need to make while you select the right company. This list will help in taking the graph of your career growth in the right direction. Here we go……</p>
            </div>
            <div className="common-blog-img-text-wrap">
                <div className="common-blog-img-wrap">
                    <img src={ASSETS.BLOG.AreYouGoingTolearnSomethingnew} className="left-side-laptop-img-2" alt="" />
                </div>
                <div className="link-wrap">
                    <Link to={'#'} className="month-link"> 12 Jan, 2019</Link>
                    <Link to={'#'}><i className="fa fa-user" aria-hidden="true"></i>Sonali</Link>
                    <Link to={'#'}><i className="fa fa-folder" aria-hidden="true"></i> Workplace</Link>
                    <Link to={'#'}><i className="fa fa-folder" aria-hidden="true"></i> Career</Link>
                    <Link to={'#'}><i className="fa fa-folder" aria-hidden="true"></i> Growth</Link>
                    <Link to={'#'}><i className="fa fa-folder" aria-hidden="true"></i> Company</Link>

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
            <div className="social-icons-wrap">
                <div className="tag-wrap-2">
                    <h6>Tags:</h6>
                    <a href="javascript:void(0);">Workplace</a>
                    <a href="javascript:void(0);">Career</a>
                    <a href="javascript:void(0);">Growth</a>
                    <a href="javascript:void(0);">Right Company</a>
                </div>
                <SocialShare />
            </div>
            <hr />
            <RelatedCategories />
        </div>
    )
}
export default HowToSelectTheRightCompanyToJoin;
