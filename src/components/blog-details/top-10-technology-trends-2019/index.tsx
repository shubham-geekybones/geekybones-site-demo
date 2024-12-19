import {ASSETS} from "../../common/images";
import {Link} from "gatsby";
import RelatedCategories from "../../common/related-categories";
import * as React from "react";
import SocialShare from "../../common/social-share";

const Top10TechnologyTrends2019 = () => {

    const blogDetailsList1 = [
        {
            title: '1. Augmented analytics',
            description1: 'With new additions every day, the amount of data to analyze, group and prepare have become manifold. And, it has become very tough for the Data scientists to get accurate results. There are increased chances to miss important insights. Here comes in picture the newer technology trend, Data analytics that can clearly identify the patterns that are hidden. According to a report. More than 40% of the Data Science related tasks will be automated, by 2020.',
        },
        {
            title: '2. Blockchain',
            description1: 'Blockchain is a list of records or blocks that grows continuously. These blocks are secured and linked with the help of cryptography. Apart from being a part of technology trend that reflects on cryptocurrencies, blockchain has plethora of other uses. The concept the of making a chain of data where you can just add and cannot make changes makes it ultra secure.',
            description2: 'Implementation of the concept of blockchain will keep you away from, validation of a transaction from a trusted third-party. With its huge potential to protect personal medical, art and vulnerable information like real estate, Blockchain is going to come up as one of the most rampant technology trends in 2019.'
        },
        {
            title: '3. Internet of Things',
            description1: 'Technology trends like “Internet of things” are evolutions where the future lies! IoT is a concept that enables home appliances, cars, and other devices to get connected to the Internet and exchange data anytime. In 2017, according to a report, 8.4 billion IoT devices were in the market and that’s just the beginning. It is going to be one of the overpowering technology trends in the market in 2019. And, by the end of 2020, the number of IoT devices is estimated to reach 30 billion.',
        },
        {
            title: '4. Artificial intelligence',
            description1: 'Artificial intelligence is also sometimes referred to as machine intelligence! In simple words, AI is the intelligence that machines demonstrate. With the help of Artificial Intelligence machines can work out every solution as intelligently as humans. And, undoubtedly it is going to be another dominant technology trend in 2019.',
        },
        {
            title: '5. Fifth Generation Network – 5G',
            description1: 'We have already entered into 2019 and in the list of technology trends that will dominate the market, we cannot forget including 5G. According to studies, 5G is going to be on top of the list indeed. 5G which stands for fifth-generation is a very fresh concept with regards to mobile phone Network. This fifth-generation Network is going to be much faster than 4G Network around 20-100 times. The technical development is definitely going to bring about unmatched developments in the world of the Internet and mobile.',
        },
        {
            title: '6. Digital Twins',
            description1: 'With the explosion of the explosion of the Internet of things, Digital Twin is definitely going to become a dominating technology trend in 2019. Digital Twin is nothing, but the method of representing the real-world entities in the Digital form. Talking about the growth of this technology in the New Year 2019, it DTOs (Digital Twin of Organizations) will particularly be dominant. These dynamic software models that use operational and other Data to make an analysis of what it takes an organization to make its operational model functional.',
        },
        {
            title: '7. E-Commerce',
            description1: 'Most of us could remember the time when the word e-Commerce was alien to us! Shopping meant physical exhaustion and huge travel expenses. But, thanks to the technology, which made E-commerce possible and made shopping easy, convenient and pocket-friendly. It is expected that in 2019 it is going to add more to it making the dream of shopping from the comfort zone of your home possible.',
        },
        {
            title: '8. Smart Spaces',
            description1: 'The concept of smart spaces undoubtedly going to be the master of the team “technology trends in 2019”! A smark space can be defined as any Digital or physical scenario in which many technical systems and humans can interact. Moreover, it’s an open more connected and interactive environment which works on extraordinarily intelligent theories. The rapidly growing digital workspace, smart homes, and smart cities are some of the aptest developments in the arena.',
        },
        {
            title: '9. Empowered Edge',
            description1: 'Empowered Edge computing is the technology that makes content delivery, information processing, and content collection possible closer to the repositories and sources of the information. It is the Internet of things that drive Edge computing, but it is expected that in the coming few years you will see many new additions like 5G, AI chips, advanced processing, and more.',
        },
        {
            title: '10. Digital Ethics and Privacy',
            description1: 'With the rapid growth in Digital marketing trends, the concern for privacy and ethics of organizations, Governments, and individuals has increased manifold. Therefore, in 2019, we must be seeing some really significant developments in risk mitigation, ethics, and privacy. It’s more of a step towards supporting the upcoming technology trends in 2019.',
            description2: 'There are a plethora of names to this list. Technology is going to be the king in every sphere in 2019 and it’s going to make an individual’s life way easier.'
        },
    ]

    return (
        <div className="left-side-2">
            <div className="description-1">
                <p>Technology is skyrocketing with many new developments every day. We have already entered into an era where technical dependency is rampant. Undoubtedly, 2019 is going to make many new additions to the ever-evolving technology trends. So let's just have a look and learn more about these trends.</p>
            </div>
            <div className="common-blog-img-text-wrap">
                <div className="common-blog-img-wrap">
                    <img src={ASSETS.BLOG.StatisticsAndAnalytics} className="left-side-laptop-img-2" alt="" />
                </div>
                <div className="link-wrap">
                    <Link to={'#'} className="month-link">5 jan, 2019</Link>
                    <Link to={'#'}><i className="fa fa-user" aria-hidden="true"></i>Sonali</Link>
                    <Link to={'#'}><i className="fa fa-folder"aria-hidden="true"></i>Technology Trends</Link>
                    <Link to={'#'}><i className="fa fa-folder"aria-hidden="true"></i>AI</Link>
                    <Link to={'#'}><i className="fa fa-folder"aria-hidden="true"></i>Blockchain</Link>
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
                    <a href="javascript:void(0);">Technology Trends</a>
                    <a href="javascript:void(0);">AI</a>
                    <a href="javascript:void(0);">Blockchain</a>
                </div>
                <SocialShare />
            </div>
            <hr />
            <RelatedCategories />
        </div>
    )
}
export default Top10TechnologyTrends2019;
