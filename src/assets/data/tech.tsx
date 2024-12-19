import { ASSETS } from "../../components/common/images";

interface Technology {
    imgSrc: string;
    imgAlt: string;
    imgStyle: React.CSSProperties;
    name: string;
}
interface gallerySlides {
    imgSrc: string;
    imgAlt: string;
    imgStyle: React.CSSProperties;
    name: string;
}
interface gallerySportsSlideData {
    imgSrc: string;
    imgAlt: string;
    imgStyle: React.CSSProperties;
    name: string;
}
interface Slide {
    technologies: Technology[];
    project: {
        mainImgSrc: string;
        mainImgAlt: string;
    };
}
interface testimonialLists{
    clientMessage:string;
    clientName:string;
}
interface blogList{
    blogImg: string,
    date: string,
    title: string,
    description:string,
    url: string,
}

export const slidesData: Slide[] = [
    {
        technologies: [
            { imgSrc: ASSETS.HOME.DECO, imgAlt: "DECO", imgStyle: { width: 50, height: 50 }, name: "Nest JS" },
            { imgSrc: ASSETS.APPDETAILS.NextJs, imgAlt: "NEXTJS", imgStyle: { width: 90, height: 50 }, name: "Next JS" },
            { imgSrc: ASSETS.HOME.MONGODB, imgAlt: "MONGODB", imgStyle: { width: 50, height: 50 }, name: "MongoDB" },
            { imgSrc: ASSETS.HOME.AWS, imgAlt: "AWS", imgStyle: { width: 50, height: 50 }, name: "AWS" },
        ],
        project: { mainImgSrc: ASSETS.HOME.Mobile2Home, mainImgAlt: "Mobile2Home" },
    },
    {
        technologies: [
            { imgSrc: ASSETS.PORTFOLIO.SymfonyBlack, imgAlt: "Symfony", imgStyle: { width: 50, height: 50 }, name: "Symfony" },
            { imgSrc: ASSETS.HOME.LaravelHome, imgAlt: "Laravel", imgStyle: { width: 50, height: 50 }, name: "Laravel" },
            { imgSrc: ASSETS.HOME.CodineitherHome, imgAlt: "codineither", imgStyle: { width: 50, height: 50 }, name: "Codineither" },
            { imgSrc: ASSETS.HOME.CakephpHome, imgAlt: "CakePHP", imgStyle: { width: 50, height: 50 }, name: "CakePHP" },
        ],
        project: { mainImgSrc: ASSETS.HOME.TechSportGear, mainImgAlt: "TechSportGear" },
    },
    {
        technologies: [
            { imgSrc: ASSETS.APPDETAILS.MySql, imgAlt: "MySql", imgStyle: { width: 110, height: 60, objectFit: "cover" }, name: "MySQL" },
            { imgSrc: ASSETS.WEBDEVELOPMENT.Php, imgAlt: "Php", imgStyle: { width: 110, height: 60, objectFit: "cover" }, name: "Php" },
            { imgSrc: ASSETS.PORTFOLIO.SymfonyBlack, imgAlt: "Symfony", imgStyle: { width: 50, height: 50 }, name: "Symfony" },
        ],
        project: { mainImgSrc: ASSETS.HOME.Auslankamatrimony, mainImgAlt: "Auslankamatrimony" },
    },
    {
        technologies: [
            { imgSrc: ASSETS.HOME.WordpressHome, imgAlt: "Wordpress", imgStyle: { width: 50, height: 50 }, name: "Wordpress" },
            { imgSrc: ASSETS.WEBDEVELOPMENT.Php, imgAlt: "Php", imgStyle: { width: 110, height: 60, objectFit: "cover" }, name: "Php" },
            { imgSrc: ASSETS.APPDETAILS.Gutenberg, imgAlt: "Gutenberg", imgStyle: { width: 50, height: 50 }, name: "Gutenberg" },
            { imgSrc: ASSETS.APPDETAILS.MySql, imgAlt: "MySql", imgStyle: { width: 110, height: 60,objectFit:"cover" }, name: "MySql" },
        ],
        project: { mainImgSrc: ASSETS.HOME.Mav3rik, mainImgAlt: "Mav3rik" },
    },
    {
        technologies: [
            { imgSrc: ASSETS.APPDETAILS.ExpressJs, imgAlt: "ExpressJs", imgStyle: { width: 126, height: 33, objectFit: "cover" }, name: "ExpressJs" },
            { imgSrc: ASSETS.APPDETAILS.NextJs, imgAlt: "NEXTJS", imgStyle: { width: 90, height: 50 }, name: "NESTJS" },
            { imgSrc: ASSETS.APPDETAILS.GraphQl, imgAlt: "GraphQl", imgStyle: { width: 126, height: 33, objectFit: "cover" }, name: "GraphQl" },
            { imgSrc: ASSETS.APPDETAILS.PostreSql, imgAlt: "PostreSql", imgStyle: { width: 160, height: 23, objectFit: "cover" }, name: "PostreSql" },
            { imgSrc: ASSETS.APPDETAILS.ReactImg, imgAlt: "React", imgStyle: { width: 110, height: 60,objectFit:"cover"}, name: "React" },
        ],
        project: { mainImgSrc: ASSETS.PORTFOLIO.CandyCoinlogo, mainImgAlt: "Mav3rik" },
    }
];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           


export const gallerySliderData: gallerySlides[] = [
    { imgSrc: ASSETS.GALLERY.gallerySlide1, imgAlt: "gallerySlide1", imgStyle: { width: 50, height: 50 }, name: "gallerySlide1" },
    { imgSrc: ASSETS.GALLERY.gallerySlide2, imgAlt: "gallerySlide2", imgStyle: { width: 90, height: 50 }, name: "gallerySlide1" },
    { imgSrc: ASSETS.GALLERY.gallerySlide3, imgAlt: "gallerySlide3", imgStyle: { width: 50, height: 50 }, name: "gallerySlide1" },
    { imgSrc: ASSETS.GALLERY.gallerySlide4, imgAlt: "gallerySlide4", imgStyle: { width: 50, height: 50 }, name: "gallerySlide1" },
  ];

export const gallerySportsData : gallerySportsSlideData[]=[
    { imgSrc: ASSETS.GALLERY.memoriesimg10, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
    { imgSrc: ASSETS.GALLERY.memoriesimg11, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
    { imgSrc: ASSETS.GALLERY.memoriesimg12, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
    { imgSrc: ASSETS.GALLERY.memoriesimg13, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
    { imgSrc: ASSETS.GALLERY.memoriesimg14, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
    { imgSrc: ASSETS.GALLERY.memoriesimg15, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
    { imgSrc: ASSETS.GALLERY.memoriesimg16, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
    { imgSrc: ASSETS.GALLERY.memoriesimg17, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
    { imgSrc: ASSETS.GALLERY.memoriesimg18, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
    { imgSrc: ASSETS.GALLERY.memoriesimg19, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
    { imgSrc: ASSETS.GALLERY.memoriesimg20, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
    { imgSrc: ASSETS.GALLERY.memoriesimg7, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
    { imgSrc: ASSETS.GALLERY.memoriesimg8, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
    { imgSrc: ASSETS.GALLERY.memoriesimg9, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
    { imgSrc: ASSETS.GALLERY.memoriesimg21, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
    { imgSrc: ASSETS.GALLERY.memoriesimg22, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
    { imgSrc: ASSETS.GALLERY.memoriesimg23, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
    { imgSrc: ASSETS.GALLERY.memoriesimg24, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
    { imgSrc: ASSETS.GALLERY.memoriesimg25, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
    { imgSrc: ASSETS.GALLERY.memoriesimg26, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
    { imgSrc: ASSETS.GALLERY.memoriesimg27, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
    { imgSrc: ASSETS.GALLERY.memoriesimg28, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
    { imgSrc: ASSETS.GALLERY.memoriesimg29, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
    { imgSrc: ASSETS.GALLERY.memoriesimg30, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
    { imgSrc: ASSETS.GALLERY.memoriesimg31, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
    { imgSrc: ASSETS.GALLERY.memoriesimg32, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
    { imgSrc: ASSETS.GALLERY.memoriesimg33, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
    { imgSrc: ASSETS.GALLERY.memoriesimg34, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
    { imgSrc: ASSETS.GALLERY.memoriesimg35, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
    { imgSrc: ASSETS.GALLERY.memoriesimg36, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
    { imgSrc: ASSETS.GALLERY.memoriesimg1, imgAlt: "memoriesimg1", imgStyle: { width: 50, height: 50 }, name: "memoriesimg1" },
    { imgSrc: ASSETS.GALLERY.memoriesimg2, imgAlt: "memoriesimg2", imgStyle: { width: 90, height: 50 }, name: "memoriesimg2" },
    { imgSrc: ASSETS.GALLERY.memoriesimg3, imgAlt: "memoriesimg3", imgStyle: { width: 50, height: 50 }, name: "MongoDB" },
    { imgSrc: ASSETS.GALLERY.memoriesimg4, imgAlt: "memoriesimg4", imgStyle: { width: 50, height: 50 }, name: "memoriesimg3" },
    { imgSrc: ASSETS.GALLERY.memoriesimg5, imgAlt: "memoriesimg5", imgStyle: { width: 50, height: 50 }, name: "memoriesimg4" },
    { imgSrc: ASSETS.GALLERY.memoriesimg6, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg6" },
    { imgSrc: ASSETS.GALLERY.memoriesimg37, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
    { imgSrc: ASSETS.GALLERY.memoriesimg38, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
  { imgSrc: ASSETS.GALLERY.memoriesimg39, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
    
  { imgSrc: ASSETS.GALLERY.memoriesimg40, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
  { imgSrc: ASSETS.GALLERY.memoriesimg41, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
  { imgSrc: ASSETS.GALLERY.memoriesimg42, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
  { imgSrc: ASSETS.GALLERY.memoriesimg43, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
  { imgSrc: ASSETS.GALLERY.memoriesimg44, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
  { imgSrc: ASSETS.GALLERY.memoriesimg45, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
  { imgSrc: ASSETS.GALLERY.memoriesimg46, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
  { imgSrc: ASSETS.GALLERY.memoriesimg47, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
  { imgSrc: ASSETS.GALLERY.memoriesimg48, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
  { imgSrc: ASSETS.GALLERY.memoriesimg49, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
  { imgSrc: ASSETS.GALLERY.memoriesimg50, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
  { imgSrc: ASSETS.GALLERY.memoriesimg51, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
  { imgSrc: ASSETS.GALLERY.memoriesimg52, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
  { imgSrc: ASSETS.GALLERY.memoriesimg53, imgAlt: "memoriesimg6", imgStyle: { width: 50, height: 50 }, name: "memoriesimg7" },
]

    export const testimonialListData: testimonialLists[]=[
    {
      clientMessage:
        "GeekyBones did an awesome job! The team was very quick to communicate and had quick turnaround times! They were diligent in making sure he did the job exceptionally well! Would use them again as well as recommend them to others!",
      clientName: "Y. Wilson",
    },

    {
      clientMessage:
        "Great working with Daishy, very fast initial results, quick learning, great communication and dedication to getting the job done. Very happy.",
      clientName: "T. Ward",
    },
    {
      clientMessage:
        "GeekyBones team has 100% met the required specifications. So that the result was quick and largely satisfactory.",
      clientName: "D. Giorgio",
    },
    {
      clientMessage:
        "GeekyBones team realized the project exactly as we wanted it. The processing times were higher than expected, but on the other hand, we were in no hurry. So we have privileged the final result, instead of a hasty development.",
      clientName: "D. Giorgio",
    },
    {
      clientMessage:
        " Great team. Completed a challenging Express JS assignment and was able to generate Open API Docs for my dev portal. Would recommend!",
      clientName: "M. Davis",
    },
    {
      clientMessage:
        "A committed professional. Did work even when it involved doing things not initially identified, without any hesitation or asking for any additional payment. Did a good job and within the accepted budget. Great work ethics with great work quality!",
      clientName: "S. Prasad",
    },
    {
      clientMessage:
        "If I can give more than 5 stars for each of the above categories, I would love to give; that is the way GeekyBones delivered the project. I highly recommend Manoj for his exceptional professionalism and patience. He excels in web design and development, consistently exceeds client expectations, and is a valuable asset to any team. His creativity, communication, and problem-solving skills ensure meaningful, user-friendly projects delivered on time. I look forward to working with him again in the future.",
      clientName: "A Ram",
    },
    {
      clientMessage:
        "I have worked with the GeekyBones Lab team for almost three years and am extremely happy with the results. They deliver on time, understand specifications, and handle changes quickly, even outside regular hours. The team is reliable, professional, and takes the stress out of development. Highly recommended 10/10!",
      clientName: "A. Harris",
    },
    ];
    export const blogListData: blogList[]=[
        {
            blogImg: ASSETS.BLOG.BlogEcommerce1,
            date: '8 Oct, 2021',
            title: ' Building an App like Amazon - Step-By-Step Process',
            description: 'Marketplace apps like Amazon have taken the shopping experiences to the next level. So if you are also preparing and planning to venture into this ever-evolving e-commerce marketplace, it is a great idea as the online trend seems to grow....',
            url: 'a-complete-guide-to-create-an-ecommerce-app-like-amazon',
        },
        {
            blogImg: ASSETS.BLOG.BlogDemand,
            date: '22 Sep, 2021',
            title: ' Mobile Apps Ideas to Fuel Different Business Industries',
            description: 'The world is changing at a rapid speed where technology has simplified everything. So why not take advantage of flourishing on-demand apps that are gaining popularity around the globe. Consumers these days are searching for speed, convenience...',
            url: 'mobile-app-ideas-to-fuel-different-business-industries',
        },
        {
            blogImg: ASSETS.BLOG.InternetOfThings,
            date: '19 Jan, 2019',
            title: 'IoT Complete Guide: Evolution, Application & Benefits',
            description: 'Let’s forget about the technical part, for a moment. And, focus on the words that “Internet of Things” encapsulates. IoT contains two wide words that are ‘Internet’ and ‘Things’. Internet, as we know, is a “Global system of interconnected...',
            url: 'the-evolution-of-iot-application-and-benefits',
        },
        {
            blogImg: ASSETS.BLOG.RightCompanyToJoin,
            date: '12 Jan, 2019',
            title: 'How to Select the Right Company to Join, for Your Career Growth',
            description: 'Your workplace is your second home! You spend almost half of your day here. And you are unquestionably making the biggest mistake of your life, if you don’t know exactly the criteria you must consider to select the right...',
            url: 'how-to-select-the-right-company-to-join',
        },
        {
            blogImg: ASSETS.BLOG.StatisticsAndAnalytics,
            date: '5 Jan, 2019',
            title: 'Top 10 Technology Trends in 2019',
            description: 'Technology is skyrocketing with many new developments every day. We have already entered into an era where technical dependency is rampant. Undoubtedly, 2019 is going to make many new additions to the ever-evolving technology trends. And, the same is...',
            url: 'top-10-technology-trends-2019',
        },
    ]