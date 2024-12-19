import * as React from 'react';
// import KeyFeatureImg from "./../../assets/images/mobile-2.webp";

const KeyFeature =(props) => {
    const {data} = props;
    const {listText1, listText2, listText3, listText4, listText5, listText6, listText7, listText8, listText9} = data;
    const keyFeatureList = [
        {
            listText: listText1,
        },
        {
            listText: listText2,
        },
        {
            listText: listText3,
        },
        {
            listText: listText4,
        },
        {
            listText: listText5,
        },
        {
            listText: listText6,
        },
        {
            listText: listText7,
        },
        {
            listText: listText8,
        },
        {
            listText: listText9,
        },
    ]
    return (
<>
    <section className="key-feature-sec gb-md-pad-ver">
        <div className="container ">
            <div className="row key-feature-row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="key-feature-right-side">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade active show" id="printable" role="tabpanel"
                                 aria-labelledby="v-pills-settings-tab">
                                <div className="accordion-wrap">
                                                    <h5>Key Feature</h5>
                                                    <ul>
                                                        {keyFeatureList.map((row) => (
                                                            (row.listText && <li>{row.listText}</li>)
                                                        ))}
                                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    </section>

</>
    );
}

export default KeyFeature;
