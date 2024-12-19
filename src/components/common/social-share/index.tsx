import {navigate, Link} from "gatsby";
import * as React from "react";

const SocialShare = () => {

    let url = "";
    if (typeof window !== `undefined`) {
        url = window.location.href;
    }
    const shareOnFB = () => {
        let sharingUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        window.open(sharingUrl, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
        return false;
    }
    //
    const shareOnTwitter = () =>{
        var sharingUrl = `https://twitter.com/intent/tweet?url=${url}`;
         window.open(sharingUrl, 'TwitterWindow','width=600,height=300');
        return false;
    }
    const shareOnLinkedin = () => {
        var url = `https://www.linkedin.com/cws/share?url=${url}`;
        window.open(url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=350,width=480');
        return false;
    }

 const shareOnPinterest = () => {
        var url = `http://pinterest.com/pin/create/button/?url=${url}`;
        window.open(url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=350,width=480');
        return false;
    }

    return (
        <div className="share-wrap">
            <div className="share-heading"><h6>Share:</h6></div>
            <div className="social-fa-wrap">
                <div className="common-social-icon" onClick={shareOnFB}><i className="fa fa-facebook" aria-hidden="true"></i></div>
                <div className="common-social-icon" onClick={shareOnTwitter}><i className="fa fa-twitter"
                                  aria-hidden="true"></i></div>
                <div className="common-social-icon" onClick={shareOnLinkedin}><i className="fa fa-linkedin" aria-hidden="true"></i></div>
                <div className="common-social-icon" onClick={shareOnPinterest}><i className="fa fa-pinterest-p"
                                  aria-hidden="true"></i></div>
            </div>
        </div>
    )
}
export default SocialShare;
