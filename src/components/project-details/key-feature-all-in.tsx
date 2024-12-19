import * as React from 'react';
// import KeyFeatureImg from "./../../assets/images/mobile-2.webp";

const KeyFeatureAllIn =() => {

    return (
<>
    <section className="key-feature-sec gb-md-pad-ver">
        <div className="container ">
            <div className="row">
                <div className="col-md-12">
                    <div className={"key-feature-heading"}>
                         <h2>Key <span>Features</span></h2>
                        <p>Enjoy better learning experiences with the unique and customized features to suit all your educational requirements.</p>
                    </div>
                </div>
            </div>
            <div className="row key-feature-row">
                <div className="col-lg-3 col-md-5">
                    <div className="key-feature-left-side">
                        <div className="d-flex align-items-start">
                            <div className="nav flex-column nav-pills  tab-wrap" id="v-pills-tab" role="tablist"
                                 aria-orientation="vertical">
                                <button className="nav-link active show" id="v-pills-home-tab" data-bs-toggle="pill"
                                        data-bs-target="#printable" type="button" role="tab"
                                        aria-controls="v-pills-home" aria-selected="true">Printable Vocab List
                                </button>
                                <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"
                                        data-bs-target="#classroom" type="button" role="tab"
                                        aria-controls="v-pills-profile" aria-selected="false">Classroom Activities
                                </button>
                                <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"
                                        data-bs-target="#home-learning" type="button" role="tab"
                                        aria-controls="v-pills-messages" aria-selected="false">Home Learning
                                </button>
                                <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
                                        data-bs-target="#Customize" type="button" role="tab"
                                        aria-controls="v-pills-settings" aria-selected="false">Customize a Classroom Activity
                                </button>
                                <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
                                        data-bs-target="#Leaderboards" type="button" role="tab"
                                        aria-controls="v-pills-settings" aria-selected="false">Leaderboards
                                </button>
                                <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
                                        data-bs-target="#stream" type="button" role="tab"
                                        aria-controls="v-pills-settings" aria-selected="false">Activity Stream
                                </button>
                                <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
                                        data-bs-target="#update" type="button" role="tab"
                                        aria-controls="v-pills-settings" aria-selected="false">My Uploads
                                </button>
                                <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
                                        data-bs-target="#Design" type="button" role="tab"
                                        aria-controls="v-pills-settings" aria-selected="false">Design Vocabulary List
                                </button>
                                <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
                                        data-bs-target="#code" type="button" role="tab"
                                        aria-controls="v-pills-settings" aria-selected="false">My Class Codes
                                </button>
                                <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
                                        data-bs-target="#suggest" type="button" role="tab"
                                        aria-controls="v-pills-settings" aria-selected="false">Suggest vocabulary
                                </button>
                                <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
                                        data-bs-target="#report" type="button" role="tab"
                                        aria-controls="v-pills-settings" aria-selected="false">Report mistranslation
                                </button>
                                <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
                                        data-bs-target="#Organization" type="button" role="tab"
                                        aria-controls="v-pills-settings" aria-selected="false">Organization
                                </button>
                                <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
                                        data-bs-target="#admin" type="button" role="tab"
                                        aria-controls="v-pills-settings" aria-selected="false">Admin
                                </button>



                            </div>

                        </div>


                    </div>
                </div>
                <div className="col-lg-9 col-md-7">
                    <div className="key-feature-right-side">


                        <div className="tab-content" id="v-pills-tabContent">

                            <div className="tab-pane fade active show" id="printable" role="tabpanel"
                                 aria-labelledby="v-pills-settings-tab">
                                <div className="accordion-wrap">
                                                <h6 className={"mb-2 mb-md-3"}>Printable Vocab List</h6>
                                                  <p>
                                                      The vocabulary list can be downloaded or printed to distribute directly to the candidates. The vocab list has around 4897 lessons, and there are 53 languages. You need to follow six steps for printing the vocab list. Select your Department.
                                                  </p>
                                                    <ul>
                                                        <li>Select topic</li>
                                                        <li>Select class code (optional)</li>
                                                        <li>Selected subtopics/sections</li>
                                                        <li>Choose Languages</li>
                                                        <li>Select Date, Lesson Title & Learning Objective (optional)</li>
                                                    </ul>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="classroom" role="tabpanel"
                                 aria-labelledby="v-pills-settings-tab">
                                <div className="accordion-wrap">
                                    <h6 className={"mb-2 mb-md-3"}>Classroom Activities</h6>
                                    <p>There is a list of the curriculum for day-to-day classroom activities where teachers have the option to choose from the native language and target language. They can assign it to the candidates on a daily basis.
                                                    </p>

                                </div>
                            </div>

                            <div className="tab-pane fade" id="home-learning" role="tabpanel"
                                 aria-labelledby="v-pills-settings-tab">
                                <div className="accordion-wrap">
                                    <h6 className={"mb-2 mb-md-3"}>Home Learning</h6>
                                          <p>Teachers can hold monthly webinars for candidates where they can request tests and take challenges, performing several tasks.
                                                    </p>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="Customize" role="tabpanel"
                                 aria-labelledby="v-pills-settings-tab">
                                <div className="accordion-wrap">
                                    <h6 className={"mb-2 mb-md-3"}>Customize a Classroom Activity</h6>
                                                  <p>It includes starter activities such as mix and match vocabulary, text translation, image match, quick-fire, pairs, unjumble the sentences, and much more.
                                                  </p>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="Leaderboards" role="tabpanel"
                                 aria-labelledby="v-pills-settings-tab">
                                <div className="accordion-wrap">
                                    <h6 className={"mb-2 mb-md-3"}>Leaderboards</h6>
                                                <p>Organization leaderboards can be maintained to keep students motivated. Candidates are ranked according to their performance.
                                                </p>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="stream" role="tabpanel"
                                 aria-labelledby="v-pills-settings-tab">
                                <div className="accordion-wrap">
                                    <h6 className={"mb-2 mb-md-3"}>Activity Stream</h6>
                                                  <p>The activity stream keeps a record of every single activity that is performed after logging in. It even includes further details of the credentials that have been used.
                                                  </p>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="update" role="tabpanel"
                                 aria-labelledby="v-pills-settings-tab">
                                <div className="accordion-wrap">
                                    <h6 className={"mb-2 mb-md-3"}>My Uploads</h6>
                                                   <p>There are times when teachers want to give the manual assignments or learners want to get their assignments checked. In such situations, text translations and vocabulary lists can be uploaded.
                                                   </p>
                                </div>
                            </div>


                            <div className="tab-pane fade" id="Design" role="tabpanel"
                                 aria-labelledby="v-pills-settings-tab">
                                <div className="accordion-wrap">
                                    <h6 className={"mb-2 mb-md-3"}>Design Vocabulary List</h6>
                                                <p>Vocabulary lists can be customized and designed according to the needs of an individual.
                                                </p>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="code" role="tabpanel"
                                 aria-labelledby="v-pills-settings-tab">
                                <div className="accordion-wrap">
                                    <h6 className={"mb-2 mb-md-3"}>My Class Codes</h6>
                                    <p>Class codes can be created by teachers for better management of candidates. Reference codes can be assigned with the further categorization of the year group, type, number of pupils, and status. There is also an option where more pupils can be added to a certain group.
                                                  </p>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="suggest" role="tabpanel"
                                 aria-labelledby="v-pills-settings-tab">
                                <div className="accordion-wrap">
                                    <h6 className={"mb-2 mb-md-3"}>Suggest vocabulary</h6>
                                    <p>There could be some words that are not added to the current vocabulary list. Hence, there is an option where one can suggest and submit new vocabulary.
                                                  </p>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="report" role="tabpanel"
                                 aria-labelledby="v-pills-settings-tab">
                                <div className="accordion-wrap">
                                    <h6 className={"mb-2 mb-md-3"}>Report mistranslation</h6>
                                                 <p>If you find some error, you can report mistranslation by filling out the proper details.
                                                 </p>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="Organization" role="tabpanel"
                                 aria-labelledby="v-pills-settings-tab">
                                <div className="accordion-wrap">
                                    <h6 className={"mb-2 mb-md-3"}>Organization</h6>
                                    <p>The user can manage the organization by removing and adding pupils.
                                                 </p>

                                </div>
                            </div>

                            <div className="tab-pane fade" id="admin" role="tabpanel"
                                 aria-labelledby="v-pills-settings-tab">
                                <div className="accordion-wrap">

                                    <h6 className={"mb-2 mb-md-3"}>Admin</h6>
                                                   <p>The admin section comprises everything from activity stream to corrections, custom uploads, challenges, suggestions, organizations, vocabulary, languages, and testing logic.
                                                   </p>
                                </div>
                            </div>



                        </div>


                    </div>
                </div>
            </div>
        </div>
    </section>

</>
    );
}

export default KeyFeatureAllIn;
