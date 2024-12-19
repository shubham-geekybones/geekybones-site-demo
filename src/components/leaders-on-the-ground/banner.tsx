import * as React from "react";

const Banner = () => {
    return (
        <section className="gb-cricket-banner">
            <div className="container">
                <div className="gb-cricket-banner-heading">
                    <h3 className="text-light text-center">Outside the Office Window: Leaders on the Ground! - Cricket Matches</h3>
                    <p className="text-light text-center">Aren't these phrases energising to you? Well, they are and this is how we find our leaders and fight stress. At GeekyBones, we adopt a gamification culture! We integrate games into our workplace as we all like playing games for entertainment. Cricket, above all other games, is our favourite, and it has made office lunch even more pleasurable.<br />
                        {/* It's just that playing Cricket is so much fun that it motivates our employees to participate and raise team morale.<br />
                        Also it is truly said by the famous cricket player Ravindra Jadeja, "Cricket is such a sport that you get to learn something from someone every day," */}
                    </p>
                    <a href="https://cricheroes.com/team-profile/1225391/geekybones-lab-pvt-ltd/members"  target="_blank" className="gb-animate-sm-btn-red me-sm-2 mt-sm-3"> VIEW OUR TEAM</a>
                </div>
            </div>
        </section>
    )
}
export default Banner;
